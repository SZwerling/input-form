import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { cardCreator } from './actions/index';
import { fuff } from './actions';

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

   onSubmit(formValues){
      console.log(this.props.fuff)
   }
   
   render() {

      return (
         <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name="front" component={this.renderInput} label="front" />
            <Field name="back" component={this.renderInput} label="back" />
            <button>submit</button>
         </form>
      );
   }
}

const wrapped = reduxForm({
   form: "newCard"
})(Input);

export default connect(null, fuff)(wrapped)





//
//  className="indexCard"
