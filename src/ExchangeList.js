import React from 'react'
import{withEx} from './ExProvider'


    
   


const ExchangeList = props => {

    return (
         
        <div className = 'excList'>
                  
            <form onSubmit = {props.handleSubmit}>
                
                <p className = 'convert'>Convert</p>
                <input type = 'number' 
                     placeholder = 'amount' 
                     onChange = {props.handleChange} 
                     value = {props.inputValue1}
                     name = 'inputValue1'
                     required /> 
                <input type = 'text'
                     className = 'cur1' 
                     placeholder = '$$$' 
                     onChange = {props.handleChange} 
                     value = {props.inputValue}
                     name = 'inputValue' 
                     maxlength="3"
                     required/> <h1 className = "to">to</h1>
                <input type = 'text'
                     className = 'cur2'
                     placeholder = '$$$' 
                     onChange = {props.handleChange}
                     value = {props.inputValue2}
                     name = 'inputValue2'
                     maxlength="3"
                     required />
                <button>Convert</button>
                    
            </form>
            <div className = 'msg'>
                <h3 className = 'search'>  { props.conversion && "exchange rate:"  }</h3>
                 <p>{props.conversion && `${props.inputValue1} ${props.input1.toUpperCase()} = ${props.conversion} ${props.input2.toUpperCase()}`}</p>
            </div> 
                                     
             
            {props.mapCur}
        </div>
         
    )
    }
   

export default withEx(ExchangeList)