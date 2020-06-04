import React from 'react';
import styles from './List.scss';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import Hero from '../Hero/Hero.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';


class List extends React.Component {

    state = {
        columns: this.props.columns || [], // if this.state.columns is note defined then t.s.c get empty array
    }

    static propTypes = {
        title: PropTypes.node,
        description: PropTypes.node,
        columns: PropTypes.array,
    }
    
    static defaultProps = {
        description: settings.defaultListDescription,
    }
    
    // Add new object to this.state.columns
    addColumn(title){   
        this.setState(state => (
          {
            columns: [
              ...state.columns,
              {
                key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
                title,
                icon: 'list-alt',
                cards: []
              }
            ]
          }
        ));
      }

    render() {
        return ( 
            <section className={styles.component}>
                
                <h2>Things</h2>
                <Hero titleText = {this.props.title} />
                <div className = {styles.description}>
                
                    <Hero imageSpace = {this.props.image} />
                    {ReactHtmlParser(this.props.description)}
            
                </div>
            
                <div className={styles.component}>

                    {this.state.columns.map(({key, ...columnProps}) => (
                        <Column key={key} {...columnProps} />
                    ))}  
                 </div>

                 <div className={styles.creator}>
                    <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
                 </div>
            </section>
            
        )
    }
}

export default List;

