import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DeliveriesForm from './DeliveriesForm';
import DeliveriesList from './DeliveriesList';
import data from '../Data/deliveries.json'

const useStyles = makeStyles(() => ({
    flexContainer: {
        marginTop: '5%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center'
    },
}));

export default function DeliveriesData() {
    const classes = useStyles();

    const [deliveries, setDeliveries] = useState([]);
    const [deliveryForm, setDeliveryForm] = useState({ id: "", date: "", name: "", city: "" });
    const [mode, setMode] = useState("Save");

    useEffect(() => {
        const loadDeliveries = data.map(delivery => ({ id: delivery.id, date: delivery.date, name: delivery.name, city: delivery.city }));
        return setDeliveries(loadDeliveries);
    }, []);

    const nextId = (deliveries = []) => {
        let max = deliveries.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id, 0);
        return ++max;
    };
    
    const getDelivery = (index) => {
        setMode("Update");
        setDeliveryForm({ id: deliveries[index]["id"], date: deliveries[index]["date"], name: deliveries[index]["name"], city: deliveries[index]["city"] })
    };

    const addDelivery = (newDelivery) => {
        setDeliveries(prevState => ([
            ...prevState, {
                id: newDelivery.id !== null ? newDelivery.id : nextId(prevState),
                date: newDelivery.date,
                name: newDelivery.name,
                city: newDelivery.city
            }])
        )
        setDeliveryForm({ id: "", date: "", name: "", city: "" });    
    };

    const updateDelivery = (newDelivery) => {
        setDeliveries(prevState => prevState.map(
            data => data.id !== newDelivery.id ? data : {
                id: newDelivery.id, date: newDelivery.date, name: newDelivery.name, city: newDelivery.city
            }))
        setDeliveryForm({ id: "", date: "", name: "", city: "" });    
        setMode("Save");
    };

    const deleteDelivery = (index) => {
        setDeliveries(prevState => (
            prevState.filter((delivery, i) => i !== index)
        ))
        setDeliveryForm({ id: "", date: "", name: "", city: "" });    
        setMode("Save");
    };

    return ( <div className={classes.flexContainer}>
            <DeliveriesList getAllDeliveries={deliveries} getDelivery={getDelivery} deleteDelivery={deleteDelivery} />
            <DeliveriesForm addDelivery={addDelivery} updateDelivery={updateDelivery} currentMode={mode} formInputs={deliveryForm} />
        </div> );
    
}