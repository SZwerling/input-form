import React from 'react';



class SelectedCard extends React.Component{
    constructor(props){
        super(props);
        this.state= {}
    }


    render(){
            return(
                <div>{this.props.selectedCard.front}</div>
            )
        }
}

export default SelectedCard;