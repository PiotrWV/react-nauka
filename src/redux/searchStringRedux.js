import shortid from 'shortid';

// selectors
export const getSearchString = ({ searchString }) => searchString;
export const countAllCards = ({ cards }) => cards.length;
export const countVisibleCards = ({ cards, searchString }) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// action name creator
const reducerName = 'searchResult';
const createActionName = name => `search/${reducerName}/${name}`;

// actions types
export const SET_SEARCHSTRING = createActionName('SET_SEARCHSTRING');

// action creators
export const createAction_changeSearchString = payload => ({ payload: payload, id: shortid.generate(), type: SET_SEARCHSTRING });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case SET_SEARCHSTRING:
      return  action.payload;
    default:
      return statePart;
  }
}