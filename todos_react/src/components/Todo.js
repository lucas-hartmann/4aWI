import React, { Component } from 'react';
import styles from "./Todo.module.css";
import { BiCheck } from "react-icons/bi";

export default class Todo extends Component {
    render() { 
        return (
            <div className={styles.wrap}>
                <div className={styles.title}>{this.props.title}</div>
                <div>{this.props.isDone}</div>
                <div><button className={styles.button}><BiCheck className={styles.check}/></button></div>
            </div>
        );
    }
}
