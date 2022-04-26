import React, { Component } from 'react';
import styles from "./TaskAdder.module.css";


export default class TaskAdder extends Component {
   
    constructor(props){
        super(props);
        this.state={
            inputValue: ""
        }
    }

    handleChange = (event)=>{
        this.setState({
            inputValue: event.target.value
        })
    }

    addTask = ()=>{
        if(this.state.inputValue == "")
        {
           alert("Bitte geben Sie einen Wert ein!") 
        }
        this.props.onTaskAdded(this.state.inputValue);
    }
   
    render() { 
        return (
            <div>
                <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
                <button className={styles.button} onClick={this.addTask}>Save</button>
            </div>
        );
    }
}
