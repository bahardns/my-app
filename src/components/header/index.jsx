import React, { Component } from 'react';
import  styles  from "./styles.module.scss";

class Header extends Component {

    render() {
        return (
                <div className={styles.container}>
                    <ul>
                        <li className={styles.icons}><span>ACCOUNTING SYSTEM </span></li>
                        <li><a className={styles.active} href="#home">Home</a></li>
                    </ul>
                    
                </div>     
        );
    }
}

export default Header;