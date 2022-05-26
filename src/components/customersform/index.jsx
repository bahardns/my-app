import React, {useState, useEffect } from 'react'
import axios from 'axios';
import styles from "./styles.module.scss";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiBillFill} from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import InfoModal from './../modal/index.jsx';
import classnames from 'classnames';
// import { Button } from 'bootstrap';

//local stroge değerlerinin okunduğu alan
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
    const [isConfirmed, setIsConfirmed]=useState({
        status:null
    });
    const [messageText, setMessageText]=useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [AmountError, setAmountError] = useState('');
    const [messages, setMessages] = useState('');
    const [SurnameError, setSurnameError] = useState('');
    const [NumberError, setNumberError] = useState('');
    const [customerId, setCustomerId] = useState({ 
        id: '',
        isExist:false
    });

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    const AmountRegex = /^[0-9]+|\d+$/;
    const letterRegex = /^[a-zA-Z ğüşöçıİĞÜŞÖÇ]*$/;
    const WordRegex = /^[a-zA-Z ğüşöçıİĞÜŞÖÇ]*$/;
    const NumberRegex = /^[0-9]+|\d+$/;
    

    const modalControl = classnames ({
        [styles.formField] : true,
        [styles.blurFormField] : errorModal,
    })

    const limit = 500; //kullanıcı bakiyesi
    let sum = 0;      //toplam değeri


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
    
        //validasyon işlemleri
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
//buraya bak
//localstroge data statei ile doldurulan değişken 
    const prepareData = {
        data: formValues,
        savedTime: now  
    }
    //statu hesaplama okuma
    const calculateStatus = (isExist,existId) => {
        
            const {amount} = formValues;

            axios.get(`http://localhost:3000/invoice?userID=${existId.id}`,{
             })
             .then(function (response) {
                if(response.data.length > 0) {
                    response.data.map((item) => {                        
                      sum = Number(item.amount) + sum ;
                    })
                    sum = Number(amount) + sum ;
                    console.log('sum',sum)
                    if(limit - sum >= 0){
                        isConfirmed.status=true;
                    }
                    else{
                        isConfirmed.status=false;
                    }
                } else if(response.data.length === 0){
                    sum = 0 ;                   
                    sum = Number(amount);
                      console.log('sum',sum)  
                      if(limit - sum >= 0){
                        isConfirmed.status=true;
                      }
                      else{
                        isConfirmed.status=false;
                      }
                }
                if (!response.status===200){
                  console.log('hata')
              }
              })
             .catch(function (error) {
              console.error(error);
            });  
            setTimeout(() => {
                saveInvoice(isExist,existId);
            }, 200);
    }
        //kullanıcı kaydı oluşturulur get edildikten sonra
      const saveInvoice = (isExist,existId) => {
        const {billNo, amount, productName} = formValues;

        axios.post('http://localhost:3000/invoice', {
               id: '',
               billNo, 
               amount,
               productName,
               status: isConfirmed.status ? 'Confirmed' : 'Unconfirmed',
               userID: existId.id ? existId.id : '-'
           })
           .then(function (response) {
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
          axios.get(`http://localhost:3000/customers?email=${formValues.email}`) 
            .then(function (response) {
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
   
    //onchange bağlı olan fonksiyon. 
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
            setMessageText('Formdaki zorunlu alanları doldurunuz.');
            setErrorModal(true);
        }
        else{
            const axios = require('axios');

            setMessageText('Form başarıyla gönderildi');
            setErrorModal(true);

            datas.length>0 && datas.map((item)=> {
                if(item.email === formValues.email ){
                     customerId.id = item.id;
                     customerId.isExist=true;
                }else if (customerId.isExist === false && formValues.email!== undefined && formValues.email !== ''){
                    customerId.isExist=false;
                }
               
            })
            isCustomerExist();
        }
    }
         //buraya bak
    
    const isCustomerExist =async (e) => {
         if (customerId.isExist){
            calculateStatus(customerId.isExist, customerId);
            }else{
                saveCustomer();
                setTimeout(() => {
                    calculateStatus(customerId.isExist,customerId);
                }, 200);
            }
    }

    useEffect(() => {
        localStorage.clear();
    },[isConfirmed.status]);

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Please fill the form below</h3>
            <form className={styles.userForm} onSubmit={(e)=> handleSubmit(e)} autocomplete="off">
                <div className={modalControl}>
                     <label className={styles.formName}><span>*</span> First name:</label>
                        <div className={styles.iconForm}>
                            <BsFillPeopleFill  class={styles.icons}/>
                            <input className={styles.formInput} type="text" id="fname" name="fname" placeholder="First Name" value={formValues.firstName} onChange={(e)=> handleValuesChange(e,'firstName')}></input>
                        <div className={styles.messageField}>{messages}</div>
                        </div>
                </div>
                <div className={modalControl}>
                    <label className={styles.formName}><span>*</span> Last name: </label>
                    <div className={styles.iconForm}>
                        <BsFillPeopleFill  class={styles.icons}/>
                    </div>
                    <input className={styles.formInput} type="text" id="lname" name="lname" placeholder="Last Name" value={formValues.surName} onChange={(e)=> handleValuesChange(e,'surName')}></input>
                    <div className={styles.messageFieldRight}>{SurnameError}</div>
                </div>
                <div className={modalControl}>
                    <label className={styles.formName}><span>*</span>E-Mail:</label>
                    <div className= {styles.iconForm}>
                        <AiOutlineMail  class={styles.icons} />
                    </div>
                    <input className={styles.formInput} type="text" id="mail" placeholder="E-mail" value={formValues.email} onChange={(e)=> handleValuesChange(e,'email')}></input>
                    <div className={styles.messageField}>{errorMessage}</div>
                </div>
                <div className={modalControl}>
                    <label className={styles.formName}><span>*</span>Bill no:</label>
                    <div className={styles.iconForm}>
                        <RiBillFill  class={styles.icons} />
                    </div>
                    <input className={styles.formInput} type="text" id="fname" name="fname" maxLength={5} placeholder="Bill No" value={formValues.billNo} onChange={((e)=> handleValuesChange(e,'billNo'))}></input>
                    <div className={styles.messageFieldRight}>{NumberError}</div>
                </div>
                <div className={modalControl}>
                    <label className={styles.formName}><span>*</span> Amount:</label>
                    <div className={styles.iconForm}>
                        <AiOutlineDollar class={styles.icons}/>
                    </div>
                    <input className={styles.formInput} type="text" id="lname" name="lname"  maxLength={3}  placeholder="Amount"  value={formValues.amount}  onChange={(e)=> handleValuesChange(e,'amount')}></input>
                    <div className={styles.messageField}>{AmountError}</div>
                </div>
                <div className={modalControl}>
                    <label className={styles.formName}><span>*</span> Product Name:</label>
                    <div className={styles.iconForm}>
                        <MdProductionQuantityLimits  class={styles.icons}/>
                    </div>
                    <input className={styles.formInput} type="text" id="mail" placeholder="Product Name" value={formValues.productName}  onChange={((e)=> handleValuesChange(e,'productName'))}></input>  
                </div>
                <div className={styles.formButton}>
                    <input className={styles.formSubmit} type="submit" value="Submit"></input>
                </div>
            </form>
            <InfoModal isOpen={errorModal} closeModal={()=> setErrorModal(false) } message={messageText}></InfoModal>
        
        </div>
    )
}
export default FormValidate;
