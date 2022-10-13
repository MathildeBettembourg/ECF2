import React from "react";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import logo from "../assets/localib_small.png"
import { service } from "../Service/Service";

export const CompModifLocataire = (props) => {
    const params= useParams();
    const [changedLocataire, setChangedLocataire] = useState({})

    useEffect(()=>{
        service.seeLocatairesById(params.id).then((res)=> setChangedLocataire(res))
}, [])



    const handleChangeNom = (event) => {
        setChangedLocataire({...changedLocataire, nom:event.target.value})
    }
    const handleChangePrenom = (event) => {
        event.preventDefault();
        setChangedLocataire({...changedLocataire, prenom:event.target.value})
    }
    const handleChangeDate = (event) => {
        event.preventDefault();
        setChangedLocataire({...changedLocataire, dateDeNaissance:event.target.value})
    }
    const handleChangeEmail = (event) => {
        event.preventDefault();
        setChangedLocataire({...changedLocataire, email:event.target.value})
    }
    const handleChangeTelephone = (event) => {
        event.preventDefault();
        setChangedLocataire({...changedLocataire, telephone:event.target.value})
    }


    const handleClick = (event) => {
        service.modifierLocataires(changedLocataire, params.id)
     }
     
    return (
        <>
            <div>
                <form>
                    <label>Nom </label>
                    <input type="text" onChange={handleChangeNom} defaultValue={changedLocataire.nom} />
                    <label>Prénom </label>
                    <input type="text" onChange={handleChangePrenom}  defaultValue={changedLocataire.prenom}  />
                    <label>Date de naissance </label>
                    <input type="text" onChange={handleChangeDate} defaultValue={changedLocataire.dateDeNaissance} />
                    <label>email </label>
                    <input type="text" onChange={handleChangeEmail}  defaultValue={changedLocataire.email} />
                    <label>téléphone </label>
                    <input type="text" onChange={handleChangeTelephone}  defaultValue={changedLocataire.telephone} />
                </form>
                <Button variant="success" onClick={handleClick}>Modifier</Button>

            </div>
        </>
    )
}
export default CompModifLocataire;

