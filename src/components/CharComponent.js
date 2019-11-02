import React from 'react';

function CharComponent(props){
	let style = {
		display: 'inline-block',
		padding: '16px',
		textAlign: 'center',
		margin: '16px',
		border: '1px solid black'
	}
	return (
		<div 
			style = {style} 
			onClick = {props.deleteHandler}
		>
		  {props.charElem}
		</div>
	);
}

export default CharComponent;