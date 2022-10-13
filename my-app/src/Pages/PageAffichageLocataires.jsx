import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { service } from "../Service/Service";
import { CompAffichageLocataire } from "../Component/CompAffichageLocataire"

export const PageAffichageLocataire = () => {

    const [locatairesList, setLocatairesList] = useState([])

    const getLocataires = () => {
        service.seeLocataires().then((res) => setLocatairesList(res))
    }
    const deleteLocataire=(id)=>{
        service.deleteById(id).then(getLocataires())
    }

    useEffect(() => {
        getLocataires()
    },
        [])


    return (
        <>
            <div className="displayCardLocataires">
                {locatairesList.map((locataire, key) => { return <CompAffichageLocataire locataire={locataire}  key={locataire.id} deleteLocataire={deleteLocataire} /> })}
            </div>
        </>
    )
}
export default PageAffichageLocataire;