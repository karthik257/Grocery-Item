import React from 'react';


function GroceryList({ items }) {

      const handleDelete = (e) =>{
       e.currentTarget.parentNode.remove();
    }

    return (
		<li>
			{items}
			<button onClick={handleDelete}>Delete</button>
		</li>
	);
}

export default GroceryList;
