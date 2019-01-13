import React from 'react'
import{withEx} from './ExProvider'


    
   


const ExchangeList = props => {

    return (
         
        <div className = 'excList'>
                  
            <form onSubmit = {props.handleSubmit}>
                
                <p className = 'convert'>Convert</p>
                <input type = 'text' 
                     placeholder = '$$$' 
                     onChange = {props.handleChange} 
                     value = {props.inputValue}
                     name = 'inputValue' /> <h1 className = "to">to</h1>
                <input type = 'text'
                     placeholder = '$$$' 
                     onChange = {props.handleChange}
                     value = {props.inputValue2}
                     name = 'inputValue2' />
                <button>Convert</button>
                    
            </form>
            <div className = 'msg'>
                <h3 className = 'search'>  { props.conversion && "Today's rate:"  }</h3>
                 <p>{props.conversion && `1${props.input1.toUpperCase()} = ${props.conversion} ${props.input2.toUpperCase()}`}</p>
            </div> 
                                     
             
            {props.mapCur}
        </div>
         
    )
    }
   

export default withEx(ExchangeList)