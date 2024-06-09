import { useRef, useEffect, useState } from 'react';
import Profile from './Profile';
import Header from './Header';

function RectangleWithRemainingHeight() {
    const [remainingHeight, setRemainingHeight] = useState(0);
    const profileRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateHeight = () => {
            const profileHeight = profileRef.current?.offsetHeight || 0;
            const headerHeight = headerRef.current?.offsetHeight || 0;
            const windowHeight = window.innerHeight;
            const remainingHeight = windowHeight - profileHeight - headerHeight;
            setRemainingHeight(remainingHeight);
        };

        // コンポーネントが描画されたときに高さを更新
        updateHeight();

        // ウィンドウのリサイズイベントを監視して高さを更新
        window.addEventListener('resize', updateHeight);

        // クリーンアップ関数でイベントリスナーを削除
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, [profileRef, headerRef]);

    return (
        <div>
            <div ref={headerRef}>
                <Header />
            </div>
            <div style={{ height: `${remainingHeight}px`, width: '100%', zIndex: '-2', pointerEvents: 'none' }}></div>
            <div ref={profileRef}>
                <Profile />
            </div>
        </div>
    );
}

export default RectangleWithRemainingHeight;
