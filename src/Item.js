import React, { Component } from 'react'
import './styles.css'

class Item extends Component{
    constructor(props){
        super(props);
        this.state = {
            task : this.props.item.task,
            isEditing : false,
            id : this.props.item.id,
            isCompleted : this.props.item.isCompleted
        }
        this.editHandle= this.editHandle.bind(this);
        this.deleteHandle = this.deleteHandle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    editHandle(){
        this.setState({
            isEditing : true
        })
    }

    deleteHandle(){
        this.props.handleDelete(this.state.id);
    }

    handleChange(eve){
        this.setState({
            task : eve.target.value
        })
    }

    handleSubmit(eve){
        eve.preventDefault();
        this.setState({
            isEditing : false
        })
        this.props.handleEdit(this.state)
    }

    handleCompleted(){

        this.setState({
            isCompleted : (!this.state.isCompleted)
        }   
        )
        this.props.handleClick(this.state)
    }


    render(){

        const done = {"textDecoration" : "line-through"};
        const notDone = {}

        return (

            <div>
                {this.state.isEditing?
                (
                    <form
                     onSubmit = {this.handleSubmit}>
                        <input 
                        type = 'text'
                        name = 'task'
                        value = {this.state.task} 
                        onChange = {this.handleChange}
                        ></input>
                        <button type = 'submit'>Save Changes!</button>
                    </form>
                ) : (
                <div className = 'item'> 
                    <p className = 'textIn'
                     onClick = {this.handleCompleted}
                     style = {this.state.isCompleted?done : notDone}
                     >{this.props.item.task}</p>
                    <button className = 'edit' onClick = {this.editHandle}>Edit</button>
                    <button className = 'delete' onClick = {this.deleteHandle}>Delete</button>
                </div>
                )}
            </div>
        )
    }
}

export default Item;


