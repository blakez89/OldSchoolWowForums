import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import ignore from '../images/ignore.gif'
import search from '../images/search.gif'

/* import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper'; */

 //move styles up here to the style object

export default function SearchPanel() {
  

  return (
    <div style={{    display: 'flex', justifyContent: 'space-between',
    color: 'white', width: '35px', height: '25px'}}>
        <img src={ignore} alt={'ignore'}  />
        <img src={search} alt={'search'}  />
     </div>
  );
}