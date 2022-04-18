import  styles  from "./styles.module.scss";
import React, { Component } from 'react';
class Customers extends Component {

    render() {
        return (
            <>
            <div className={styles.container}>
                <h3>customers table</h3>
                        <table  className={styles.customersTable}>
                            <tr>
                                <th>first name</th>
                                <th>last name</th>
                                <th>E-mail</th>
                            </tr>
                            <tr>
                                <td>bahar</td>
                                <td>daniş</td>
                                <td>22</td>
                                </tr>
                            <tr>
                                <td>buse</td>
                                <td>karakaş</td>
                                <td>23</td> 
                            </tr>
                            <tr>
                                <td>Ceren</td>
                                <td>daniş</td>
                                <td>20</td></tr>
                                <tr>
                                <td>john</td>
                                <td>doe</td>
                                <td>25</td>
                                </tr>
                            </table> 
                    </div>    
                 </> 
            
        );
    }
}

export default Customers;