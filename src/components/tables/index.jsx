import  styles  from "./styles.module.scss";
import React, { Component } from 'react';
import {userInfos, invoiceInfos, headNames} from '../../mock/listingData';

class Tables extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            tableHead : null , 
            surname:null
        }
    }


    render() {
        const {type} = this.props;
        console.log(' headNames[0].userHead', headNames[0].invoiceHead) 

        return (
            <>
            <div className={styles.container}>
                <h3> { type ==='customers' ?  'Customers Table' : 'Invoice Table'} </h3>
                        <table  className={styles.tableStyle}>
                        <thead className={styles.thead}>
                        {
                            headNames !== null && headNames.map((item)=>(
                                <tr>
                                    { type ==='customers' ? item.userHead.map((elem)=>(
                                        <th>{elem}</th>
                                    )) :   item.invoiceHead.map((elem)=>(
                                        <th>{elem}</th>
                                    )) }
                                
                                </tr>
                            ) )}
                            </thead>
                            <tbody>
                                { type ==='customers' ?  userInfos.map((item)=>
                                (
                                <tr>
                                    {Object !==null && Object.keys(item).map((key)=>(
                                        <td>{item[key]}</td>
                                ) )} 
                                </tr>  
                                )): invoiceInfos.map((item)=>
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


export default Tables;