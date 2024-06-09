import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import { Link as ScrollLink } from 'react-scroll';


const pages = ['Profile', 'Awards', 'Contact', 'Works', 'Hobby',];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <AppBar position="fixed" sx={{ bgcolor: 'black', margin: 0 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',

                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}

                            PaperProps={{
                                style: {
                                    backgroundColor: 'black', // 背景色を黒に設定

                                },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" color='white'>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: isHovered ? 'cyan' : 'inherit',
                            textDecoration: 'none',
                            whiteSpace: 'normal',
                            textAlign: 'center',
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >

                        {isHovered ? "aoiacai's PortFolio🫐" : "Tomoya's PortFolio"}

                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: isHovered ? 'cyan' : 'inherit',
                            textDecoration: 'none',
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {isHovered ? "aoiacai's Portfolio🫐" : "Tomoya's Portfolio"}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <ScrollLink to={page.toLowerCase()} smooth={true} duration={500} key={page}>
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            </ScrollLink>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Link href="https://github.com/aoiacai" target="_blank" rel="noopener noreferrer">
                            <Avatar alt="aoiacai" src="https://github.com/aoiacai.png" />
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
