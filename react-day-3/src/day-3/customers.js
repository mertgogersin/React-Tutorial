import { apiUrl } from './env/config'
import React, { useEffect, useState } from 'react'
import CustomerListPage from './Pages/CustomerListPage'


function Customers() {
    const [customers, setCustomers] = useState([])
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getCustomers();
    }, [])

    const getCustomers = () => {
        fetch(apiUrl + "/api/customers")
            .then((res) => res.json())
            .then((data) => {
              
                    setTimeout(() => {
                        setCustomers(data);
                        setLoading(false);
                        console.log(loading);
                    }, 500);
                
            })
    }

    let requestOptions = (type, data = null) => {
        var requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: type

        }
        if (data != null) {
            var requestOptions = { ...requestOptions, body: JSON.stringify(data) };
        }
        return requestOptions;
    }

    const deleteCustomer = (id) => {
        let result = window.confirm("Silmek istediğinizden emin misiniz?");
        if (result) {

            fetch(apiUrl + "/api/customers/" + id, requestOptions("DELETE"))
                .then((res) => res.json())
                .then((data) => {
                    console.log("DELETED!");
                    getCustomers();
                })
        }

    }


    const addCustomer = (customer) => {
        fetch(apiUrl + "/api/customers", requestOptions("POST", customer))
            .then((res) => res.json())
            .then((data) => {
                console.log("ADDED");
                getCustomers();
            })
    }

    return (
        <>
        {
            loading == true ? (<span>Loading...</span>):
            
        <CustomerListPage addCustomer={addCustomer} loading={loading} customers={customers} deleteCustomer={deleteCustomer} ></CustomerListPage>
        }
        
        </>
    )
}

export default Customers
