import React from 'react'
import {withEx} from './ExProvider'



    
   
const Exchange = props => {

    return (
        console.log(props),
        <div className = "exchange">
            
            <div className = 'textcont'>
                <h4 className = 'exchangeText'> { props.switch ? `1 USD = ${props.val} ${props.cur}` : `1 EUR = ${props.val} ${props.cur}`}</h4>
            </div>
            
        </div>
    
    )
    }
   

export default withEx(Exchange)