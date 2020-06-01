import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
  <header className = {styles.component}>
    <h2 className = {styles.title}>{props.titleText}</h2>
    <img className = {styles.image}>{props.imageSpac}</img>
  </header>
);

Hero.propTypes = {
    titleText: PropTypes.node,
};
//co tu się wykonuje?

export default MyComponent;


//src = './space.png'>