import React from "react";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import logo from "../assets/localib_small.png"
import { service } from "../Service/Service";

export const CompModifLocataire = () => {
    const params= useParams();
    const [changedLocataire, setchangedLocataire] = useState()

    useEffect(()=>{
       service.seeLocatairesById(params.id).then((res)=>setchangedLocataire(res))
}, [])



    // const handleChangeNom = (event) => {
    //     event.preventDefault();
    //     setNewLocataire({...newLocataire, nom:event.target.value})
    // }
    // const handleChangePrenom = (event) => {
    //     event.preventDefault();
    //     setNewLocataire({...newLocataire, prenom:event.target.value})
    // }
    // const handleChangeDate = (event) => {
    //     event.preventDefault();
    //     setNewLocataire({...newLocataire, dateDeNaissance:event.target.value})
    // }
    // const handleChangeEmail = (event) => {
    //     event.preventDefault();
    //     setNewLocataire({...newLocataire, email:event.target.value})
    // }
    // const handleChangeTelephone = (event) => {
    //     event.preventDefault();
    //     setNewLocataire({...newLocataire, telephone:event.target.value})
    // }


    // const handleClick = (event) => {
    //     props.addLocataires(newLocataire)
     //}
    
    return (
        <>
            <div>
               
                {/* <form>
                    <label>Nom </label>
                    <input type="text" onChange={handleChangeNom} />
                    <label>Prénom </label>
                    <input type="text" onChange={handleChangePrenom} />
                    <label>Date de naissance </label>
                    <input type="text" onChange={handleChangeDate} />
                    <label>email </label>
                    <input type="text" onChange={handleChangeEmail} />
                    <label>téléphone </label>
                    <input type="text" onChange={handleChangeTelephone} />
                </form>
                <Button variant="success" onClick={handleClick}>Ajouter</Button> */}

            </div>
        </>
    )
}
export default CompModifLocataire;

