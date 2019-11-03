import React from 'react';

function ValidationComponent(props){
	return (
		<div>
		   {props.stringLength<=5?'Text too short(<=5)': 'Text is long enough(>5)' }

		</div>
	);
}

export default ValidationComponent;