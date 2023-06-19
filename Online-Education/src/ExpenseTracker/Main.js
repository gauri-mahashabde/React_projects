import React from 'react'
import "./main.css";
import Header from './Header'
import Balance from './Balance'
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';

function Main() {
  return (
    <>
    <Header/>
    <div className='container'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
    </div>
    </>
    
  )
}

export default Main