import { apiUrl } from './env/config';
import React, { useEffect, useState } from 'react'
import ProductListPage from './Pages/ProductListPage';

function Products() {
const [products, setProducts] = useState([]);

useEffect(() => {
    
   getProducts();
}, [])
let requestOptions = (type,data=null) => {
    var requestOptions = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: type
        
    }
    if(data!=null){
        var requestOptions = {...requestOptions,body:JSON.stringify(data)}; 
    }
    return requestOptions;
}
const getProducts = () =>{
    fetch(apiUrl + "/api/products")
    .then((res) =>res.json())
    .then((data) => {
        setProducts(data);
        console.log(data);
    })
}
const deleteProduct = (id) =>{
    
    fetch(apiUrl + "/api/products/"+id,requestOptions("DELETE"))
    .then((res)=>res.json())
    .then((data)=>{
        console.log("DELETED!");
        getProducts();
    })
}
const addProduct = (product) =>{
    fetch(apiUrl + "/api/products",requestOptions("POST",product))
    .then((res)=>res.json())
    .then((data)=>{
        console.log("ADDED!");
        getProducts();
    })
}

    return (
        <>
            <ProductListPage addProduct ={addProduct} products = {products} deleteProduct = {deleteProduct}></ProductListPage>
        </>
    )
}

export default Products
