import React from 'react'

function Menu() {
    let menus = [
        {
            name: 'Bread Basket',
            description: 'Assortment of fresh baked fruit breads and muffins ',
            price: 5.50
        },
        {
            name: 'Honey Almond Granola with Fruits',
            description: 'Natural cereal of honey toasted oats, raisins, almonds and dates ',
            price: 7.00
        },
        {
            name: 'Belgian Waffle',
            description: 'Vanilla flavored batter with malted flour  ',
            price: 7.50
        },
        {
            name: 'Scrambled eggs',
            description: 'Scrambled eggs, roasted red pepper and garlic, with green onions ',
            price: 7.50
        },
        {
            name: 'Blueberry Pancakes',
            description: 'With syrup, butter and lots of berries ',
            price: 8.50
        }
    ]
    let style = {backgroundColor:'tomato'};
    
    return (
        <div>
            <div className="w3-row w3-padding-64" id="menu">
                <div className="w3-col l6 w3-padding-large">
                    <h1 className="w3-center">Our Menu</h1><br />
                    
                    {
                        menus.map((item, key) => {
                            const isHigher = item.price>8;
                            return (<div key={key}>
                            <h4>{item.name}</h4>
                            {isHigher ? (<p className="w3-text-grey" style={style}>{item.description} {item.price}</p>):
                             (<p className="w3-text-grey">{item.description} {item.price}</p>)}
                                
                                <br />
                            </div>)
                        })
                    }
                </div>
                <div className="w3-col l6 w3-padding-large">
                    <img src="https://www.w3schools.com/w3images/tablesetting.jpg" className="w3-round w3-image w3-opacity-min" alt="Menu" style={{ width: '100%' }} />
                </div>
            </div>
            <hr />
        </div>

    )
}

export default Menu
