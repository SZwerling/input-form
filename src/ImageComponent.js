import React from 'react';
import { Card, CardGroup, CardImg, Row, Col } from 'reactstrap';

const Image = (props) => {
    if(!props.images){
        return(
            <div>no images</div>
        )
    }
    

    const threeImages = (props.images.map((image) => {
        
        return(
            <Col sm="4">
                <Card key={image.id}>
                    <CardImg 
                        img="fluid"
                        style={{ height: "25rem" }}
                        alt={image.description} 
                        src={image.urls.small}
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