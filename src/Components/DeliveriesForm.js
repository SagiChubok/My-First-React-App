import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import moment from 'moment'

const useStyles = makeStyles((theme) => ({
    form: {
        marginLeft: '3%',
        [theme.breakpoints.down('md')]: {
            marginTop: '3%',
        }
    },
    inputs: {
        marginBottom: 20,
        display: 'block',
        width: 400,
        height: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        border: "2px solid #EE4D47",
    },
    formButton: {
        display: 'block',
        backgroundColor: '#EE4D47',
        color: '#FFFFFF',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '40%',
        textTransform: 'none',
    },
}));

export default function DeliveriesForm(props) {

    const classes = useStyles();

    const [mode, setMode] = useState();

    const [id, setId] = useState();
    const [date, setDate] = useState();
    const [name, setName] = useState();
    const [city, setCity] = useState();

    useEffect(() => {
        setMode(props.currentMode);

        setId(props.formInputs.id);
        setDate(props.formInputs.date);
        setName(props.formInputs.name);
        setCity(props.formInputs.city);
    }, [props.formInputs.id, props.formInputs.date, props.formInputs.name, props.formInputs.city, props.currentMode]);

    const formButton = () => {
        if (mode === "Save") {
            const newDelivery = { id: null, date: date, name: name, city: city };
            if (date === "" || name === "" || city === "" || !moment(date, ["DD.MM.YYYY", "MM.DD.YYYY","YYYY.MM.DD"], true).isValid()) {
                alert("Make sure all the fields are valid!");
            }
            else {
                props.addDelivery(newDelivery);
                setId("");
                setDate("");
                setName("");
                setCity("");
            }
        }
        else if (mode === "Update") {
            const newDelivery = { id: id, date: date, name: name, city: city };
            if (date === "" || name === "" || city === "" || !moment(date, "DD.MM.YYYY", true).isValid()) {
                alert("Make sure all the fields are valid!");
            } else {
                props.updateDelivery(newDelivery);
            }
        }
    };

    return ( <form className={classes.form}>
            <input className={classes.inputs} placeholder="DD.MM.YYYY" variant="outlined" onChange={e => setDate(e.target.value)} value={date || ""} />
            <input className={classes.inputs} placeholder="Name" variant="outlined" onChange={e => setName(e.target.value)} value={name || ""} />
            <input className={classes.inputs} placeholder="City" variant="outlined" onChange={e => setCity(e.target.value)} value={city || ""} />
            <Button className={classes.formButton} onClick={formButton} variant="contained">{mode}</Button>
        </form> );

}