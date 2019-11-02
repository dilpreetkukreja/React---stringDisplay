import React from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

class App extends React.Component {
  state = {
    length: 0,
    charArr:[]
  }
  changeListener = (event) =>{
    let value = event.target.value;
    let charArr = value.split('');
    console.log(charArr);
    console.log(value.length);
    this.setState({length: value.length, charArr: charArr});
  }
  deleteHandler = (index) => {
    let copycharArr = [...this.state.charArr];
    let updatedcharArr = copycharArr.filter((elem,ind)=>{
      return ind !== index;
    });

    this.setState({charArr: updatedcharArr, length: this.state.length-1});


  }

  render(){
    let charArrComponents = this.state.charArr.map((elem,index) =>{
      return <CharComponent 
                key = {index}
                charElem = {elem}
                deleteHandler = {()=>this.deleteHandler(index)}
             />
    })
    return (
      <div className="App">
       <input 
        type="text"
        onChange = {this.changeListener}
        value = {this.state.charArr.join('')}
       />
       <p>Length of string is: {this.state.length}</p>
       <ValidationComponent stringLength = {this.state.length}/>
       {charArrComponents}
      </div>
  );
  }
  
}

export default App;
