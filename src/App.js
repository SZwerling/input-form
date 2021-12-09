import React from 'react';
import './App.css';
import InputComponent from './InputComponent';
import Cards from './Cards';
import unsplash from './api/unsplash';
import Image from './ImageComponent';

class App extends React.Component{
      constructor(props){
        super(props);
        this.state = {
          frontValue: '',
          backValue: '',
          arr: [],
          image: []
        };
      }

    // onSearchSubmit(term){
    //   axios.get('https://api.unsplash.com/search/photos',{
    //     params: { query: term },
    //     headers: {
    //       Authorization: 'Client-ID K2NNfQZQYGr5Xl2MG1U74fyyYJGXA-zDR_TyZJLR4zo'
    //     }
    //   });
    // }

      onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },  
        })
        this.setState({ image: response.data.results});
    };

  
  
      
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
        this.onSearchSubmit(this.state.frontValue);
        this.setState({ frontValue: '', backValue: ''});
                
      }

      render(){ 
       console.log(this.state.image)
        return(
          <React.Fragment>
            < InputComponent 
            onAddItem={this.onAddItem} 
            frontValue={this.state.frontValue}
            backValue={this.state.backValue}
            handleChangeFrontValue={this.handleChangeFrontValue} 
            handleChangeBackValue={this.handleChangeBackValue}
            onSearchsubmit={this.onSearchSubmit}
            />
            <Cards cards={this.state.arr}/>
            <Image image={this.state.image[0]} />
         </React.Fragment>
        )
      }
} 

export default App;
