import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Druid from './icons/DruidM.gif'
import Priest from './icons/Priest.gif'
 const styles = {

  wrapper: { 
    display: 'grid',
    gridTemplateColumns: '1vw 5vw',
    width: '6vw',
    height: '5vw',
    color: 'white',

    minWidth: '-webkit-min-content',
    minHeight:'-webkit-min-content',
    marginRight: '.5vw'
  }, 
  
  box1: { 
    gridColumnStart: '2', 
    gridColumnEnd: '2',
    gridRowStart: '1', 
    gridRowEnd: '4',
    position: 'relative',
    border: '2px solid red',
    backgroundImage: `url(${Priest})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'
  }
  ,
  box2: { 
   gridColumnStart: '1',
   border: '2px solid green',
  }
 

};

export default function CSSGrid(props) {

  return (
    
    <div style={styles.wrapper}>
      <div style={styles.box2}>x</div>
      <div style={{...styles.box2,borderTop:'0px',borderBottom:'0px'}}>y</div>
      <div style={styles.box2}>z</div>
      <div style={styles.box1}>
      <div style={{position:'absolute',bottom:'0',right:'0'}}>
      
      60
      </div>
         
    </div>
</div>
  );
}


