import React from "react";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from "../assets/localib_small.png"

export const CompAddLocataire = (props) => {

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [dateDeNaissance, setDateDeNaissance] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [newLocataire, setNewLocataire] = useState(
        {
            nom: "",
            prenom: "",
            dateDeNaissance: "",
            email: "",
            telephone: ""
        }
    )
    const[count, setCount]=useState(0);

    const handleChangeNom = (event) => {
        event.preventDefault();
        setNom(event.target.value)
    }
    const handleChangePrenom = (event) => {
        event.preventDefault();
        setPrenom(event.target.value)
    }
    const handleChangeDate = (event) => {
        event.preventDefault();
        setDateDeNaissance(event.target.value)
    }
    const handleChangeEmail = (event) => {
        event.preventDefault();
        setEmail(event.target.value)
    }
    const handleChangeTelephone = (event) => {
        event.preventDefault();
        setTelephone(event.target.value)
    }


    const handleClick = (event) => {
        setNewLocataire({...newLocataire, nom:nom, prenom:prenom, dateDeNaissance:dateDeNaissance, email:email, telephone:telephone })
        props.addLocataires(newLocataire)
    }
    
    return (
        <>
            <div>
                <form>
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
                <Button variant="success" onClick={handleClick}>Ajouter</Button>

            </div>
        </>
    )
}
export default CompAddLocataire;

