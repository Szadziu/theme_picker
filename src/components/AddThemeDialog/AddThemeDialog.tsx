import { createRef, useRef, useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardActions,
    Dialog,
    TextField,
    Alert,
} from '@mui/material';
import { AddCircle, Preview } from '@mui/icons-material';
import { ThemeCardItem } from '../../types/types';
import { MuiColorInput } from 'mui-color-input';
import { guid } from '../../helpers/guid';
import { hexToRgb } from '../../helpers/hexToRgb';

interface AddThemeDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (theme: any) => void;
}

const AddThemeDialog = ({ isOpen, onClose, onAdd }: AddThemeDialogProps) => {
    //* Obiekt wybranych kolorów
    const [pickedColors, setPickedColors] = useState({
        first: '#ffffff',
        second: '#000000',
        third: '#222dfe',
        forth: '',
        fifth: '',
    });

    //* Obiekt opcji dodatkowych informujący o tym, czy zostały wybrane dodatkowe kolory (3-5)
    const [additionalOptions, setAdditionalOptions] = useState({
        forthTheme: false,
        fifthTheme: false,
    });

    //* Obiekt "nowego" lokalnego theme'a, który docelowo będzie przesyłany w momencie tworzenia po wybraniu wszystkich opcji
    const [newTheme, setNewTheme] = useState({
        id: guid(),
        creatorId: 'user_11',
        name: '',
        colors: [
            {
                hex: pickedColors.first,
                rgb: hexToRgb(pickedColors.first),
                hsl: '',
            },
            {
                hex: pickedColors.second,
                rgb: hexToRgb(pickedColors.second),
                hsl: '',
            },
            {
                hex: pickedColors.third,
                rgb: hexToRgb(pickedColors.third),
                hsl: '',
            },
        ],
    });

    const [showWarning, setShowWarning] = useState(false);

    // const colorsBoxRef = createRef();

    const handlePickedColor = (color: string, order: string) => {
        setPickedColors((prev) => ({
            ...prev,
            [order]: color,
        }));
    };

    //* DODAWANIE NOWEGO THEME
    const handleAddTheme = (theme: any) => {
        setNewTheme((prev) => ({
            ...prev,
            ...theme,
        }));
        onAdd(newTheme);
        onClose();
    };

    //* DODANIE KOLEJNEGO KOLORU DO AKTUALNEGO THEME
    const addAnotherColor = () => {
        // console.log(colorsBoxRef.current);
        // const p = <MuiColorInput value={pickedColors.forth} onChange={handlePickedColor} />;
        // colorsBoxRef.current.appendChild(p);

        if (Object.values(additionalOptions).every((opt) => opt === true)) {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 3000);
            return;
        }

        if (additionalOptions.forthTheme === false) {
            setAdditionalOptions((prev) => ({ ...prev, forthTheme: true }));
        } else if (additionalOptions.fifthTheme === false) {
            setAdditionalOptions((prev) => ({ ...prev, fifthTheme: true }));
        }
    };

    const warningAlert = showWarning && (
        <Alert severity="warning">
            You have exceeded the limit of colors that can be added to one theme!
        </Alert>
    );

    const forthThemeColorPicker = additionalOptions.forthTheme ? (
        <MuiColorInput
            value={pickedColors.forth}
            onChange={(color) => handlePickedColor(color, 'forth')}
        />
    ) : null;

    const fifthThemeColorPicker = additionalOptions.fifthTheme ? (
        <MuiColorInput
            value={pickedColors.fifth}
            onChange={(color) => handlePickedColor(color, 'fifth')}
        />
    ) : null;

    return (
        <Dialog open={isOpen}>
            <Card>
                <CardContent>
                    <Box
                        sx={{
                            mb: 2,
                        }}
                    >
                        <TextField label="Name" fullWidth value={newTheme.name} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 2,
                        }}
                        // ref={colorsBoxRef}
                    >
                        <MuiColorInput
                            value={pickedColors.first}
                            onChange={(color) => handlePickedColor(color, 'first')}
                        />
                        <MuiColorInput
                            value={pickedColors.second}
                            onChange={(color) => handlePickedColor(color, 'second')}
                        />
                        <MuiColorInput
                            value={pickedColors.third}
                            onChange={(color) => handlePickedColor(color, 'third')}
                        />
                        {forthThemeColorPicker}
                        {fifthThemeColorPicker}
                    </Box>
                    {warningAlert}
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

// #1 - Dlaczego nie mogłem posłużyć się appendChild i ref, aby dodać kolejne pickery?
// #2 - Handler addTheme odczytuje mi nową wartość dopiero przy kolejnej aktualizacji stanu, jak temu zapobiec?
// #3 - Czy podejście z logiką obsługi color pickerów jests słuszne?
// #4 - Czy mógłbyś przeprowadzić naprowadzające code review na tym etapie?
