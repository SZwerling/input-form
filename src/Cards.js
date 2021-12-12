import React from 'react';
import { Card, CardBody, Col, Row, CardText } from 'reactstrap';

class Cards extends React.Component{
    constructor(props){
        super(props);
        this.state = {cards: [
            {
                Id: 1,
                front: 'head',
                back: 'cabeza'
            },
            {
                Id: 2,
                front: 'foot',
                back: 'pie'
            },
            {
                Id: 3,
                front: 'arm',
                back: 'brazo'
            }
        ]}
    }

//make a card here
render(){
    let arr = this.props.cardsArr.length < 1 ? this.state.cards : this.props.cardsArr;
    console.log(this.state.cards)
const cards = arr.map((card) => {  //map to props to card here
    return(
        <Col key={card.Id}>
            <Card className='mt-3 mb-5'>
                <CardBody >
                    <CardText tag="h2">
                This is the card ID: {card.Id} <br/>
                    Front word: {card.front} <br/>
                    Back word: {card.back}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    )
})
   

    return(
        <Row>
            {cards}
        </Row>
    )
}
}

export default Cards;