import React, { Component } from 'react';
import  styles  from "./styles.module.scss";

class Header extends Component {

    render() {
        return (
                <div className={styles.container}>
                    <ul>
                        <li className={styles.icons}></li>
                        <li><a className={styles.active} href="#home">Home</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact">Contact us </a></li>
                        <li><a href="#about">About us </a></li>
                        <div className={styles.logincontainer}>
                        <form>
                        <input type="text" placeholder="Username" name="username"></input>
                        <input type="text" placeholder="Password" name="psw"></input>
                        <button type="submit">Login</button>
                        </form>
                    </div>
                    </ul>
                    
                </div>     
        );
    }
}

export default Header;