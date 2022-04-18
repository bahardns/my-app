import  styles  from "./styles.module.scss";
import React, { Component } from 'react';

class Invoice extends Component {

    render() {
        return (
                    <div className={styles.container}>
                         <h3>invoice table</h3>
                            <table className={styles.invoicetable}>
                                <tr className={styles.customer}>
                                    <th>Bill No</th>
                                    <th>Amount</th>
                                    <th>Product Name</th>
                                    <th>status</th>
                                </tr>
                                <tr>
                                    <td>Tr001</td>
                                    <td>200</td>
                                    <td>usb disc</td>
                                    <td>confirmed</td>
                                </tr>
                                <tr>
                                    <td>tr002</td>
                                    <td>100</td>
                                    <td>usb cable</td>
                                    <td>confirmed</td> 
                                </tr>
                                <tr>
                                    <td>tr003</td>
                                    <td>150</td>
                                    <td>headphone</td>
                                    <td>confirmed</td>
                                </tr>
                                <tr>
                                    <td>tr004</td>
                                    <td>300</td>
                                    <td>laptop charger</td>
                                    <td>unconfirmed</td>
                                </tr>
                            </table>
                </div>
        );
    }
}

export default Invoice;