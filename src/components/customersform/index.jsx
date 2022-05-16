import React, {useState, useEffect } from 'react'
import axios from 'axios';
import styles from "./styles.module.scss";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiBillFill} from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import InfoModal from './../modal/index.jsx'

function Formvalidate() {
    
    const [formValues, setFormValues] = useState({
        firstName : localStorage.getItem('accountingLocalStorage') ? JSON.parse(localStorage.getItem('accountingLocalStorage')).firstName : '',
        surName : localStorage.getItem('accountingLocalStorage') ? JSON.parse(localStorage.getItem('accountingLocalStorage')).surName : '',
        email : localStorage.getItem('accountingLocalStorage') ? JSON.parse(localStorage.getItem('accountingLocalStorage')).email : '',
        billNo : localStorage.getItem('accountingLocalStorage') ? JSON.parse(localStorage.getItem('accountingLocalStorage')).billNo : '',
        amount :localStorage.getItem('accountingLocalStorage') ? JSON.parse(localStorage.getItem('accountingLocalStorage')).amount : '',
        productName :localStorage.getItem('accountingLocalStorage') ? JSON.parse(localStorage.getItem('accountingLocalStorage')).productName : '',
        // firstName :  'buse',
        // surName : 'bb',
        // email : 'bb@bb.com',
        // billNo : '300',
        // amount :'400',
        // productName :'buse',
        //firstName: localStorage.getItem('accountingLocalStorage') ? JSON.parse(localStorage.getItem('accountingLocalStorage')).firstName : '',
    })
    
    let now = new Date().getTime(); 
    const [errorModal, setErrorModal]=useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [AmountError, setAmountError] = useState('');
    const [messages, setMessages] = useState('');
    const [SurnameError, setSurnameError] = useState('');
    const [NumberError, setNumberError] = useState('');

    const emailRegex = /\S+@\S+\.\S+/;
    const AmountRegex = /^[0-9]+|\d+$/;
    const letterRegex = /^[a-zA-Z ğüşöçıİĞÜŞÖÇ]*$/;
    const WordRegex = /^[a-zA-Z ğüşöçıİĞÜŞÖÇ]*$/;
    const NumberRegex = /^[0-9]+|\d+$/;

    // localisim = firstName
    // firstName,
    // surName
    
    const data=
    {
      savedTime:'',
      data:
      {
        firstName:'',
        surName:'',
        email:'',
        billNo:'',
        productName:'',
        amount:'',
      }
    }

    const validateEmail = (event) => {
        const email = event.target.value; 
        if (emailRegex.test(email) || email==='')  {
            setErrorMessage('');
        } else {
            setErrorMessage('Please enter a valid email!')
        }
    };
   
    const validateWord = (event) => {
        const word = event.target.value;
        if (letterRegex.test(word) || word==='') {
            setMessages('');
        }
        else {
            setMessages('Please enter a valid name!');
        }
    };

    const surnameError = (event) => {
        const word = event.target.value;
        if (WordRegex.test(word)) {
            setSurnameError('');
        }
        else {
            setSurnameError('Please enter a valid Surname!');
        }
    };

    const valideteNumber = (event) => {
        const number = event.target.value;
        if (NumberRegex.test(number)) {

            setNumberError('');
        }
        else {
            setNumberError('Please enter number')
        }
        
    }
    
    const valideteAmount = (event) => {
        const number = event.target.value;
        if (AmountRegex.test(number)) {
            setAmountError('');
        }
        else {
            setAmountError('Please enter number')
        }
    }

    function handleValuesChange(e, type){
        // eslint-disable-next-line default-case
        switch (type) {
            case "firstName":
               validateWord(e)
                    setFormValues({
                        ...formValues,
                        [type]: e.target.value,
                      });
                      data.data.firstName = e.target.value;
                break;
            case "surName":
                surnameError(e)
                    setFormValues({
                        ...formValues,
                        [type]: e.target.value,
                      });    
                      data.data.surName = e.target.value;
                
                break;
            case "email":
                validateEmail(e)
                    setFormValues({
                        ...formValues,
                        [type]: e.target.value,
                      }); 
                      data.data.email = e.target.value;
                
                break;
            case "billNo":
                valideteNumber(e)
                    setFormValues({
                        ...formValues,
                        [type]: e.target.value,
                      });
                      data.data.billNo = e.target.value;
                
            break;
            case "amount":
                valideteAmount(e)
                    setFormValues({
                        ...formValues,
                        [type]: e.target.value,
                      });
                      data.data.amount = e.target.value;
                break;
            case "productName":
               validateWord(e)
                    setFormValues({
                        ...formValues,
                        [type]: e.target.value,
                      });
                      data.data.productName = e.target.value;
                
            break;     
        } 
        localStorage.setItem('accountingLocalStorage', JSON.stringify(prepareData))
    };

    const prepareData = {
        data: formValues,
        savedTime: now // burası hesaplanacak 
    }

     const handleSubmit = async (e) => {
        e.preventDefault();

        const {firstName, surName, email, billNo, amount, productName} = formValues;
        console.log('form values', formValues)
        const buttonTime = new Date().getTime();
        const expiry = 5000;

        let timer = now-buttonTime;

        const handleButton = {
            savedTime:buttonTime
        }

        if(timer > expiry){
        //   localStorage.removeItem('accountingLocalStorage');
        }

        if(!formValues.firstName || !formValues.surName || !formValues.email || !formValues.billNo || !formValues.amount || !formValues.productName){
            setErrorModal(true)
            console.log('boş alan bırakılmamalı') 
        }
        else{
            console.log('Tebrikler')
            const axios = require('axios');

            await axios.post('http://localhost:3000/customers', { 
                firstName,
                surName,
                email
            })
            .then(function (response) {
              console.log('customers response', response.data);
            })
            .catch(function (error) {
              console.error(error);
            });
    
            await axios.post('http://localhost:3000/invoice', {
                billNo, 
                amount,
                productName,
                status: "confirmed"
            })
            .then(function (response) {
                console.log('invoice response', response.data);
                setFormValues({
                    firstName:'',
                    surName:'',
                    email:'',
                    billNo:'',
                    amount:'',
                    productName:''
                  })
                if (!response.status===200){
                  console.log('hata')
              }
              })
             .catch(function (error) {
              console.error(error);
            });  
        }
    }
          
    const handleFetch = async()=>
    {
        axios.get('http://localhost:3000/customers') 
        .then(function (response) {
        console.log ('response',response.data);
        })
        .catch(function (error) {
        console.log(error);
        })
        .then(function () {
        });


        // fetch('http://localhost:3000/posts/1')
        // .then(response => response.json())
        // .catch(error => console.error('Error:', error))
        // .then(response => console.log('Success:', JSON.stringify(response)));
   
        //////////////
        // fetch('http://localhost:3000/posts/', {
        //     method: “POST”,
        //     headers: {
        //     “Content-Type”: “application/json”,
        //     },
        //     body: JSON.stringify(data),
        //     })
        //     .then(response => response.json())
        //     .catch(error => console.error(‘Error:’, error))
        //     .then(response => console.log(‘Success:’, JSON.stringify(response)));
    }
    //console.log('formValues', formValues)

    useEffect(() => {
        localStorage.clear();
         //handleFetch(); 
         //localStorage.setItem('accountingLocalStorage', JSON.stringify(prepareData));
    },[]);

    return (
        <div className={styles.container}>
            <h3>customers login</h3>
            <form className={styles.userForm} onSubmit={(e)=> handleSubmit(e)}>
                <div className={styles.formField}>
                    <label className={styles.formName}><span>*</span> First name:</label>
                        <div className={styles.iconForm}>
                            <BsFillPeopleFill  class={styles.icons}/>
                            <input className={styles.formInput} type="text" id="fname" name="fname" placeholder="First Name" value={formValues.firstName} onChange={(e)=> handleValuesChange(e,'firstName')}></input>
                        <div className={styles.messageField}>{messages}</div>
                        </div>
                </div>
                <div className={styles.formField}>
                    <label className={styles.formName}><span>*</span> Last name: </label>
                    <div className={styles.iconForm}>
                        <BsFillPeopleFill  class={styles.icons}/>
                    </div>
                    <input className={styles.formInput} type="text" id="lname" name="lname" placeholder="Last Name" value={formValues.surName} onChange={(e)=> handleValuesChange(e,'surName')}></input>
                    <div className={styles.messageFieldRight}>{SurnameError}</div>
                </div>
                <div className={styles.formField}>
                    <label className={styles.formName}><span>*</span>E-Mail:</label>
                    <div className= {styles.iconForm}>
                        <AiOutlineMail  class={styles.icons} />
                    </div>
                    <input className={styles.formInput} type="text" id="mail" placeholder="E-mail" value={formValues.email} onChange={(e)=> handleValuesChange(e,'email')}></input>
                    <div className={styles.messageField}>{errorMessage}</div>
                </div>
                <div className={styles.formField}>
                    <label className={styles.formName}><span>*</span>Bill no:</label>
                    <div className={styles.iconForm}>
                        <RiBillFill  class={styles.icons} />
                    </div>
                    <input className={styles.formInput} type="text" id="fname" name="fname" placeholder="Bill No" value={formValues.billNo} onChange={((e)=> handleValuesChange(e,'billNo'))}></input>
                    <div className={styles.messageFieldRight}>{NumberError}</div>
                </div>
                <div className={styles.formField}>
                    <label className={styles.formName}><span>*</span> Amount:</label>
                    <div className={styles.iconForm}>
                        <AiOutlineDollar class={styles.icons}/>
                    </div>
                    <input className={styles.formInput} type="text" id="lname" name="lname" placeholder="Amount" value={formValues.amount}  onChange={(e)=> handleValuesChange(e,'amount')}></input>
                    <div className={styles.messageField}>{AmountError}</div>
                </div>
                <div className={styles.formField}>
                    <label className={styles.formName}><span>*</span> Product Name:</label>
                    <div className={styles.iconForm}>
                        <MdProductionQuantityLimits  class={styles.icons}/>
                    </div>
                    <input className={styles.formInput} type="text" id="mail" placeholder="Product Name" value={formValues.productName} onChange={((e)=> handleValuesChange(e,'productName'))}></input>
                </div>
                <div className={styles.formButton}>
                    <input className={styles.formSubmit} type="submit" value="Submit"></input>
                </div>
            </form>
            <InfoModal isOpen={errorModal} closeModal={()=> setErrorModal(false) }></InfoModal>
        </div>
    )
}
export default Formvalidate;
