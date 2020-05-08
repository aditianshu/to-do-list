import React, { Component } from 'react'
import './styles.css'
import Item from './Item'
import AddItem from './AddItem';
import {v4 as uuid} from 'uuid'

class List extends Component{

    constructor(props){
        super(props);
        this.state = {
            items : [
                {
                    task : "Buy stuff",
                    id : uuid(),
                    isCompleted : false
                }
            ]
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleAdd(item){
        item = {...item , id : uuid(), isCompleted : false};
        this.setState(
            {
                items : [...this.state.items, item]
            }
        )
    }

    handleEdit(item){
        console.log(item)
        const id = item.id;
        const elementsIndex = this.state.items.findIndex(element => element.id === id )
        let newArray = [...this.state.items];
        newArray[elementsIndex] = {...newArray[elementsIndex], task : item.task};
        this.setState({
            items: newArray,
            });
        
    }

    handleDelete(id){
        this.setState({
            items: this.state.items.filter(e => (e.id !== id))
        })
    }

    handleClick(item){
        const id = item.id;
        const elementsIndex = this.state.items.findIndex(element => element.id === id )
        let newArray = [...this.state.items];
        newArray[elementsIndex] = {...newArray[elementsIndex], completed: !newArray[elementsIndex].completed};
        this.setState({
            items: newArray,
            });
        
    }

    render(){

        return (

            <div className = 'outer'>
                <h2>To-Do List</h2>
                <div className = 'list'>
                    {this.state.items.map(i => (<Item item = {i} 
                                handleClick = {this.handleClick}
                                handleDelete = {this.handleDelete}
                                handleEdit = {this.handleEdit}/>) )}
                </div>
                <div className = 'add'>
                    <AddItem 
                    handleAdd = {this.handleAdd} />
                </div>
            </div>
        )
    }
}

export default List;