import React from "react";
import PropTypes from 'prop-types';
import Header from "../components/Header";
import Order from "../components/Order";
import Inventory from "../components/Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from '../base';
import "../../src/css/style.css";

class App extends React.Component{
    state={
        fishes : {},
        order: {}
    };

    static propTypes={
        match: PropTypes.object
    }

    componentDidMount(){
        const {params} = this.props.match;
        //first reinstate our localStorage
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef){
            this.setState({order: JSON.parse(localStorageRef)});
        }
        this.ref = base.syncState(`${params.storeId}/fishes`,{
            context:this,
            state: 'fishes'
        });
    }

    componentDidUpdate(){
        localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order));
    }

    componentWillUnmount(){
        base.removeBinding(this.ref)
    }

    addFish=(fish)=>{
        //1. Take a copy of existing State
        const fishes = {...this.state.fishes};
        //2.Add our new fish to that fishes variable
        fishes[`fish${Date.now()}`]=fish;
        //3.Set the new fishes object to state
        this.setState({fishes}); 
    };

    updateFish=(key,updatedFish)=>{
        //1. Take a copy of the current state
        const fishes = {...this.state.fishes};
        //2. Update that state
        fishes[key]=updatedFish;
        //3. setthat to state
        this.setState({fishes});
    } 

    deleteFish=(key)=>{
        //1. Take a copy of the current state
        const fishes = {...this.state.fishes};
        //2. Update that state
        fishes[key]=null;
        //3. setthat to state
        this.setState({fishes});
    } 

    loadSampleFishes = () =>{
        this.setState({fishes: sampleFishes});
    };

    addToOrder = (key) =>{
        //1. Take a Copy of state
        const order ={...this.state.order};
        //2. Either add to the order or update the number in our order
        order[key] = order[key] + 1 || 1;
        //3. Call setback to update our state object
        this.setState({order});
    };

    removeFromOrder = (key) =>{
        //1. Take a Copy of state
        const order ={...this.state.order};
        //2. Remove that item from order
        delete order[key];
        //3. Call setback to update our state object
        this.setState({order});
    };

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline= "Fresh Seafood Market" age={19} hulu={true}/>
                    <ul className="fishes">
                       {Object.keys(this.state.fishes).map(key => 
                       <Fish 
                            key={key}
                            index={key} 
                            details={this.state.fishes[key]} 
                            addToOrder={this.addToOrder}
                        />)}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder}/>
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} fishes={this.state.fishes} updateFish = {this.updateFish} deleteFish={this.deleteFish} storeId={this.props.match.params.storeId}/>

            </div>
        )
    }

}

export default App;