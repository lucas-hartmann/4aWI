import React, { Component } from "react";
import styles from "./liste.module.css";

export default class Liste extends Component {
    render(){
        return(
            <div className={styles.list}>
                <li className={styles.li}>Coffee</li>
                <li className={styles.li}>Tea</li>
                <li className={styles.li}>Beer</li>
            </div>
        )
    }
}



