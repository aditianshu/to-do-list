import React, { Component } from 'react'
import './styles.css'

class AddItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            task : ""
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(eve){
        this.setState({
            task : eve.target.value
        })
    }

    handleSubmit(eve){
        eve.preventDefault();
        this.props.handleAdd(this.state);
        this.setState({
            task : ""
        })
    }


    render(){

        return (

            <div className = 'add'>
                <form onSubmit = {this.handleSubmit}>
                    <input className = 'input'
                    type = 'text'
                    value = {this.state.task}
                    name = "task"
                    onChange = {this.handleChange}
                    ></input>
                    <button type = "submit">ADD!</button>
                </form>

            </div>
        )
    }
}

export default AddItem;