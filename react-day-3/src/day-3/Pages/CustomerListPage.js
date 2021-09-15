import React,{useState} from 'react'
import AddCustomer from './AddCustomer';

function CustomerListPage(props) {
    let {customers, deleteCustomer, addCustomer } = props;
    
    return (
        <>
        <AddCustomer addCustomer = {addCustomer}></AddCustomer>
        

           <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>Contact Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>                    
                        {
                            customers.map((item,key) => 
                                (<tr key ={item.id}>
                                    <td>{item.companyName}</td>
                                    <td>{item.contactName}</td>
                                    <td>{item.contactTitle}</td>
                                    <td><button onClick = {()=>deleteCustomer(item.id)}>DELETE</button></td>
                                </tr>)
                            )
                        }
                    
                </tbody>
            </table>   
        </>
    )
}

export default CustomerListPage
