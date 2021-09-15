import React,{useState} from 'react'

function CustomerListPage(props) {
    let {customers, deleteCustomer, addCustomer } = props;
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
