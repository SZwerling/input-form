import React from 'react';

const Image = (props) => {
    if(!props.images){
        return(
            <div>no images</div>
        )
    }
    console.log(props.images)

    const threeImages = (props.images.map((image) => {
        return(
            <div key={image.id}>
            <img alt={image.description} src={image.urls.thumb}/>
        </div>
        )
    }))
    
    return(
        <div>{threeImages}</div>
    )
} 



export default Image;