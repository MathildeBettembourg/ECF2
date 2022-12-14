import React from "react";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from "../assets/localib_small.png" 

export const CompAffichageLocataire = (props) => {

    const [locataire, setLocataire] = useState({})

const deleteLocataire=(event)=>{
    event.preventDefault()
    props.deleteLocataire(props.locataire.id)
}

    useEffect(() => {
        setLocataire(props)
    }, [])

    return (
        <>
 <Card>
      <Card.Header>{props.locataire.nom}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <Card.Title>Locataire</Card.Title>
                        <Card.Text> Nom : {props.locataire.nom}</Card.Text>
                        <Card.Text>Prenom : {props.locataire.prenom}</Card.Text>
                        <Card.Text> Date de Naissance : {props.locataire.dateDeNaissance}</Card.Text>
                        <Card.Text>Email : {props.locataire.email}</Card.Text>
                        <Card.Text>Telephone :{props.locataire.telephone}</Card.Text>
                        <div className="buttonOnCards">
                        <Button variant="primary">Modifier</Button>
                        <Button variant="success">Details</Button>
                        <Button variant="danger" onClick={deleteLocataire}>Supprimer</Button>
                        </div>
        </blockquote>
      </Card.Body>
    </Card>
        </>
    )

}
export default CompAffichageLocataire;

