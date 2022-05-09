import  styles  from "./styles.module.scss";
import React, { Component } from 'react';
import {userInfos, headNames} from '../../mock/listingData';

class Customers extends Component {
    constructor() {
        super();
        this.state={}
    }

    render() {
        return (
            <>
            <div className={styles.container}>
                <h3>customers table</h3>
                        <table  className={styles.customersTable}>
                        <thead className={styles.thead}>
                        {
                            headNames.map((item)=>(
                                <tr>
                                    {item.userHead.map((elem)=>(
                                        <th>{elem}</th>
                                    ))}
                                </tr>
                            ) )}
                            </thead>
                            <tbody>
                                {userInfos.map((item)=>
                                (
                                <tr>
                                    {Object !==null && Object.keys(item).map((key)=>(
                                        <td>{item[key]}</td>
                                ) )} 
                                </tr>  
                                ))}
                                </tbody>
                        </table> 
                    </div>    
                 </> 
            
        );
    }
 }


export default Customers;