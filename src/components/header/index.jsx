import React, { Component } from 'react';
import  styles  from "./styles.module.scss";

class Header extends Component {

    render() {
        return (
          <div>
                <div className={styles.container}>
                    <ul>
                        <li><a className={styles.active} href="#home">Home</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>

            </div>
         </div>  
        );
    }
}

export default Header;