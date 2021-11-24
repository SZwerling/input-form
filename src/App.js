import React from 'react';
import './App.css';

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
        this.setState({arr: [...this.state.arr, {front: this.state.frontValue, back: this.state.backValue}]})
        this.setState({ frontValue: ''})
        this.setState({ backValue: ''})
      }


      render(){ 
        console.log(this.state.arr)    
        return(
          <form onSubmit={this.onAddItem}>
            <label>
              Front
              <input type="text" value={this.state.frontValue} onChange={this.handleChangeFrontValue} />
            </label>
            <label>
              Back
              <input type="text" value={this.state.backValue} onChange={this.handleChangeBackValue} />
            </label>
            <input type="submit" value="submit" />
          </form>
        )
      }
}

export default App;
