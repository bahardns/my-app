import React, { Component } from 'react';
import img from './img.png';
import json1 from './json1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import  styles  from "./styles.module.scss";
class Card extends Component {

    render() {
        return (
            <>
            <div className={styles.container}>
                <div className={styles.gallery}>
                    <a target="_blank" href="json1.png">
                    <img src={json1} alt="json" width="600" height="400"></img>
                    </a>
                        <div className={styles.desc}>
                            <h5>JSON SERVER</h5>
                            <p>bu sitenin yapımında Json server kullanılmıştır</p>
                        </div>
            </div>
            <div className={styles.gallery}>
                <a target="_blank" href="img.png">
                <img src={img} alt="react" width="600" height="400"></img>
                </a>
                    <div className={styles.desc}>
                        <h5>React JS</h5>
                        <p>bu sitenin yapımında React js components yapısı kullanılmıştır</p>
                    </div>
            </div>
            <div className={styles.gallery}>
                <a target="_blank" href="img2.png">
                <img src={img2} alt="bootstrap" width="600" height="400"></img>
                </a>
                    <div className={styles.desc}>
                        <h5>Bootstrap</h5>
                        <p>bu sitenin yapımında Bootstrap grid yapısı kullanılmıştır</p>
                    </div>
            </div>
            <div className={styles.gallery}>
                <a target="_blank" href="img3.png">
                <img src={img3} alt="swiper" width="600" height="400"></img>
                </a>
                    <div className={styles.desc}>
                        <h5>Swiper</h5>
                        <p>bu sitenin yapımında Swiper yapısı kullanılmıştır</p>
                    </div>   
            </div>
            </div>
            </>
        );
    }
}

export default Card;