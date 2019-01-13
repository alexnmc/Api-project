import React from 'react'



    
   
const Exchange = props =>{

    return (
        
        <div className = "exchange">
            
            <div className = 'textcont'>
                <h4 className = 'exchangeText'> 1 EUR = {props.val} {props.cur} </h4>
            </div>
            
        </div>
    
    )
    }
   

export default Exchange