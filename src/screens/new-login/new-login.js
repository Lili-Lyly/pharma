import './new-login.css'
import {Button, Card, FormControl, Input, InputAdornment, InputLabel} from "@material-ui/core";
import {AccountCircle, Lock} from "@material-ui/icons";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));
const NewLogin = () => {
    const classes = useStyles();

    return (
        <div className={'new-login-container'}>
            <Card className={'new-login-card'}>
                <h2>Login</h2>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="input-with-icon-adornment">User Name</InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle/>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="input-with-icon-adornment">Password</InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <Lock/>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button variant="contained" color="primary" disableElevation>
                    Login
                </Button>
            </Card>
        </div>
    )
}

export default NewLogin;
