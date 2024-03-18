import { useState } from 'react';
import './CostForm.css';

export default function CostForm(props) {
  const [inputName, setInputName] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  const changeNameHandler = (event) => {
    setInputName(event.target.value);
  };

  const changeAmountHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const changeDateHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costData);
    setInputName('');
    setInputAmount('');
    setInputDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label htmlFor="">Название:</label>
          <input type="text" value={inputName} onChange={changeNameHandler} />
        </div>

        <div className="new-cost__control">
          <label htmlFor="">Сумма:</label>
          <input
            type="number"
            value={inputAmount}
            onChange={changeAmountHandler}
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="new-cost__control">
          <label htmlFor="">Дата:</label>
          <input type="date" value={inputDate} onChange={changeDateHandler} />
        </div>

        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
          <button type="button" onClick={props.onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </form>
  );
}
