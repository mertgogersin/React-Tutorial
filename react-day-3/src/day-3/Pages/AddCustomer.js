import React from 'react'
import {useState} from 'react'
function AddCustomer(props) {
    let {addCustomer} = props;
    const [companyName, setCompanyName] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactTitle, setContactTitle] = useState('')

    const add = () =>{
        let customer ={
            companyName : companyName,
            contactName : contactName,
            contactTitle : contactTitle
        };
        addCustomer(customer);
    }
    return (
        <>
            <div>
                <label>CompanyName:</label>
                <input type='text' value={companyName} onChange={(e) => setCompanyName(e.target.value)}></input>
            </div>
            <div>
                <label>ContactName:</label>
                <input type='text' value={contactName} onChange={(e) => setContactName(e.target.value)}></input>
            </div>
            <div>
                <label>ContactTitle:</label>
                <input type='text' value={contactTitle} onChange={(e) => setContactTitle(e.target.value)}></input>
            </div>
            <div>
                <button onClick={() => add()}>Add</button>
            </div>
        </>
    )
}

export default AddCustomer
