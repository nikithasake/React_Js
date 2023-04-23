import React, { Component } from "react";
import './style.css'
import {connect} from 'react-redux';
import {buyLaptop, buyMobile, fetchUsers} from "./redux/reducers";
export class Shop extends Component{

    // state={
    //     numOfLaptops:100
    // }
    // buyLaptop=()=>{
    //     this.setState({numOfLaptops:this.state.numOfLaptops-1});
    // }
    render(){
        return(
            <div>
                <h1 className="title">Welcome to Vshop</h1>
                <div className="items">
                <div className="item">
                    <p>Dell Inspiration Laptop</p>
                    <p>Available:{this.props.numOfLaptops}</p>
                    <button onClick={this.props.buyLaptop}>BUY</button>
                </div>
                <div className="item">
                    <p>Redme Note 7</p>
                    <p>Available:{this.props.numOfMobiles}</p>
                    <button onClick={this.props.buyMobile}>BUY</button>
                </div>
                <div className="item">
                    <p>Get users data</p>
                    <p>Count:{this.props.users.length}</p>
                    <button onClick={this.props.fetchUsers}>Call Api</button>
                </div>
                </div>
            </div>
        )
    }
}

//we have to access the data by using props only
const mapStateToProps=(state)=>{
    return{
        numOfLaptops:state.laptops.numOfLaptops,
        numOfMobiles:state.mobiles.numOfMobiles,
        users:state.users.users
    }
}

//we need to connect this component to store 
//connect (HOC) take componnet and produce new component
//it will take two parameters i.e ,mapStateToProps
const mapDispatchToProps=(dispatch)=>{
    return{
        buyLaptop:()=>dispatch(buyLaptop()),
        buyMobile:()=>dispatch(buyMobile()),
        fetchUsers:()=>dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Shop)