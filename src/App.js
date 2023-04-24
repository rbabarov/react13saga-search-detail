import './css/App.css';
import './css/stamp.css';
import { ShowSearchList } from './components/ShowSearchList';
import { useSelector, useDispatch } from 'react-redux';
import { changeField } from './actions/actionCreator';
import { ShowChoice } from './components/ShowChoice';
import { ShowDetails } from './components/ShowDetails';

function App() {
  const search_V_result = useSelector((state) => state.searching);
  const details_V_result = useSelector((state) => state.detailing);
  const dispatch = useDispatch();
  function change(evt) {
    const { value } = evt.target;
    dispatch(changeField(value));
  }
  return (
    <div className="App">
      <ShowSearchList/> 
      <input type='search' className='ipt' onChange={change} placeholder='Type something to search...'/> Поиск
      <ShowChoice search_result={search_V_result}/>
      <ShowDetails details_result={details_V_result}/>
    </div>
  );
}

export default App;

