import React from 'react';
import { Card, CardGroup, CardImg, Row, Col } from 'reactstrap';

const Image = (props) => {
    if(!props.images){
        return(
            <div>no images</div>
        )
    }
    

    const threeImages = (props.images.map(({ id, description, urls}) => {
        console.log(props)
        
        return(
            <Col key={id} sm="4">
                <Card >
                    <CardImg 
                        img="fluid"
                        style={{ height: "23rem" }}
                        alt={description} 
                        src={urls.small}
                    />
                </Card>
            </Col>
        )
    }))
    
    return(
        <Row>{threeImages}</Row>
    )
} 



export default Image;