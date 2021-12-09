import React from 'react';

class Image extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            spans: 0
        }
    }



    render(){

        console.log(this.props.image)
        if(this.props.image){
        return(
            <div >
                <img 
                
                alt={this.props.image.descrption} 
                src={this.props.image.urls.regular}
                />
            </div>
        )
        } else {
            return <div></div>
        }
    }
}

export default Image;