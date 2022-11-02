import { ChangeEvent, useState } from 'react';
import { Box, Button, Card, CardContent, CardActions, Dialog, TextField } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import { MuiColorInput } from 'mui-color-input';
import type { AddThemeDialogProps } from '../../types/types';
import { guid } from '../../helpers/guid';
import WarningAlert from '../WarningAlert/WarningAlert';

const AddThemeDialog = ({ isOpen, onClose, onAdd }: AddThemeDialogProps) => {
    const [pickedColors, setPickedColors] = useState<Array<string>>([]);
    const [isValidTheme, setIsValidTheme] = useState(true);
    const [newTheme, setNewTheme] = useState<any>({
        id: guid(),
        creatorId: 'user_11',
        name: '',
        colors: [],
    });
    const [showWarning, setShowWarning] = useState(false);

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTheme((prev: any) => ({ ...prev, name: event.target.value }));
        validateThemeForm();
    };

    //* WYBIERANIE KOLORU
    const handleColorChange = (color: string, index: number) => {
        setPickedColors((prev) => {
            const newColors = [...prev];
            newColors[index] = color;

            return newColors;
        });
    };

    const handleBlurChange = (index: number): void => {
        setNewTheme((prev: any) => {
            const newColors = [...prev.colors];
            newColors[index] = { hex: '', hsl: '', rgb: pickedColors[index] };

            return {
                ...prev,
                colors: newColors,
            };
        });
    };

    //* DODAWANIE THEME DO KONTA
    const handleAddTheme = (theme: any) => {
        setNewTheme((prev: any) => ({
            ...prev,
            ...theme,
        }));

        if (!validateThemeForm()) return;

        onAdd(newTheme);
        resetForm();
        onClose();
    };

    //* DODANIE KOLEJNEGO KOLORU DO AKTUALNIE TWORZONEGO THEME'A
    const addAnotherColor = () => {
        if (pickedColors.length < 5) {
            setPickedColors((prev) => [...prev, '#fff']);
        }

        if (pickedColors.length >= 5) {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 3000);
            return;
        }

        //! podłożenie funkcji konstruktora pod callback metod tablicowych
        // function x(arg: any) {return arg}
        // const abc = (opt) => opt === true
        // if (Object.values(additionalOptions).every(Boolean))
    };

    const renderColorInputs = () => {
        return pickedColors.map((pickedColor, index) => (
            <MuiColorInput
                key={`pck_${index}`}
                value={pickedColor}
                onChange={(color) => handleColorChange(color, index)}
                onBlur={() => handleBlurChange(index)}
            />
        ));
    };

    const validateThemeForm = () => {
        if (newTheme.name === '') {
            setIsValidTheme(false);
            return;
        }
        if (pickedColors.length === 0) {
            // setShowWarning(true);
            return;
        }
        setIsValidTheme(true);
        return true;
    };

    const resetForm = () => {
        setNewTheme({
            name: '',
        });
        setPickedColors([]);
    };

    return (
        <Dialog open={isOpen}>
            <Card>
                <CardContent>
                    <Box
                        sx={{
                            mb: 2,
                        }}
                    >
                        <TextField
                            label="Name"
                            fullWidth
                            value={newTheme.name}
                            onChange={handleNameChange}
                            error={!isValidTheme}
                            variant="standard"
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 2,
                        }}
                    >
                        <>{renderColorInputs()}</>
                    </Box>
                    <WarningAlert show={showWarning}>Dodaj więcej kolorów</WarningAlert>
                    <Button
                        endIcon={<AddCircle />}
                        onClick={addAnotherColor}
                        disabled={showWarning}
                    >
                        add color
                    </Button>
                </CardContent>
                <CardActions>
                    <Button onClick={() => handleAddTheme(newTheme)}>Create</Button>
                    <Button onClick={onClose}>Cancel</Button>
                </CardActions>
            </Card>
        </Dialog>
    );
};

export default AddThemeDialog;

// otypować całość
