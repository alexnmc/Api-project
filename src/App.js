import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from  './About'
import Exchange from './Exchange'
import Footer from './Footer'
import ExchangeList from './ExchangeList'
import {withEx} from './ExProvider'

class App extends Component {
       
        
    componentDidMount(){
            this.props.getData()
            
    }
    render(){
        const mapCur = this.props.currency.map( item =>{ 
            console.log("id number = " + item.id)
            return(
                <Exchange  
                    cur = {item.key}
                    val = {item.value}
                    key = {item.id}
                />
            )
            
        })
    
        return(
           
            <div>
                
                <Navbar />
                
                <Switch>
                    <Route exact path="/" component = {Home}/>
                    <Route path="/about" component = {About}/>
                    <Route path="/exchange"  render = {props => <ExchangeList {...props} mapCur={mapCur} handleChange = {props.handleChange} handleSubmit = {props.handleSubmit}  conversion = {props.conversion} inputValue = {props.inputValue}  inputValue2= {props.inputValue2} input1 = {props.input1} input2 = {props.input2}/>}/>
                </Switch>
                
                <Footer />
                
            </div>
        )
    }
}


export default withEx(App)