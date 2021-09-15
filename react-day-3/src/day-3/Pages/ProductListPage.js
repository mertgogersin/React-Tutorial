import React, { useState } from 'react'
function ProductListPage(props) {

    let { products, deleteProduct, addProduct } = props;
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0)
    console.log(products);

    const add =() =>{
        let product ={
            name:name,
            unitPrice:price,
            unitsInStock:stock
        }
        addProduct(product);
    }

    return (
        <>
            <div>
                <label>Name:</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
                <label>Price:</label>
                <input type='text' value={price} onChange={(e) => setPrice(e.target.value)}></input>
            </div>
            <div>
                <label>Stock:</label>
                <input type='text' value={stock} onChange={(e) => setStock(e.target.value)}></input>
            </div>
            <div>
                <button onClick={() => add()}>Add</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Units In Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item, key) =>
                        (<tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.unitsInStock}</td>
                            <td><button onClick={() => deleteProduct(item.id)}>DELETE</button></td>
                        </tr>)
                        )
                    }

                </tbody>
            </table>
        </>
    )

}

export default ProductListPage
