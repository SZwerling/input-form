import React from 'react';
import SelectedCard from './SelectedCard'; 
import { Card, CardBody, Col, Row, CardText, Button } from 'reactstrap';

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
        ],
            selectedCard:  {
                Id: 1,
                front: 'head',
                back: 'cabeza'
            }
        }
    }

    selectedCard = (card) => {
        this.setState({ selectedCard: card })
    }

  

//make a card here
render(){
   
    let arr = this.props.cardsArr.length < 1 ? this.state.cards : this.props.cardsArr;
    
const cards = arr.map((card) => {  //map to props to card here
    return(
        <Col key={card.Id}>
            <Card className='mt-3 mb-5'>
                <CardBody >
                    <CardText tag="h2">
                    ID: {card.Id} <br/>
                    Front: {card.front} <br/>
                    Back: {card.back}
                    </CardText>
                    <Button onClick={() => this.selectedCard(card)} color='success'>CHANGE ME</Button>
                </CardBody>
            </Card>
        </Col>
    )
})
   

    return(
        <Row>
            {cards}
            <SelectedCard selectedCard = {this.state.selectedCard}/>
        </Row>
    )
}
}

export default Cards;