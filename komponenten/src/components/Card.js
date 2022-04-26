import React, { Component } from "react";
import styles from "./Card.module.css";

export default class Card extends Component {
    render(){
        return(
            <div className={styles.div}>
                <div className={styles.pic}><img src="https://www.w3schools.com/howto/img_avatar.png" height="200px" width="200px"></img></div>
                <div className={styles.name}>Johnny Sins</div>
                <div className={styles.job}>Doctor & Astronaut</div>
            </div>
        )
    }
}