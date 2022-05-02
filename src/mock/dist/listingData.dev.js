"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invoiceInfos = exports.userInfos = exports.headNames = void 0;
var headNames = [{
  userHead: ['First Name', 'Last Name', 'E-Mail'],
  invoiceHead: ['billNo', 'amount', 'productName', 'status']
}];
exports.headNames = headNames;
var userInfos = [{
  usersId: 1,
  usersName: 'bahar',
  usersSurname: 'danis',
  usersEmail: 'bahardanis'
}, {
  usersId: 2,
  usersName: 'Davis',
  usersSurname: 'Smith',
  usersEmail: 'Davis@Davis.com'
}, {
  usersId: 3,
  usersName: 'Evans',
  usersSurname: 'Johnson',
  usersEmail: 'Evans@ Evans.com'
}, {
  usersId: 4,
  usersName: 'Frank',
  usersSurname: 'Williams',
  usersEmail: 'Frank@Frank.com'
}];
exports.userInfos = userInfos;
var invoiceInfos = [Array()[('Tr001', '200', 'Usb Disc', 'Confirmed')]
/*,
 {
 billNo:'Tr002',
 amount:'100',
 productName:'Usb Cable',
 Status:'Unconfirmed'
 },
 {
     billNo:'Tr003',
     amount:'300',
     productName:'Headphone',
     Status:'confirmed'
 },
 {
     billNo:'Tr004',
     amount:'500',
     productName:'Laptop charger',
     Status:'unCofirmeds'
 }*/
];
exports.invoiceInfos = invoiceInfos;