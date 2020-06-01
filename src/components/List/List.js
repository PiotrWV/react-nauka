import React from 'react';
import styles from './List.scss';
import List from '../App.js';
import PropTypes from 'prop-types';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node,
        children: PropTypes.node,
    }
    
    static defaultProps = {
        children: <p> I can do all the things!!!</p>
    }
    render() {
        return ( 
            <section className={styles.component} >
                
                <h2>Things</h2>
               
                </section >
            <Hero titleText = {this.props.title} />
            <div className = {styles.description}>
                
                <Hero imageSpace = {this.props.image} />

                    {this.props.children}
            
            </div>
            
            <div className={styles.component}>
                
                //zad 3 brak
            
            </div>
        )
    }
}

export default List;

//Czemu nie czyta metody render?