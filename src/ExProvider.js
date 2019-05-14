import React, { Component } from 'react'
import axios from 'axios'
export const { Provider, Consumer } = React.createContext()


export default class ExProvider extends Component {
    constructor(){
        super()
        this.state = {
            currency: [],
            inputValue: '',
            inputValue2: '',
            conversion: null,
            input1: '',
            input2: '',
            inputValue1: 1

        }
    }

    getData = () => {
        axios.get(`http://data.fixer.io/api/latest?access_key=4d7a09c2820310947ad3da41736dc6e7`).then(response => {
            var obj = response.data.rates
            var arr = []
                for(let i in obj) {
                    const obj2 = {
                        key: i,
                        value: obj[i],
                        id: Math.random()
                    }
                        arr.push(obj2)
                }
    
                this.setState({
                    currency: arr
                    
                })
            })
    }
                   
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }


    handleSubmit = event => {
        event.preventDefault()
        let num1 = 0
        let num2 = 0
        let name1 = ''
        let name2 = ''
        let currValue = this.state.inputValue.toUpperCase()
        let currValue2 = this.state.inputValue2.toUpperCase()
        
        this.state.currency.forEach(function(item){
            if(item.key === currValue) {
                 num1 = item.value
                 name1 = item.key
            
            } 
            if(item.key === currValue2) {
                 num2 = item.value
                 name2 = item.key
            }
            
        })
           
        let result = num2/num1* this.state.inputValue1
     
            name1 && name2  ?
            this.setState( prevState => {
        
                return {
                    conversion: result,
                    inputValue: '',
                    inputValue2: '',
                    input1: prevState.inputValue,
                    input2: prevState.inputValue2
                }
            })
        

        :
            
            alert('CURRENCY NOT FOUND\nCURRENCY CODE SHOULD BE 3 LETTERS ONLY\n\n Example:\n for euro enter eur\n for united states dollar enter usd')
    }

    
    render(){
        return (
            <Provider value={{
                currency: this.state.currency,
                getData: this.getData,
                handleSubmit: this.handleSubmit,
                handleChange: this.handleChange,
                inputValue: this.state.inputValue,
                inputValue1:this.state.inputValue1,
                inputValue2: this.state.inputValue2,
                conversion: this.state.conversion,
                input1: this.state.input1,
                input2: this.state.input2
            }}>
                { this.props.children }
            </Provider>
        )
    }
}

export const withEx = C => props => (
    <Consumer>
        {value => <C {...props} {...value}/>}
    </Consumer>
)