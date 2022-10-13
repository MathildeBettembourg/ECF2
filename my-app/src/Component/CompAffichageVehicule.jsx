import React from "react";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from "../assets/localib_small.png" 
import {Link, Outlet} from "react-router-dom";

export const CompAffichageVehicule = (props) => {

    const [vehicule, setVehicule] = useState({})

    /**
     * DELETE Vehicule
     * au clic sur le bouton on va appeler la fonction parent qui permet de supprimer un vehicule
     * @param {*} event 
     */
const deleteVehicule=(event)=>{
    event.preventDefault()
    props.deleteVehicule(props.vehicule.id)
}

/**
 * Le useEffect ici permet à l'init du composant de setter la valeur de l'objet 
 * vehicule qui sera utilisé pour l'affichage
 */
    useEffect(() => {
        setVehicule(props)
    }, [])

    return (
        <>
        <Button variant="secondary"><Link to={`/`} className="buttonText">Retours</Link></Button>
 <Card>
      <Card.Header>Vehicule</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
                        <Card.Text> Modele : {props.vehicule.modele}</Card.Text>
                        <Card.Text>Etat : {props.vehicule.etat}</Card.Text>
                        <Card.Text>Prix : {props.vehicule.prix} </Card.Text>
                        <Card.Text>Disponibilite: {props.vehicule.disponibilite} </Card.Text>
                        <Card.Text>Marque : {props.vehicule.marque} </Card.Text>
                        <div className="buttonOnCards">
                        <Button variant="primary"><Link to={`/CompModifVehicule/${props.vehicule.id}`} className="buttonText"> Modifier</Link></Button>
                        <Button variant="success"><Link to={`/CompDetailVehicule/${props.vehicule.id}`} className="buttonText">Details</Link></Button>
                        <Button variant="danger" onClick={deleteVehicule} className="buttonText">Supprimer</Button>
                        </div>
        </blockquote>
      </Card.Body>
    </Card>
    <Outlet/>
        </>
    )

}
export default CompAffichageVehicule;

