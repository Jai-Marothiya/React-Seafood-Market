import React from "react";
import PropTypes from 'prop-types';

class AddFishForm extends React.Component{
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    imageRef = React.createRef();
    descRef = React.createRef();

    static propTypes={
        addFish: PropTypes.func,
    }
    
    createFish=(event)=>{
        //1. Stop the submitting of form
        event.preventDefault();
        const fish={
            name:this.nameRef.current.value,
            price:parseFloat(this.priceRef.current.value),
            status:this.statusRef.current.value,
            image:this.imageRef.current.value,
            decs:this.descRef.current.value,
        }


        this.props.addFish(fish);
        //Refresh the form
        event.currentTarget.reset();
    }
    render(){
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input  name="name" ref={this.nameRef} type="text" placeholder="Name"/>
                <input  name="price" ref={this.priceRef} type="text" placeholder="Price"/>
                <select name="status" ref={this.statusRef}>
                    <option value="available" >Fresh!</option>
                    <option value="unavailable" >Sold Out!</option>
                </select>
                <input  name="image" ref={this.imageRef} type="text" placeholder="Image"/>
                <textarea  name="desc" ref={this.descRef}  placeholder="Desc" />
                <button type="submit">+ Add Fish</button>
            </form> 
        )
    }
}

export default AddFishForm;