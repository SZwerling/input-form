import React from 'react';
import './App.css';

class App extends React.Component{
      constructor(props){
        super(props);
        this.state = {
          value: '',
          arr: ['worm', 'start']
        };
      }

      
      handleChangeValue = (e) => {
        this.setState({ value: e.target.value});
      }

      onAddItem = (e) => {
        e.preventDefault();
        this.setState({arr: [...this.state.arr, this.state.value]})
      }

     
      // this.setState({
      //   cart: ['ice cream'],
      //   total: 5


      render(){ 
        console.log(this.state)    
        return(
          <form onSubmit={this.onAddItem}>
            <label>
              INPUT FIELD
              <input type="text" onChange={this.handleChangeValue} />
            </label>
            <input type="submit" value="submit" />
          </form>
        )
      }
}

export default App;
