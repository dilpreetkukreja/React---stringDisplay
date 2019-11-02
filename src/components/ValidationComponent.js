import React from 'react';

function ValidationComponent(props){
	return (
		<div>
		   {props.stringLength<=5?'Text too short(<=5)': `Length of string is: ${props.stringLength}` }

		</div>
	);
}

export default ValidationComponent;