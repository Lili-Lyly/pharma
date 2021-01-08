import './add-item.css'
import Button from '@material-ui/core/Button';
import {
    Card,
    Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@material-ui/core";
import {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: '60%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const AddItem = () => {
    const classes = useStyles();
    const [cat, setCat] = useState(10)
    return (
        <div className={'add-item-container'}>
            <Card className={'add-item-card'}>
                <div className={'add-item-card-container'}>
                    <h2>Ajouter Item</h2>
                    <TextField style={{marginBottom: 10}}
                               className={'add-item-input'}
                               label="Title" variant="filled"/>
                    <TextField style={{marginBottom: 10}} className={'add-item-input'} label="Description"
                               variant="filled"/>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Catégorie</InputLabel>
                        <Select
                            value={cat}
                        >
                            <MenuItem value={1}>Catégorie 1</MenuItem>
                            <MenuItem value={2}>Catégorie 2</MenuItem>
                            <MenuItem value={3}>Catégorie 3</MenuItem>
                        </Select>
                    </FormControl>


                    <FormControlLabel control={<Checkbox name="checkedC"/>} label="Diponibilité"/>

                    <Button className={'add-item-btn'} variant="contained" color="primary">Envoyer</Button>
                </div>
            </Card>
        </div>
    )
}
export default AddItem;
