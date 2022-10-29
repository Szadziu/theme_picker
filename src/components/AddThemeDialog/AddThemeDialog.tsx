import { useState } from 'react';
import { Box, Button, Card, CardContent, CardActions, Dialog, TextField } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
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
        forth: '',
        fifth: '',
    });

    const [newTheme, setNewTheme] = useState({
        id: guid(),
        creatorId: 'user_11',
        name: '',
        colors: [],
    });

    const handlePickedColor = (color: any) => {
        console.log(color);
    };

    const handleAddTheme = (theme: any) => {
        console.log(guid());
        onAdd(theme);
        onClose();
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
                        <TextField label="Name" fullWidth value={newTheme.name} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 2,
                        }}
                    >
                        <MuiColorInput value={pickedColors.first} onChange={handlePickedColor} />
                        <MuiColorInput value={pickedColors.second} onChange={handlePickedColor} />
                        <MuiColorInput value={pickedColors.third} onChange={handlePickedColor} />
                    </Box>
                    <Button endIcon={<AddCircle />}>
                        {/* <AddCircle fontSize="large" color="primary" /> */}
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
