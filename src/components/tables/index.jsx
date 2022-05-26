import React, { Component } from 'react';
import axios from 'axios';
import { headNames } from '../../mock/listingData';
import  styles  from "./styles.module.scss";

class Tables extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            tableHead : null , 
            surname:null
        }
    }

    handleCustomersData = () => {
        axios.get('http://localhost:3000/customers') 
        .then(function (response) {
        console.log ('response',response.data);
        })
        .catch(function (error) {
        console.log(error);
        })
        .then(function () {
        });
    }

    handleInvoiceData = () => {
        axios.get('http://localhost:3000/invoice') 
        .then(function (response) {
        console.log ('response',response.data);
        })
        .catch(function (error) {
        console.log(error);
        })
        .then(function () {
        });
    }

    render() {
        const {type, data} = this.props;

        return (
            <>
            <div className={styles.container}>
                <h3 className={styles.title}> { type ==='customers' ?  'Customers Table' : 'Invoice Table'} </h3>
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
                                { type ==='customers' ?  data.map((item)=>
                                (
                                <tr>
                                    {Object !==null && Object.keys(item).map((key)=>(
                                        <td>{item[key]}</td>
                                ) )} 
                                </tr>  
                                )): data.map((item)=>
                                (
                                <tr>
                                    {Object !==null && Object.keys(item).map((key)=>(
                                        <td>{item[key]}</td>
                                       )
                                     )} 
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