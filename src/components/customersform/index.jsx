import React, { useEffect, useState } from 'react'
import styles from "./styles.module.scss";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiBillFill} from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";


function Formvalidate() {
    const [isValid, setIsValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const emailRegex = /\S+@\S+\.\S+/;

    const validateEmail = (event) => {
        const email = event.target.value; 
        console.log(email)
        if (emailRegex.test(email) || email==='')  {
            setIsValid(true);
            setErrorMessage('');
        } else {
            setIsValid(false);
            setErrorMessage('Please enter a valid email!')
        }
    };

    const [isName, setIsName] = useState(false);
    const [messages, setMessages] = useState('');
    //const letterRegex = /^(?:[A-Za-z]+|\d+)$/;
    const letterRegex = /^[a-zA-Z ğüşöçıİĞÜŞÖÇ]*$/;
    const validateWord = (event) => {
        const word = event.target.value;
        console.log(' word', word);
        if (letterRegex.test(word) || word==='') {
            setIsName(true);
            setMessages('');
        }
        else {

            setIsName(false);
            setMessages('Please enter a valid name!');
        }
    };

    const [isSurname, setIsSurname] = useState(false);
    const [SurnameError, setSurnameError] = useState('');
    const WordRegex = /^[a-zA-Z ğüşöçıİĞÜŞÖÇ]*$/;

    const SnameError = (event) => {
        const word = event.target.value;
        console.log(' word', word);
        if (WordRegex.test(word)) {
            setIsSurname(true);
            setSurnameError('');
        }
        else {
            setIsSurname(false);
            setSurnameError('Please enter a valid Surname!');
        }
    };


    const [isNumber, setIsNumber] = useState(false);
    const [NumberError, setNumberError] = useState('');
    const NumberRegex = /^[0-9]+|\d+$/;

    const valideteNumber = (event) => {
        const number = event.target.value;
        console.log(number)
        if (NumberRegex.test(number)) {
            setIsNumber(true);
            setNumberError('');
        }
        else {
            setIsNumber(false);
            setNumberError('Please enter number')
        }
        
    }
    const [isAmaount, setIsAmount] = useState(false);
    const [AmountError, setAmountError] = useState('');
    const AmountRegex = /^[0-9]+|\d+$/;

    const valideteAmount = (event) => {
        const number = event.target.value;
        console.log(number)
        if (AmountRegex.test(number)) {
            setIsAmount(true);
            setAmountError('');
        }
        else {
            setIsAmount(false);
            setAmountError('Please enter number')
        }
    }



    const emailIcon =
    {
        color: 'black',
        float: 'left',
        border: '1px solid',
        height:'5%' ,
        width:'6%',
        
    };
    const nameIcon =
    {
        float: 'left',
        border: '1px solid',
        margin: '0 auto',
        height:'5%' ,
        width:'6%'

    };
    const billIcon =
    {
        float: 'left',
        border: '1px solid',
        margin: '0 auto',
        height:'5%' ,
        width:'6%'
    }
    const amountIcon=
    {
        float:'left',
        margin: '0 auto',
        border: '1px solid',
        height:'5%' ,
        width:'6%'
    };
    const lastName=
    {
        float:'left',
        margin: '0 auto',
        border: '1px solid',
        height:'5%' ,
        width:'6%'
    }
    const ProductIcon=
    {
        float:'left',
        border: '1px solid',
        height:'5%' ,
        width:'6%' 

    }

    return (
        <div className={styles.container}>
            <h3>customers login</h3>
            <form className={styles.userForm}>
                <div className={styles.formField}>
                    <label className={styles.formName}>First name:</label>
                    <div className={styles.iconForm}>
                        <BsFillPeopleFill  class={styles.icons}/>
                    </div>
                    <input className={styles.formInput} type="text" id="fname" name="fname" placeholder="First Name" onChange={validateWord} ></input>
                    <div className={styles.messageField}>{messages}</div>
                </div>

                <div className={styles.formField}>
                    <label className={styles.formName}>Last name: </label>
                    <div className={styles.iconForm}>
                        <BsFillPeopleFill  class={styles.icons}/>
                    </div>
                    <input className={styles.formInput} type="text" id="lname" name="lname" placeholder="Last Name" onChange={SnameError}></input>
                    <div className={styles.messageFieldRight}>{SurnameError}</div>
                </div>

                <div className={styles.formField}>
                    <label className={styles.formName}>E-Mail:</label>
                    <div className= {styles.iconForm}>
                        <AiOutlineMail  class={styles.icons} />
                    </div>
                    <input className={styles.formInput} type="text" id="mail" placeholder="E-mail" onChange={validateEmail}></input>
                    <div className={styles.messageField}>{errorMessage}</div>
                </div>

                <div className={styles.formField}>
                    <label className={styles.formName}>Bill no:</label>
                    <div className={styles.iconForm}>
                    <RiBillFill  class={styles.icons} />
                    </div>
                    <input className={styles.formInput} type="text" id="fname" name="fname" placeholder="Bill No" onChange={valideteNumber}></input>
                    <div className={styles.messageFieldRight}>{NumberError}</div>
                </div>

                <div className={styles.formField}>
                    <label className={styles.formName}>Amount:</label>
                    <div className={styles.iconForm}>
                    <AiOutlineDollar class={styles.icons}/>
                    </div>
                    <input className={styles.formInput} type="text" id="lname" name="lname" placeholder="Amount" onChange={valideteAmount}></input>
                    <div className={styles.messageField}>{AmountError}</div>
                </div>

                <div className={styles.formField}>
                    <label className={styles.formName}>Product Name:</label>
                    <div className={styles.iconForm}>
                        <MdProductionQuantityLimits  class={styles.icons}/>
                    </div>
                    <input className={styles.formInput} type="text" id="mail" placeholder="Product Name"></input>
                </div>
                <div className={styles.formButton}>
                    <input className={styles.formSubmit} type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
    )
}
export default Formvalidate;
