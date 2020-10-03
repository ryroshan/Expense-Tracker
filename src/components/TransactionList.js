import React, {useContext} from 'react'
import { Transaction } from './Transaction';

import {GlobalContext} from '../context/GlobalState';

 const TransactionList = () => {
    const {transictions} = useContext(GlobalContext);
   
    return (
       <>
    <h3>History</h3>
         <ul className="list">
            {transictions.map(transiction => (<Transaction key={transiction.id} transiction={transiction}/>))}   
         </ul>
       </>
    
    )
}

export default TransactionList;
