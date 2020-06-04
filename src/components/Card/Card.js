import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = ({title}) => (

    <section className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
    </section>

);


export default Card;