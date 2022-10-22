import {
    Button,
    Card,
    CardContent,
    CardActions,
    Dialog,
    TextField,
} from '@mui/material';
import { ThemeCardItem } from '../../types';

interface AddThemeDialogProps {
    open: boolean;
    newTheme: ThemeCardItem;
}

const AddThemeDialog = ({ open, newTheme }: AddThemeDialogProps) => {
    console.log(newTheme);
    return (
        <Dialog open={open}>
            <Card>
                <CardContent>
                    <TextField label="Name" value={newTheme.name} />
                </CardContent>
                <CardActions>
                    <Button>Create</Button>
                    <Button>Cancel</Button>
                </CardActions>
            </Card>
        </Dialog>
    );
};

export default AddThemeDialog;
