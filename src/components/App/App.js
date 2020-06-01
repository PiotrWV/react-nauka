import React from 'react';
import styles from './App.scss';

class App extends React.Component {
    render() {
        return ( 
            <main className={styles.component} >
            <h1 className = {styles.title}> My first React app </h1> 
            <h2 className = {styles.subtitle}> Hello world! < /h2> 
            <List title = {['Things to do', <sup key = '1'>soon!</sup>]}> 
            </List>
            
            // Nie wiem czy tak ma to wyglądać?
            <List>
                <img src = './space.png'></img>  
            </List>
        
               
                </main >
        )
    }
}

export default App;

// <List imageSpace> czy właściowść "key"?