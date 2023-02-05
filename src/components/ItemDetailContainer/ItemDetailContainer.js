import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import { getFirestore,getDoc, doc } from "firebase/firestore";
import Loading from "../LoadingSpinner/Loading";

const ItemDetailContainer=()=>{
const [productos, setProductos]= useState([]);
const [loading,setLoading]=useState(true)
const { id }=useParams(); 

const getProduct=()=>{
    const db= getFirestore()
    const querySnapshot=doc(db,"products",id)
    getDoc(querySnapshot)
    .then((response)=>{
        setLoading(false)
        setProductos({id:response.id, ...response.data()})
    })
    .catch((error)=>{
        console.log(error)
    })
}
useEffect(()=>{
    getProduct()
},[])

    return (
        <>
            {loading === true ? <Loading /> : <ItemDetail producto={productos} />}
        </>
    )
}

export default ItemDetailContainer