import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { serviceVehicules } from "../Service/ServiceVehicules";
import Button from 'react-bootstrap/Button';
import {CompAddVehicule} from "../Component/CompAddVehicule";
import {CompAffichageVehicule} from "../Component/CompAffichageVehicule";

export const PageAffichageVehicules= () => {

    const [vehiculesList, setVehiculesList] = useState([]);
    const[isDisplayed, setIsDisplayed] = useState(false);

    const handleClichShow=(event)=>{
        if(isDisplayed){
        setIsDisplayed(false)}
        else{
            setIsDisplayed(true)
        }
    }

    const getVehicules = () => {
        serviceVehicules.seeVehicules().then((res) => setVehiculesList(res))
    }
    const deleteVehicule=(id)=>{
        serviceVehicules.deleteByIdVehicule(id).then(getVehicules())
    }

    const addVehicules=(Vehicules)=>{
        serviceVehicules.addVehicules(Vehicules).then(getVehicules())
    }


    useEffect(() => {
        getVehicules()
    },
        [])


    return (
        <> 
        <h1>Gestion des véhicules</h1>
        <div className="displayAddButton"> 
        <p>Ajouter un véhicule : </p>
        {isDisplayed?<> <CompAddVehicule addVehicules={addVehicules}/>  <Button variant="danger" onClick={handleClichShow}>-</Button></>: <Button variant="success" onClick={handleClichShow}>+</Button>}
        
         </div>


                {vehiculesList.map((vehicule) => 
                { return <CompAffichageVehicule vehicule={vehicule} deleteVehicule={deleteVehicule}/> })}

        </>
    )
}
export default PageAffichageVehicules;