import Alert, { AlertProps } from '@mui/material/Alert'

type Props = {
    status: AlertProps['severity']
    text: string
}

const StatusBox = ({ text, status}: Props) => {

    return (
        <Alert severity={status}>{text}</Alert>
    )
}

export default StatusBox