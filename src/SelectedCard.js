import React from 'react';
import InputComponent from './InputComponent'



class SelectedCard extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            frontValue: ''
        }
    }

    handleChangeFrontValue = (e) => {
        this.setState({ frontValue: e.target.value });
      }

      


    render(){
        console.log(this.props.selectedCard)
       
            return(
                <form onSubmit={console.log('form submit')}>
                <label>
                  Front
                    <input className="indexCard" type="text" value={this.props.selectedCard.front} onChange={e => this.handleChangeFrontValue(e)} />
                </label>
            
                <label>
                  Back
                    <input className="indexCard" type="text" value={this.props.selectedCard.back} onChange={console.log((e) => e.target.value)} />
                </label>
                <input type="submit" value="submit" />
          </form>
            )
        }
}

export default SelectedCard;


// let temp = [...arr1]
// let ind = temp.findIndex((el) => el.id === 1)
// temp[ind] = obj
