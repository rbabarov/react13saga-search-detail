import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import createSagaMiddleware from 'redux-saga';
import skillsSearch from '../redusers/skillsSearch';
import skillsDetail from '../redusers/skillsDetail';
import sagaDetails from '../sagas/details';
import sagaSearch from '../sagas/search';

const reduser = combineReducers({
  searching: skillsSearch,//Имя state придумываем здесь!!
  detailing: skillsDetail
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMidleware = createSagaMiddleware();

const storeSearch = createStore(reduser, composeEnhancers(applyMiddleware(sagaMidleware)));

sagaMidleware.run(sagaSearch);
sagaMidleware.run(sagaDetails);

export default storeSearch;
