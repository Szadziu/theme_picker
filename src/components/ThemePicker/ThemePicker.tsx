import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useEffect, useState, useContext } from 'react';

import ThemeCard from '../ThemeCard/ThemeCard';
import AddThemeDialog from '../AddThemeDialog/AddThemeDialog';
import ThemeContext from '../../contexts/ThemeContext';

const ThemePicker = () => {
    const mockColors = useContext(ThemeContext);
    const [localData, setLocalData] = useState(mockColors);

    const [isAddThemeDialogOpen, setIsAddThemeDialogOpen] = useState(false);

    useEffect(() => {
        // console.log(data);
    }, []);

    const openAddThemeDialog = () => {
        setIsAddThemeDialogOpen(true);
    };

    const closeAddThemeDialog = () => {
        setIsAddThemeDialogOpen(false);
    };

    const addTheme = (theme: any) => {
        setLocalData((prev: any) => [...prev, theme]);
    };

    // const handleThemeName = () => {};

    return (
        <>
            <AddThemeDialog
                isOpen={isAddThemeDialogOpen}
                onAdd={addTheme}
                onClose={closeAddThemeDialog}
            />
            <Button
                size="large"
                endIcon={<AddCircleIcon />}
                variant="contained"
                onClick={openAddThemeDialog}
            >
                Create
            </Button>
            {/* @ts-ignore */}
            {localData.map((theme) => (
                <ThemeCard item={theme} key={theme.name} />
            ))}
        </>
    );
};

export default ThemePicker;
