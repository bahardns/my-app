import  styles  from "./styles.module.scss";
import React, { Component } from 'react';
import {invoiceInfos,headNames} from '../../mock/listingData';

class Invoice extends Component {
    // constructor() {
    //     super();
    //     this.state={
    //             bill:[
    //                 {usersId:1, usersName:"bahar", usersSurname:"danis", usersEmail:"bahardanis"}  ,
    //                 {usersId:1, usersName:"buse", usersSurname:"karakas", usersEmail:"busekarakas"}  
    //         ]
    //         }
    // }
    render() {
        return (

                    <div className={styles.container}>
                         <h3>invoice table</h3>
                            <table className={styles.invoicetable}>
                            <thead className={styles.thead}>
                            {
                                headNames.map((item)=>(
                                    <tr className={styles.customer}>
                                        {item.invoiceHead.map((elem) => (
                                            <th>{elem}</th>
                            ))}
                                    </tr>
                                ))
                            }
                                </thead>
                            <tbody>
                                {invoiceInfos.map((item)=>(
                                    <tr>
                                    {Object.keys(item).map((key)=>(
                                           <td>{item[key]}</td>
                                        ))}
                                    </tr>
                                        
                                ))}           
                            </tbody>
                        </table>
                            
                </div>
            
        );
      
    }
    
}

export default Invoice;