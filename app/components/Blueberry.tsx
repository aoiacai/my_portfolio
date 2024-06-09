
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import type { NextPage } from 'next'
import { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

//できればやりたいこと
//ぷよぷよの落下を上下できるようにする 上下切り替えはユーザが操作するcameraを使う
enum PuyoColor {
    pink = 0,
    yellow = 1,
    green = 2,
    blue = 3,
    purple = 4,
    size = 5
}
let ColorAarray = [0xFF0F77, 0xFFDE05, 0x93E01F, 0x19A3FE, 0x901DF5]
class Puyo {
    mesh: THREE.Mesh;
    color: number;
    constructor(position: THREE.Vector3, color: number) {
        this.color = color;
        const geometry = new THREE.SphereGeometry(0.5, 7, 7);
        const material = new THREE.MeshBasicMaterial({ color: ColorAarray[color], wireframe: true });
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.copy(position);
    }
}

class GameBoard {
    status: string = 'dropping';
    // ゲームボード上のぷよを格納する三次元配列
    board: (Puyo | null)[][][];
    base_position: THREE.Vector3 = new THREE.Vector3(-1.5, -3.5, -1.5);
    board_frame: THREE.LineSegments;
    constructor(width: number, height: number, depth: number, scene: THREE.Scene) {
        this.board = Array(height).fill(null).map(() => Array(width).fill(null).map(() => Array(depth).fill(null)));
        // ボックスジオメトリを作成
        const boxGeometry = new THREE.BoxGeometry(4, 7, 4);
        // エッジジオメトリを作成
        const edges = new THREE.EdgesGeometry(boxGeometry);
        // ラインマテリアルを作成
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
        // ラインを作成
        this.board_frame = new THREE.LineSegments(edges, lineMaterial);
        // シーンに追加
        this.board_frame.position.y = 0.45 - 1;
        scene.add(this.board_frame);
    }

    // ぷよをゲームボードに追加するメソッド
    addPuyo(puyo: Puyo, x: number, y: number, z: number, scene: THREE.Scene) {
        puyo.mesh.position.add(this.base_position);
        if (this.board[y][x][z] === null) {
            this.board[y][x][z] = puyo;
            scene.add(puyo.mesh);
        } else {
            throw new Error('The specified position is already occupied.');
        }
    }
    // ぷよを下に落とすメソッド
    // ぷよを下に落とすメソッド
    dropPuyos() {
        for (let x = 0; x < this.board[0].length; x++) {
            for (let z = 0; z < this.board[0][0].length; z++) {
                for (let y = 0; y < this.board.length; y++) {
                    if (this.board[y][x][z] !== null) {
                        let dropY = y;
                        while (dropY > 0 && this.board[dropY - 1][x][z] === null) {
                            dropY--;
                        }
                        if (dropY !== y) {
                            this.board[dropY][x][z] = this.board[y][x][z];
                            this.board[y][x][z] = null;
                        }
                    }
                }
            }
        }
    }
    // ぷよの位置を更新するメソッド
    updatePuyos(deltaTime: number, scene: THREE.Scene) {
        if (this.status !== 'dropping') return;
        let dropping = false;
        for (let y = 0; y < this.board.length; y++) {
            for (let x = 0; x < this.board[y].length; x++) {
                for (let z = 0; z < this.board[y][x].length; z++) {
                    const puyo = this.board[y][x][z];
                    //baseposを引く
                    if (puyo === null) continue

                    const puyo_true_pos = (puyo.mesh.position.clone()).sub(this.base_position)
                    if (puyo_true_pos.y - y > 0) {
                        puyo.mesh.position.y -= deltaTime;
                        const puyo_true_pos_now = (puyo.mesh.position.clone()).sub(this.base_position)
                        if (puyo_true_pos_now.y - y <= 0) {
                            puyo.mesh.position.y = y + this.base_position.y;
                        } else {
                            dropping = true;
                        }
                    }
                }
            }
        }
        if (dropping == false) {
            this.status = 'checking';
            this.checkConnectedPuyos(scene);
        }
        return dropping;
    }

    // ぷよが連結しているかどうかをチェックするメソッド
    checkConnectedPuyos(scene: THREE.Scene) {
        if (this.status !== 'checking') return
        const visited = this.board.map(layer => layer.map(row => row.map(() => false)));
        const dx = [-1, 0, 1, 0, 0, 0];
        const dy = [0, -1, 0, 1, 0, 0];
        const dz = [0, 0, 0, 0, -1, 1];
        //盤面が変化したかのflag
        let changed = false;
        const dfs = (x: number, y: number, z: number, color: number) => {
            let stack = [{ x, y, z }];
            let puyo_stack = [];
            let count = 0;
            while (stack.length > 0) {
                const { x, y, z } = stack.pop()!;
                if (x < 0 || x >= this.board[0].length || y < 0 || y >= this.board.length || z < 0 || z >= this.board[0][0].length) continue;
                if (visited[y][x][z] || this.board[y][x][z] === null) continue;
                visited[y][x][z] = true;
                puyo_stack.push({ x, y, z });
                count++;
                for (let i = 0; i < 6; i++) {
                    //範囲外はスキップ
                    if (y + dy[i] < 0 || y + dy[i] >= this.board.length) continue
                    if (x + dx[i] < 0 || x + dx[i] >= this.board[0].length) continue
                    if (z + dz[i] < 0 || z + dz[i] >= this.board[0][0].length) continue
                    //nullはスキップ
                    if (this.board[y + dy[i]][x + dx[i]][z + dz[i]] === null) continue
                    if (visited[y + dy[i]][x + dx[i]][z + dz[i]]) continue
                    if (this.board[y + dy[i]][x + dx[i]][z + dz[i]]?.color === color) {
                        stack.push({ x: x + dx[i], y: y + dy[i], z: z + dz[i] });

                    }
                }
            }
            return { count, puyo_stack };
        };

        for (let y = 0; y < this.board.length; y++) {
            for (let x = 0; x < this.board[0].length; x++) {
                for (let z = 0; z < this.board[0][0].length; z++) {
                    if (this.board[y][x][z] !== null && !visited[y][x][z]) {
                        const color = this.board[y][x][z]!.color;
                        let { count, puyo_stack } = dfs(x, y, z, color);
                        if (count >= 4) {
                            changed = true;
                            for (let i = 0; i < puyo_stack.length; i++) {
                                const { x, y, z } = puyo_stack[i];
                                this.puyo_stack.push({ x, y, z });
                            }

                        }
                    }
                }
            }
        }
        if (changed) { this.status = 'erasing'; this.erasingTimeStart = Date.now() + 1300; }
        else {
            this.status = 'stopping';
            this.addNewTopPuyo(scene);
        }
    }
    // statusがstoppingの場合に新たなPuyoを追加するメソッド
    addNewTopPuyo(scene: THREE.Scene) {
        if (this.status !== 'stopping') return
        let x, z;
        let availablePositions = [];

        // 全ての位置をチェックし、利用可能な位置を見つける
        for (let i = 0; i < this.board[0].length; i++) {
            for (let j = 0; j < this.board[0][0].length; j++) {
                if (this.board[this.board.length - 1][i][j] === null) {
                    availablePositions.push({ x: i, z: j });
                }
            }
        }

        // 利用可能な位置がなければ何もしない
        if (availablePositions.length === 0) {
            const fontLoader = new FontLoader();
            // フォントをロード
            fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {

                // テキストジオメトリを作成
                const geometry = new TextGeometry('Filled !', {
                    font: font,
                    size: 0.5,
                    height: 0.2,
                    curveSegments: 12,
                    bevelEnabled: true,
                    bevelThickness: 0.01,
                    bevelSize: 0.01,
                    bevelOffset: 0,
                    bevelSegments: 5
                });

                // マテリアルを作成
                const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

                // メッシュを作成
                const text1 = new THREE.Mesh(geometry, material);
                const text2 = text1.clone();
                const text3 = text1.clone();
                const text4 = text1.clone();

                const group = new THREE.Group();

                text1.position.set(-0.9, 0.25-1, 2.5);
                text2.rotation.y = Math.PI / 2;
                text2.position.set(2.5, 0.25-1, 0.9);
                text3.rotation.y = Math.PI;
                text3.position.set(0.9, 0.25-1, -2.5);
                text4.rotation.y = -Math.PI / 2;
                text4.position.set(-2.5, 0.25-1, -0.9);
                // シーンに追加
                scene.add(text1);
                scene.add(text2);
                scene.add(text3);
                scene.add(text4);
            });
            this.status = 'gameover';
            return;
        }

        // 利用可能な位置からランダムに選ぶ
        const position = availablePositions[Math.floor(Math.random() * availablePositions.length)];
        x = position.x;
        z = position.z;

        const puyo = new Puyo(new THREE.Vector3(x, this.board.length - 1, z), Math.floor(Math.random() * PuyoColor.size));
        this.addPuyo(puyo, x, this.board.length - 1, z, scene);
        this.dropPuyos();
        this.status = 'dropping';
    }

    erasingTimeStart = 0;
    puyo_stack: { x: number, y: number, z: number }[] = [];
    erasingEffect(scene: THREE.Scene) {
        if (this.status !== 'erasing') return
        //現在時間を引く
        let erasingTimeCount = this.erasingTimeStart - Date.now();
        //秒に変換
        erasingTimeCount = Math.floor(8 * (erasingTimeCount / 1000));
        if (erasingTimeCount < 0) erasingTimeCount = 0;
        if (erasingTimeCount % 2 == 0) {
            //消えるエフェクト
            for (let i = 0; i < this.puyo_stack.length; i++) {
                const { x, y, z } = this.puyo_stack[i];
                this.board[y][x][z]!.mesh.visible = false;
            }
        } else {
            for (let i = 0; i < this.puyo_stack.length; i++) {
                const { x, y, z } = this.puyo_stack[i];
                this.board[y][x][z]!.mesh.visible = true;
            }
        }
        if (erasingTimeCount == 0) {
            for (let i = 0; i < this.puyo_stack.length; i++) {
                const { x, y, z } = this.puyo_stack[i];
                scene.remove(this.board[y][x][z]!.mesh);
                this.board[y][x][z] = null;
            }
            this.puyo_stack = [];
            this.status = 'dropping';
            this.dropPuyos();
        }
    }

}

const Home: NextPage = () => {
    let canvas: HTMLElement
    useEffect(() => {
        if (canvas) return
        // canvasを取得
        canvas = document.getElementById('canvas')!

        // シーン
        const scene = new THREE.Scene()

        // サイズ
        const sizes = {
            width: innerWidth,
            height: innerHeight
        }

        // カメラ
        const camera = new THREE.PerspectiveCamera(
            75,
            sizes.width / sizes.height,
            0.1,
            1000
        )
        camera.position.z = 7.5
        // レンダラー
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas || undefined,
            antialias: true,
            alpha: true
        })
        renderer.setClearColor(0x000000);
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(window.devicePixelRatio)
        const controls = new OrbitControls(camera, renderer.domElement);

        //ゲームボードを生成
        const gameBoard = new GameBoard(4, 7, 4, scene);
        // ぷよを生成
        gameBoard.addNewTopPuyo(scene);

        // ライト
        const ambientLight = new THREE.AmbientLight(0xffffff, 1)
        scene.add(ambientLight)
        const light = new THREE.DirectionalLight(0xFFFFFF, 1);
        scene.add(light);




        // アニメーション
        const clock = new THREE.Clock();
        const tick = () => {
            window.requestAnimationFrame(tick)
            // 経過時間を取得
            const deltaTime = clock.getDelta();
            // ぷよの位置を更新
            gameBoard.updatePuyos(10 * deltaTime, scene);
            gameBoard.erasingEffect(scene);
            renderer.render(scene, camera)

        }
        tick()

        //関数でリサイズ処理は切り出す
        const resize = () => {
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(window.devicePixelRatio)
        }
        resize()
        // ブラウザのリサイズ処理
        window.addEventListener('resize', resize)

    }, [])
    return (
        <>
            <canvas id="canvas"></canvas>
        </>
    )
}

export default Home
