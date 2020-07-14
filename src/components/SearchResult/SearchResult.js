import React from 'react';
import styles from './SearchResult.scss';
import Card from '../Card/Card';
import Container from '../Container/Container';

class SearchResult extends React.Component {
  render() {
    const { cards } = this.props;
    //console.log(cards);
    return (
      <Container>
        <section className={styles.component}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </section>
      </Container>
    );
  }
}

export default SearchResult;