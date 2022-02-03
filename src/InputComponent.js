import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { cardCreator } from './actions/index';


class Input extends React.Component {
   renderInput = ({ input, label }) => {
      //weird syntax takes all key value pairs from input object (from redux form) and sends to input element
      return (
         <div >
            <input className="indexCard" {...input} />
            <label>{label}</label>
         </div>
      );
   };

   onSubmit = (values) => {
      
      console.log(values)
   }
   
   render() {
      console.log(this.props.state)
      return (
         <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
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



Input = reduxForm({
   form: 'newCard',
   cardCreator
})(Input);

export default Input = connect(mapStateToProps, mapDispatchToProps)(Input);

// Signup = reduxForm({
//    form: 'signup',
//    validate})(Signup);
   
//    export default Signup = connect(mapStateToProps, actions)(Signup);






//
//  className="indexCard"
