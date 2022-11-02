import React,{Fragment} from 'react';
import PropTypes from "prop-types";
import {getFunName} from '../helpers';

class StorePicker extends React.Component{
    static propTypes={
        history:PropTypes.object
    }
    myInput=React.createRef();

    goToStore=(event)=>{
        //1.Stop the form from submitting
        event.preventDefault();
        //2.Get the text from the input
        // console.log(event.target[0].value);
        const StoreName =this.myInput.current.value;
        //3.Change the page to /store/whatever they entered
        this.props.history.push(`/store/${StoreName}`);
    }
    
    render(){
        // return React.createElement('p',{className:"Hey"},'It is React Created element');
       return (
           <form className='store-selector' onSubmit={this.goToStore}>
            {/* Comment  */}
        <h2>Please Enter a Store</h2>
        <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()}/>
        <button type="submit" >Visit Store ➡</button>
       </form>
       )
    }
}

export default StorePicker;