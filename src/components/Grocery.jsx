import React from 'react';
import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList"

function Grocery() {


    const [add, setAdd] = React.useState([]);




    return (
        <>

            <GroceryInput add={add} setAdd={setAdd} />
            
            <ul>
				{add.map((items) => {
					return <GroceryList key={items.id} items={items.value} />;
				})}
            </ul>
            


		</>
	);
}

export default Grocery;
