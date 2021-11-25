import React from 'react';

class Input extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <form onSubmit={this.props.onAddItem}>
            <label>
              Front
              <input type="text" value={this.props.frontValue} onChange={this.props.handleChangeFrontValue} />
            </label>
            <label>
              Back
              <input type="text" value={this.props.backValue} onChange={this.props.handleChangeBackValue} />
            </label>
            <input type="submit" value="submit" />
          </form>
        )
    }
}

export default Input;