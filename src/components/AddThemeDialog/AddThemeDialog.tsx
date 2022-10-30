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

interface AddThemeDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (theme: any) => void;
}

const AddThemeDialog = ({ isOpen, onClose, onAdd }: AddThemeDialogProps) => {
    const [pickedColors, setPickedColors] = useState({
        first: '#ffffff',
        second: '#000000',
        third: '#222dfe',
        forth: '#fdafda',
        fifth: '#43fa45',
    });

    const [additionalOptions, setAdditionalOptions] = useState({
        forthTheme: false,
        fifthTheme: false,
    });

    const [newTheme, setNewTheme] = useState({
        id: guid(),
        creatorId: 'user_11',
        name: '',
        colors: [
            {
                hex: pickedColors.first,
                rgb: 'rgb(255, 255, 255)',
                hsl: '',
            },
            {
                hex: pickedColors.second,
                rgb: 'rgb(0, 0, 0)',
                hsl: '',
            },
            {
                hex: pickedColors.third,
                rgb: 'rgb(0, 0, 255)',
                hsl: '',
            },
        ],
    });

    const [showWarning, setShowWarning] = useState(false);

    // const colorsBoxRef = createRef();

    const handlePickedColor = (color: string, order: string) => {
        // console.log(color, order);
        setPickedColors((prev) => ({
            ...prev,
            [order]: color,
        }));
    };

    const handleAddTheme = (theme: any) => {
        console.log(guid());
        onAdd(theme);
        onClose();
    };

    const addAnotherColor = () => {
        // console.log(colorsBoxRef.current);
        // const p = <MuiColorInput value={pickedColors.forth} onChange={handlePickedColor} />;
        //@ts-ignore
        // colorsBoxRef.current.appendChild(p);

        // three color pickers available
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
