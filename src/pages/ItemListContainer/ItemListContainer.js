import ItemList from '../../components/Item/ItemList'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs,collection,query,where } from 'firebase/firestore'
import FeaturesCard from '../../components/FeaturesCard/FeaturesCard';
import Loading from '../../components/LoadingSpinner/Loading';
import './ItemListContainer.css';

const ItemListContainer=()=>{
const [productos, setProductos]= useState([]);
const [loading,setLoading]=useState(true);
const { category }=useParams(); 

const getProductos = () => {
    const data=getFirestore();
    const queryBase = collection(data,'products')
    const querySnapshot=category ? query(queryBase,where("category","==",category)) : queryBase; 
    
    getDocs(querySnapshot)
    .then((response)=>{
        const dat = response.docs.map((doc)=>{
            return {id: doc.id, ...doc.data()}
        })
        setLoading(false)
        setProductos(dat)
    })
    .catch((error)=> console.log(error));
}
useEffect(()=>{
        getProductos()
},[category])

    return (
        <> 
            <div>
                {(loading === true) ? <Loading /> : <ItemList productos={productos} />}
            </div>
            <FeaturesCard/>
        </>
    );
}

export default ItemListContainer