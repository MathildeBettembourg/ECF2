import React from "react";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from "../assets/localib_small.png"

export const CompAddVehicule= (props) => {


    const [newVehicule, setNewVehicule] = useState(

    
        {
            marque: "",
            modele: "",
            immatriculation: "",
            etat : "A",
            prix : 20,
            disponibilite : "",
            type: "",
        }
    )

    const handleChangeMarque = (event) => {
        event.preventDefault();
        setNewVehicule({...newVehicule, marque:event.target.value})
    }
    const handleChangeModele = (event) => {
        event.preventDefault();
        setNewVehicule({...newVehicule, modele:event.target.value})
    }
    const handleChangeImmatriculation = (event) => {
        event.preventDefault();
        setNewVehicule({...newVehicule, immatriculation:event.target.value})
    }
    const handleChangeEtat = (event) => {
        event.preventDefault();
        setNewVehicule({...newVehicule, etat:event.target.value})
    }
    const handleChangePrix = (event) => {
        event.preventDefault();
        setNewVehicule({...newVehicule, prix:event.target.value})
    }
    const handleChangeDisponibilite = (event) => {
        event.preventDefault();
        setNewVehicule({...newVehicule, disponibilite:event.target.value})
    }
    const handleChangeType= (event) => {
        event.preventDefault();
        setNewVehicule({...newVehicule,  type:event.target.value})
    }


    const handleClick = (event) => {
        props.addVehicules(newVehicule)
    }
    
    return (
        <>
            <div>
                <form>
                    <label>Marque </label>
                    <input type="text" onChange={handleChangeMarque} />
                    <label>Modèle </label>
                    <input type="text" onChange={handleChangeModele} />
                    <label>Immatriculation</label>
                    <input type="text" onChange={handleChangeImmatriculation} />
                    <label>Etat </label>
                    <input type="text" onChange={handleChangeEtat} />
                    <label>Prix </label>
                    <input type="number" onChange={handleChangePrix} />
                    <label>Disponibilite</label>
                    <input type="text" onChange={handleChangeDisponibilite} />
                    <label>Type</label>
                    <input type="text" onChange={handleChangeType} />
                </form>
                <Button variant="success" onClick={handleClick}>Ajouter</Button>

            </div>
        </>
    )
}
export default CompAddVehicule;

