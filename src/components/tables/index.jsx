import React, { Component } from 'react';
import axios from 'axios';
import {userInfos, invoiceInfos, headNames} from '../../mock/listingData';
import  styles  from "./styles.module.scss";

class Tables extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            tableHead : null , 
            surname:null
        }
    }

    // handleCustomersData = () => {
    //     axios.get('http://localhost:3000/customers') 
    //     .then(function (response) {
    //     console.log ('response',response.data);
    //     })
    //     .catch(function (error) {
    //     console.log(error);
    //     })
    //     .then(function () {
    //     });
    // }

    // handleInvoiceData = () => {
    //     axios.get('http://localhost:3000/invoice') 
    //     .then(function (response) {
    //     console.log ('response',response.data);
    //     })
    //     .catch(function (error) {
    //     console.log(error);
    //     })
    //     .then(function () {
    //     });
    // }

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