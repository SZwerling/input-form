import React from 'react';
import './App.css';
import InputComponent from './InputComponent';
import Cards from './Cards';

class App extends React.Component{
      constructor(props){
        super(props);
        this.state = {
          frontValue: '',
          backValue: '',
          arr: []
        };
      }

      
      handleChangeFrontValue = (e) => {
        this.setState({ frontValue: e.target.value });
      }
      handleChangeBackValue = (e) => {
        this.setState({ backValue: e.target.value });
      }

      onAddItem = (e) => {
        e.preventDefault();
        this.setState({arr: [...this.state.arr, 
          {
            Id: this.state.arr.length,
            front: this.state.frontValue, 
            back: this.state.backValue
          }
        ]})
        this.setState({ frontValue: '', backValue: ''})
        
      }

      render(){ 
        console.log(this.state)
        return(
          <React.Fragment>
            < InputComponent 
            onAddItem={this.onAddItem} 
            frontValue={this.state.frontValue}
            backValue={this.state.backValue}
            handleChangeFrontValue={this.handleChangeFrontValue} 
            handleChangeBackValue={this.handleChangeBackValue}
            />
            <Cards cards={this.state.arr}/>
         </React.Fragment>
        )
      }
} 

export default App;
