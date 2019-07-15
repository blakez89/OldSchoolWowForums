import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

 const useStyles = makeStyles(theme =>  ({

  wrapper: { 
    display: 'grid',
    gridTemplateColumns: '1vw 5vw',
    width: '6vw',
    height: '5vw',
    color: 'white',
    minWidth: '-webkit-min-content',
    minHeight:'-webkit-min-content',

    backgroundColor: 'black',
    marginRight: '.5vw'
  }, 
  
  box1: { 
    gridColumnStart: '2', 
    gridColumnEnd: '2',
    gridRowStart: '1', 
    gridRowEnd: '4',
    borderRight: '2px solid grey',
    borderTop: '2px solid grey',
    borderBottom: '2px solid grey',
    position: 'relative'
    
  }
  ,
  box2: { 
   gridColumnStart: '1',
   border: '2px solid grey',
  }
 

}));

export default function CSSGrid(props) {
  const classes = useStyles();

  return (
    
    <div className={classes.wrapper}>
      <div className={classes.box2}>x</div>
      <div className={classes.box2} style={{borderTop:'0px',borderBottom:'0px'}}>y</div>
      <div className={classes.box2}>z</div>
      {/* Default Props here */}
      <div className={classes.box1}>


      {props.name? props.name : 'bob'}
    <div style={{position:'absolute',bottom:'0',right:'0'}}>
      
      60
      </div>
    </div>
</div>
  );
}


