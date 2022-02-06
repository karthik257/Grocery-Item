import React from 'react';
import { v4 } from 'uuid';


function GroceryInput({ add, setAdd }) {


    const [value, setValue] = React.useState("");


    return (
        <div>
            
            <input
                type="text"
				placeholder="Enter Grocery Item"
				onChange={(e) => setValue(e.currentTarget.value)}
                value={value}
            />

			<button
				onClick={() => {
					if (value !== "") {
						setAdd([...add, { value, id: v4() }]);
                        setValue("");                        
					} else {
						alert("Enter something");
					}
				}}
			>
				ADD
			</button>
		</div>
	);
}

export default GroceryInput;
