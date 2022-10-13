import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { service } from "../Service/Service";

export const PageAffichageLocataire=()=>{

    const[locatairesList, setLocatairesList]=useState([])

    const getLocataires=()=>{
        service.seeLocataires().then((res)=> setLocatairesList(res))
    }

    useEffect(()=>{
        getLocataires()
    }, 
    [])


    return(
        <p> test</p>
    )
}
export default PageAffichageLocataire;