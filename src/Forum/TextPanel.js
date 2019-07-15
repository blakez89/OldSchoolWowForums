import React from 'react';
import Paper from "@material-ui/core/Paper";

export default function TextPanel(props) {
  

    return (
        <Paper style={{backgroundColor: 'black',color:'#d38d01',fontWeight:'bold',textAlign:'center',width:'100%',marginTop:'5px'}}>
        <span>{props.name}</span> <br />
        <span>{'<'}Guild Name{'>'}</span> <br />
        <span style={{color:'white'}}>Server</span>
        </Paper>

    );
  }