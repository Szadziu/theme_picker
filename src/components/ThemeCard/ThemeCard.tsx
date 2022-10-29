import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import { ThemeCardItem } from '../../types/types';

interface ThemeCardProps {
    item: ThemeCardItem;
}

const ThemeCard = ({ item }: ThemeCardProps) => {
    return (
        <Paper sx={{ padding: '10px', margin: '10px', maxWidth: '600px' }}>
            <Typography sx={{ textTransform: 'uppercase' }}>{item.name}</Typography>
            <Divider />
            <Grid container alignItems="center" justifyContent="space-around" marginTop={1}>
                {item.colors.map((color: any) => (
                    <Grid item key={color.rgb}>
                        <Box
                            height={100}
                            width={100}
                            borderRadius={1}
                            sx={{ backgroundColor: color.rgb }}
                        ></Box>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default ThemeCard;
