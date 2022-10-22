import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useEffect, useState } from 'react';
import data from '../../mockData.json';

import ThemeCard from '../ThemeCard/ThemeCard';
import AddThemeDialog from '../AddThemeDialog/AddThemeDialog';

const ThemePicker = () => {
    const [localData, setLocalData] = useState(data);
    const [newTheme, setNewTheme] = useState({
        creatorId: '3',
        name: '',
        colors: [
            {
                hex: '#00bfff',
                rgb: 'rgb(0, 191, 255)',
                hsl: 'hsl(195, 100%, 50%)',
            },
            {
                hex: '#00b5f5',
                rgb: 'rgb(0, 181, 245)',
                hsl: 'hsl(196, 100%, 48%)',
            },
            {
                hex: '#00a1e1',
                rgb: 'rgb(0, 161, 225)',
                hsl: 'hsl(197, 100%, 44%)',
            },
            {
                hex: '#0097cd',
                rgb: 'rgb(0, 151, 205)',
                hsl: 'hsl(196, 100%, 40%)',
            },
            {
                hex: '#0083b9',
                rgb: 'rgb(0, 131, 185)',
                hsl: 'hsl(198, 100%, 27%)',
            },
        ],
    });
    const [isAddThemeDialogOpen, setIsAddThemeDialogOpen] = useState(false);

    useEffect(() => {
        console.log(data);
    }, []);

    const openAddThemeDialog = () => {
        setIsAddThemeDialogOpen(true);
    };

    const addTheme = () => {
        setLocalData((prev) => [...prev, newTheme]);
    };

    return (
        <>
            <AddThemeDialog open={isAddThemeDialogOpen} newTheme={newTheme} />
            <Button
                size="large"
                endIcon={<AddCircleIcon />}
                variant="contained"
                onClick={openAddThemeDialog}
            >
                Create
            </Button>
            {localData.map((theme) => (
                <ThemeCard item={theme} key={theme.name} />
            ))}
        </>
    );
};

export default ThemePicker;
