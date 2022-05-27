import React, { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import EachItem from "./EachItem/EachItem";

const Inventory = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cars`)
            .then(res => res.json())
            .then(data => setCars(data));

    }, [cars]);

    return (
        <div>
            <h2 className="text-center mt-4">ALL INVENTORY ITEMS</h2>
            <div className="container text-end">
                <Button variant="warning" as={NavLink} to='/adding_items' className="px-3">Add New Item</Button>
            </div>

            <div>
                {
                    cars.map(car => <EachItem key={car._id} car={car}></EachItem>)
                }
            </div>
        </div>
    );
};

export default Inventory;