import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InputComponent from './InputComponent';
import Cards from './Cards';

import unsplash from './api/unsplash';
import Image from './ImageComponent';
import { Container } from 'reactstrap';


class App extends React.Component{
      constructor(props){
        super(props);
        this.state = {
          frontValue: '',
          backValue: '',
          Id: 0,
          arr: [],
          image: []
        };
      }


      onSearchSubmit = async (term = "desk") => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },  
        })
        this.setState({ image: response.data.results.slice(0, 3) });
    };

    componentDidMount = () => {
      this.onSearchSubmit('desk')
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
            Id: this.state.Id,
            front: this.state.frontValue, 
            back: this.state.backValue
          }
        ]})
        this.onSearchSubmit(this.state.frontValue);
        this.setState({ frontValue: '', backValue: ''});
        this.setState({ Id: this.state.Id + 1})
                
      }

      render(){ 
        return(
          
            <Container>
              < InputComponent 
              onAddItem={this.onAddItem} 
              frontValue={this.state.frontValue}
              backValue={this.state.backValue}
              handleChangeFrontValue={this.handleChangeFrontValue} 
              handleChangeBackValue={this.handleChangeBackValue}
              onSearchsubmit={this.onSearchSubmit}
              />
              {/* <Cards cards={this.state.arr}/> */}
              <Image images={this.state.image} />
              <Cards cardsArr={this.state.arr}/>
            </Container>
         
        )
      }
} 

export default App;
