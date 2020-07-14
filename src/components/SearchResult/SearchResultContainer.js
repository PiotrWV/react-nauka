import { connect } from 'react-redux';
import SearchResult from './SearchResult';
// import { createAction_changeSearchString } from '../../redux/searchStringRedux';
import { getCardsFiltered } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.id;

  return {
    cards: getCardsFiltered(state, searchString),
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   changeSearchString: () => dispatch(createAction_changeSearchString()),
// });

export default connect(mapStateToProps)(SearchResult);