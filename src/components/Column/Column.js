import React from 'react';
import styles from './Column.scss';
import Icon from '../Icon/Icon';


class Column extends React.Component{
    
    render() {
        return(
        
            <section className={styles.component}>
                
                <h3 className={styles.title}><span className={styles.icon}>
                    <Icon key='3' name={icon} />
                </span>{title}</h3>
            
            </section>
        )
    }
}