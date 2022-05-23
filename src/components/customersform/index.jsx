import React, {useState, useEffect } from 'react'
import axios from 'axios';
import styles from "./styles.module.scss";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiBillFill} from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import InfoModal from './../modal/index.jsx'
// import { Button } from 'bootstrap';

function FormValidate({ datas }) {

    const [formValues, setFormValues] = useState({
        firstName : localStorage.getItem('accountingLocalStorage') ? JSON.parse(localStorage.getItem('accountingLocalStorage')).firstName : '',
        surName : localStorage.getItem('accountingLocalStorage') ? JSON.parse(localStorage.getItem('accountingLocalStorage')).surName : '',
        email : localStorage.getItem('accountingLocalStorage') ? JSON.parse(localStorage.getItem('accountingLocalStorage')).email : '',
        billNo : localStorage.getItem('accountingLocalStorage') ? JSON.parse(localStorage.getItem('accountingLocalStorage')).billNo : '',
        amount :localStorage.getItem('accountingLocalStorage') ? JSON.parse(localStorage.getItem('accountingLocalStorage')).amount : '',
        productName :localStorage.getItem('accountingLocalStorage') ? JSON.parse(localStorage.getItem('accountingLocalStorage')).productName : '',
    })

    let now = new Date().getTime(); 
    const [errorModal, setErrorModal]=useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [clickMessage, setClickMessage] = useState('');
    const [AmountError, setAmountError] = useState('');
    const [messages, setMessages] = useState('');
    const [SurnameError, setSurnameError] = useState('');
    const [NumberError, setNumberError] = useState('');
    const [customerId, setCustomerId] = useState({ 
        id: '',
        isExist:false
    });

    const emailRegex = /\S+@\S+\.\S+/;
    const AmountRegex = /^[0-9]+|\d+$/;
    const letterRegex = /^[a-zA-Z ğüşöçıİĞÜŞÖÇ]*$/;
    const WordRegex = /^[a-zA-Z ğüşöçıİĞÜŞÖÇ]*$/;
    const NumberRegex = /^[0-9]+|\d+$/;
    
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

    const saveInvoice = (isExist,existId) => {
        
            const {billNo, amount, productName} = formValues;
            console.log('existId',existId)
            axios.post('http://localhost:3000/invoice', {
               id: '',
               billNo, 
               amount,
               productName,
               status: "confirmed",
               userID: existId.id ? existId.id : 'kek'
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

    const saveCustomer = () => {
        const {firstName, surName, email} = formValues;
        
        axios.post('http://localhost:3000/customers', { 
           id:'',
           firstName,
           surName,
           email,
        })
        .then(function (response) {
          console.log('customers response', response.data);
          axios.get(`http://localhost:3000/customers?email=${formValues.email}`) 
            .then(function (response) {
                console.log ('-----response',response.data[0].id);
                customerId.id = response.data[0].id;
            })
            .catch(function (error) {
            console.log(error);
            })
        })
        .catch(function (error) {
          console.error(error);
        });

    }
    
    const submitControl = async(e)=>{
        if(!formValues.firstName || !formValues.surName || !formValues.email || !formValues.billNo || !formValues.amount || !formValues.productName){
            setClickMessage(false) 
        }
        else{
            setClickMessage(true)
        }
    }
    
     const handleSubmit = async (e) => {
        e.preventDefault();

        const {firstName, surName, email, billNo, amount, productName} = formValues;
        const buttonTime = new Date().getTime();
        const expiry = 5000;

        let timer = now-buttonTime;

        const handleButton = {
            savedTime:buttonTime
        }

        if(timer > expiry){
        //   localStorage.removeItem('accountingLocalStorage');
        }

        if(!firstName || !surName || !email || !billNo || !amount || !productName){
            setErrorModal(true) 
        }
        else{
            const axios = require('axios');
           
            datas.length>0 && datas.map((item)=> {
                console.log('email',item.email)
                console.log('formValues.email',formValues.email)
                if(item.email === formValues.email ){
                     customerId.id = item.id;
                     customerId.isExist=true;
                     console.log("customerid.isexist",customerId.isExist)
                }else if (customerId.isExist === false && formValues.email!== undefined && formValues.email !== ''){
                    customerId.isExist=false;
                    console.log("farklılar")
                }
               
            })
            isCustomerExist();
           
            // await axios.post('http://localhost:3000/records', {
            //     id,
            //     email,
            //     invoiceId,
            //     billNo,
            //     amount,
            //     status,
            // })
            // .then(function (response) {
            //     console.log('invoice response', response.data);
            //     if (!response.status===200){
            //       console.log('hata')
            //     }
            //   })
            //  .catch(function (error) {
            //   console.error(error);
            // }); 
        }
    }
         
    
    const isCustomerExist =async (e) => {
        console.log('----isExist',customerId.isExist) 
         if (customerId.isExist){
                console.log('bu emailde birisi bulunmaktadır')
                saveInvoice(customerId.isExist, customerId);
            }else{
                console.log('kullanıcı yok')
                saveCustomer();
                    setTimeout(() => {
                        saveInvoice(customerId.isExist,customerId);
                    }, 200);
            }
    }

    console.log('setIsExist', customerId.isExist)
    useEffect(() => {
        localStorage.clear();

    },[]);

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Please fill the form below</h3>
            <form className={styles.userForm} onSubmit={(e)=> handleSubmit(e)} autocomplete="off">
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
                    <input className={styles.formInput} type="text" id="fname" name="fname" maxLength={5} placeholder="Bill No" value={formValues.billNo} onChange={((e)=> handleValuesChange(e,'billNo'))}></input>
                    <div className={styles.messageFieldRight}>{NumberError}</div>
                </div>
                <div className={styles.formField}>
                    <label className={styles.formName}><span>*</span> Amount:</label>
                    <div className={styles.iconForm}>
                        <AiOutlineDollar class={styles.icons}/>
                    </div>
                    <input className={styles.formInput} type="text" id="lname" name="lname"  maxLength={3}  placeholder="Amount"  value={formValues.amount}  onChange={(e)=> handleValuesChange(e,'amount')}></input>
                    <div className={styles.messageField}>{AmountError}</div>
                </div>
                <div className={styles.formField}>
                    <label className={styles.formName}><span>*</span> Product Name:</label>
                    <div className={styles.iconForm}>
                        <MdProductionQuantityLimits  class={styles.icons}/>
                    </div>
                    <input className={styles.formInput} type="text" id="mail" placeholder="Product Name" value={formValues.productName}  onChange={((e)=> handleValuesChange(e,'productName'))}></input>
                </div>
                <div className={styles.formButton}>
                    <input className={styles.formSubmit} type="submit" value="Submit" onSubmit={((e)=> submitControl(e,'firstname'))}></input>
                </div>
            </form>
            <InfoModal isOpen={errorModal} closeModal={()=> setErrorModal(false) }></InfoModal>
            <InfoModal isOpen={clickMessage} closeModal={()=> setClickMessage(false) }></InfoModal>

        </div>
    )
}
export default FormValidate;
