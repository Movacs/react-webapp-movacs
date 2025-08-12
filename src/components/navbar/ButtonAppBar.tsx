import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

type Props = {
    toggleAnimation: () => void;
}

export default function ButtonAppBar({ toggleAnimation }: Props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(2px)", boxShadow: "none", }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button onClick={toggleAnimation} color="inherit">Animation</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}