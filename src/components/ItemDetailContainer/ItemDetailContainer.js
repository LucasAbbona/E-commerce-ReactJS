import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';

/* const DetailContainer=()=>{
const [SingleProduct, setSingleProduct]= useState({});    
const { id }=useParams();

const getProducto = fetch(`https://fakestoreapi.com/products/${id}`,{method: 'GET'});

    useEffect(() => {
        getProducto
        .then((response) =>{
            console.log(response)
            return response.json();
        })
        .then((data)=>{
            setSingleProduct(data);
        })
        .catch((error)=>{
            console.log(error)
        });
    },[]);
    return(
        <>
        <ItemDetail producto={SingleProduct} />
        </>
    );
}
 */
const Productos= [{id:1,title:"Pantalon",category:"men",description:"Pantalon Lacoste para hombre",price:80, pictureUrl:"https://static.dafiti.com.ar/p/lacoste-8100-991562-1-product.jpg"},
{id: 2,title:"Remera",category:"men",description:"Remera Polo Ralph Lauren para hombre",price:50, pictureUrl:"https://fitting.com.ar/wp-content/uploads/2022/10/remera_polo_ralph_lauren_hombre_6.jpg"},
{id: 3,title:"Camisa",category:"men",description:"Camisa Armani para hombre",price:350, pictureUrl:"https://www.armani.com/variants/images/1647597276398179/D/w400.jpg"},
{id: 4,title:"Polo",category:"men",description:"Polo Ralph Lauren talla s",price:100, pictureUrl:"https://i.blogs.es/ba0d5c/la-coleccion-primavera-2021-de-polo-ralph-lauren-descifrada-en-seis-tendencias-clave-1-/1366_2000.jpg"},
{id: 5,title:"Traje",category:"men",description:"Traje Armani para hombre",price:1700, pictureUrl:"https://www.armani.com/variants/images/34344356236975144/F/w400.jpg"},
{id: 6,title:"Vestido",category:"women",description:"Vestido versace para mujer",price:750, pictureUrl:"https://media.revistavanityfair.es/photos/60e84529c0a99700e552adf3/master/w_2732,h_4098,c_limit/143339.jpg"},
{id: 7,title:"Zapatos",category:"women",description:"Tacos versace para mujer",price:750, pictureUrl:"https://img.giglio.com/images/prodZoom/370216.002_1.jpg"},
{id: 8,title:"Blusa",category:"women",description:"Blusa zara para mujer",price:750, pictureUrl:"https://images.ecestaticos.com/H1rJGHdJGPaTR3uU2_UspxpEFX0=/0x0:1600x2133/1440x1920/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F4f3%2F067%2F76e%2F4f306776e7a75d62a601d95e14392be8.jpg "},
{id: 9,title:"Vestido",category:"women",description:"Vestido de diseñador para mujer",price:750, pictureUrl:"https://cdn0.casamientos.com.ar/article-dress/4772/original/1280/jpg/m372774.jpeg"},
{id: 10,title:"Polo",category:"men",description:"Polo ralph laurent para hombre",price:110, pictureUrl:"https://i.pinimg.com/736x/9a/50/25/9a50253e58d78e23d515ae65230dd98b--style-hair-guy-style.jpg"},
{id: 11,title:"Polo",category:"women",description:"Polo ralph laurent para hombre",price:130, pictureUrl:"https://www.rlmedia.io/is/image/PoloGSI/s7-1459240_alternate1?$plpDeskRF$"}]

const ItemDetailContainer=()=>{
const [productos, setProductos]= useState([]);
const { id }=useParams(); 
const Filter= Productos.filter((product)=>product.id == id)
const getProductos = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(Filter);
    },1000);
});
useEffect(() => {
    getProductos
    .then((data)=>{
        setProductos(data);
        console.log(productos)
    })
    .catch((error)=>{
        console.log(error)
    });
},[]);/* 
useEffect(()=>{
    
    setProductos(Filter)
    console.log(productos)
},[id]) */

    return (
        <>
            <ItemDetail producto={productos} />
            
        </>
    );
}

export default ItemDetailContainer