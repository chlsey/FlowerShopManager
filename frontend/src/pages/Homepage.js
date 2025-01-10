import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../cssFiles/Homepage.css";

function HomePage() {
    const [listOfBouquets, setListOfBouquets] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3002/bouquets").then((response) => {
            setListOfBouquets(response.data);
        });
    }, [])
    return (
        <div>
            {listOfBouquets.map((value, key) => {
                return (
                    <div className="bouquet" onClick={() => navigate(`/bouquets/${value.id}`)}>
                        <div className="bouquet-title">{value.name}</div>
                        <div className="bouquet-content">
                            <img src={value.img} alt={`${value.color} bouquet`} className="bouquet-photo"/>
                            <div className="bouquet-description">
                                <p>Price: {value.price}</p>
                                <p>Quantity: {value.quantity}</p>
                                <p>Color: {value.color}</p>
                                <p>Category: {value.category}</p>
                                <p>Materials: {value.materials}</p>
                            </div>
                        </div>
                        <div className="bouquet-footer">{value.type}</div>
                    </div>
                );
            })}

        </div>
    )
}

export default HomePage;