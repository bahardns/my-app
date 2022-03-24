import React, { Component } from 'react';
import  Styles  from "./styles.module.scss";
class HelloWorld extends Component {
    render() {
        return (
            <div><h1 className={Styles.baslik}>merhaba dünya class </h1></div>
            
        );
    }
}

export default HelloWorld;