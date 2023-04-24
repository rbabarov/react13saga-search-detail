import React from 'react';
import gif from '../load.gif';
import { useDispatch } from 'react-redux';
import { changeField } from '../actions/actionCreator';
import { detailChoice } from '../actions/actionCreator';

export const ShowChoice = ({ search_result }) => {
  const { item, loading, error } = search_result;
  const dispatch = useDispatch();
  
  function reloadSearch() {
    const string = document.querySelector('.ipt').value;
    dispatch(changeField(string));
  }
  function choiceService(evt) {
    const { id } = evt.target;
    const ids = Number(id);
    dispatch(detailChoice(ids));
  }
  const head_list = item? <p>Результат поиска:</p>: null;

  const load = <p className='li_load'>Loading... <img className='load' src={gif} alt='loading'/></p>;

  const err = error === 'Не верный запрос'? <p className='err'>{error}</p>: <div className='error'>
    Произошла ошибка сервера! <button className='btn' onClick={reloadSearch}>Повторить запрос</button>
  </div>;

  const list = item? item.map((o) => {
    return (<li className='list_li' key={o.id} id={o.id} onClick={choiceService}>Услуга: {o.name}</li>)
  }): null;

  return (
    <ul className='list_choice'>
      {head_list}
      {error? err: loading? load: list}
    </ul>
  )
}

