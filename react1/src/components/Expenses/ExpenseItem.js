import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
const ExpenseItem = (props) => {
	useState();
let title = props.title;
	const clickHandler = () => {
      title = 'Updated!';
	console.log(title);
};
  return (
   <Card className='expense-item'>
    <ExpenseDate date={props.date} />
    <div className="expense-item__description">
    <h2>{title}</h2>
    <div className="expense-item__price">{props.amount}</div>
    </div>
    <button onClick={clickHandler}>Change Title</button>
   </Card>
  );   
}
export default ExpenseItem;