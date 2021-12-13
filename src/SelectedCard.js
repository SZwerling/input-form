import React from 'react';
import InputComponent from './InputComponent'



class SelectedCard extends React.Component{
    constructor(props){
        super(props);
        this.state= {}
    }


    render(){
        console.log(this.props.selectedCard)
            return(
                <form onSubmit={this.props.onAddItem}>
                <label>
                  Front
                    <input className="indexCard" type="text" value={this.props.selectedCard.front} onChange={this.props.handleChangeFrontValue} />
                </label>
            
                <label>
                  Back
                    <input className="indexCard" type="text" value={this.props.selectedCard.back} onChange={this.props.handleChangeBackValue} />
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
