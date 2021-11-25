import React from 'react';

function Cards(props){
console.log(props)


//make a card here

const cards = props.cards.map((card) => {  //map to props to card here
    return(
        <div>
           This is the card ID: {card.Id} <br/>
            Front word: {card.front} <br/>
            Back word: {card.back}
        </div>
    )
})
   

    return(
        <div>
            {cards}
        </div>
    )
}

export default Cards;