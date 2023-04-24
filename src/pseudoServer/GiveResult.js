/**
 * Функция выступает в роли сервера
 */

let nextId = 2;
export const services = [
  { id: nextId++, name: 'Ремонт стекла', price: 21000, content: 'Стекло оригинал от Apple'},
  { id: nextId++, name: 'Замена дисплея', price: 25000, content: 'Дисплей оригинал от Foxconn'},
  { id: nextId++, name: 'Заменить аккумулятор', price: 4000, content: 'Новый на 4000 mAh'},
  { id: nextId++, name: 'Заменить микрофон', price: 2500, content: 'Оригинальный от Apple'},
  { id: nextId++, name: 'Разблокировка', price: 2500, content: 'Оригинальный от Apple'},
];

export default function giveResult(request) {
  if(!request) {console.log('request is empty!'); return;}
  if(typeof(request) === 'string') {
    return new Promise((resolve, reject) => {
      const rand = Math.floor(Math.random() * 10);
      setTimeout(() => {
        const res = services.filter((o) => o.name.toLowerCase().startsWith(request.toLowerCase()));
        if(rand < 8) {
          if(res.length !== 0) { resolve(res); } else { reject(new Error('Не верный запрос')); } 
        } else {
          reject( new Error('Упс!! Сбой на сервере!!'));
        }
      }, rand < 4? rand * 500: 500);
    })
  }
  return new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 10);
    setTimeout(() => {
      const choice = services.find(item => item.id === request);
      if(rand < 6) {
        resolve(choice);
      } else { reject( new Error('Упс!! Сбой на сервере!!')); }
    }, rand < 4? rand * 500: 500);
  })
}


