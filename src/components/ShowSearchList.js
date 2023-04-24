import React from 'react';
import { services } from '../pseudoServer/GiveResult'

export const ShowSearchList = () => {
  return (
    <div>
      <p>Поиск ведем по таким услугам: "{services.map((o, index) => {return(<span key={index}>{o.name}, </span>)})}."</p>
      <p>Ввод данных в русской раскладке.</p>
    </div>
    
  )
}

