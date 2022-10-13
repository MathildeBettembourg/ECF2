import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { service } from "../Service/Service";
import { CompAffichageLocataire } from "../Component/CompAffichageLocataire";
import {CompAddLocataire} from "../Component/CompAddLocataire";
import Button from 'react-bootstrap/Button';

export const PageAffichageLocataire = () => {

    const [locatairesList, setLocatairesList] = useState([]);
    const[isDisplayed, setIsDisplayed] = useState(false);

    const handleClichShow=(event)=>{
        if(isDisplayed){
        setIsDisplayed(false)}
        else{
            setIsDisplayed(true)
        }
    }

    const getLocataires = () => {
        service.seeLocataires().then((res) => setLocatairesList(res))
    }
    const deleteLocataire=(id)=>{
        service.deleteById(id).then(getLocataires())
    }

    const addLocataires=(locataire)=>{
        service.addLocataires(locataire).then(getLocataires())
    }


    useEffect(() => {
        getLocataires()
    },
        [])


    return (
        <> 
        <h1>Gestion des locataires</h1>
        <div className="displayAddButton"> 
        <p>Ajouter un locataire : </p>
        {isDisplayed?<> <CompAddLocataire addLocataires={addLocataires}/>  <Button variant="danger" onClick={handleClichShow}>-</Button></>: <Button variant="success" onClick={handleClichShow}>+</Button>}
        
         </div>
            <div className="displayCardLocataires">
                {locatairesList.map((locataire, key) => { return <CompAffichageLocataire locataire={locataire}  key={locataire.id} deleteLocataire={deleteLocataire} /> })}
            </div>
        </>
    )
}
export default PageAffichageLocataire;