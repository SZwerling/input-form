import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { cardCreator } from './actions/index';


class Input extends React.Component {
   renderInput = ({ input, label }) => {
      //weird syntax takes all key value pairs from input object (from reudx form) and sends to input element
      return (
         <div >
            <input className="indexCard" {...input} />
            <label>{label}</label>
         </div>
      );
   };

   onSubmit = (values) => {
      
      this.props.cardCreator(values)
   }
   
   render() {
      console.log(this.props.cards)
      return (
         <form onSubmit={() => this.props.handleSubmit(this.onSubmit)}>
            <Field name="front" component={this.renderInput} label="front" />
            <Field name="back" component={this.renderInput} label="back" />
            <button>submit</button>
         </form>
      );
   }
}

const mapDispatchToProps = {
   cardCreator: (text) => (cardCreator(text))
};

const mapStateToProps = (state) => ({
      cards: state.cards   
})



Input = connect(
   null,
   mapDispatchToProps
)(Input);

export default reduxForm({
   form: 'newCard'
})(Input)






//
//  className="indexCard"
