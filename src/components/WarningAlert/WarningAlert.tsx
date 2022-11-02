import { Alert } from '@mui/material';
import { WarningAlertProps } from '../../types/types';

const WarningAlert = ({ children, show = false }: WarningAlertProps) => {
    return show ? <Alert severity="warning">{children}</Alert> : null;
};

export default WarningAlert;
