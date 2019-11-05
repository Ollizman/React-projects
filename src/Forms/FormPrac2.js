import React, { Component } from "react"
import FormComponent from './FormComponent'

class FormPrac2 extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: undefined,
            gender: '',
            destination: '',
            diets: {
                vegetarian: false,
                vegan: false,
                meatlover: false,
                lactose: false
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (event) => {
        const { name, value, type, checked } = event.target
        type === 'checkbox' ? this.setState(prevState => {
            return {
                diets: {
                    ...prevState.diets,
                    [name]: checked
                }
            }
        }) :
            this.setState({
                [name]: value
            })
    }
    handleSubmit = (event) => {
        alert('Form was submitted, thanks: ' + this.state.firstName)
        event.preventDefault();
    }

    render() {
        return (
            <FormComponent 
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
            data = {this.state} />
        )
    }
}

export default FormPrac2