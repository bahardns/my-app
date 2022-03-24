import  styles  from "./styles.module.scss";
import React, { Component } from 'react';
class Table extends Component {
    render() {
        return (
            <>
                <div className={styles.container}>
                    <h3>customers login</h3>
                    <form className={styles.userForm}>  
                    <div className={styles.formField}>
                        <label className={styles.formName}>First name:</label>
                        <input  className={styles.formInput} type="text" id="fname" name="fname" ></input>
                    </div>             
                     <div className={styles.formField}>
                        <label className={styles.formName}>Last name: </label>
                        <input  className={styles.formInput} type="text" id="lname" name="lname" ></input>
                    </div>            
                    <div className={styles.formField}>
                        <label className={styles.formName}>E-Mail:</label>
                        <input className={styles.formInput} type="text" id="mail"></input>
                    </div>       
                    <div className={styles.formField}>
                        <label className={styles.formName}>Bill no:</label>
                        <input   className={styles.formInput}type="text" id="fname" name="fname"></input>
                    </div>             
                     <div className={styles.formField}>
                        <label className={styles.formName}>Amount:</label>
                        <input className={styles.formInput} type="text" id="lname" name="lname" ></input>
                    </div>            
                    <div className={styles.formField}>
                        <label className={styles.formName}>Product Name:</label>
                        <input  className={styles.formInput} type="text" id="mail"></input>
                    </div>         
                    <div className={styles.formField}>  
                        <input  className={styles.formInput} type="submit" value="Submit"></input>
                    </div>     
                    </form>
                    <h3>customers table</h3>
                    <table  className={styles.customersTable}>
                        <tr className={styles.tr}>
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
          </> 
        );
        
    }
}

export default Table;