import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PanelHolder from './PanelHolder'
import {lorum,ipsum} from './lorumipsum'

const PostShell = (props) => {
const StyledTableCell = withStyles(theme => ({


  body: {
    fontFamily: '12px Arial, Helvetica, sans-serif',
    border: '1px solid black',
    fontSize: 14,
    color: 'white'
  } 
}))(TableCell);





const useStyles = makeStyles(theme => ({
  root: {
    border: '1px solid grey',

    //marginTop: theme.spacing(3),
   
  
  },
  table: {
    backgroundImage: 'linear-gradient(gray,black)',
    
  
    
    
  }
}));


  
const classes = useStyles()



  return (
    
      
      <Table className={classes.table}>
        <TableBody>
        <TableRow>
        
        
            <StyledTableCell rowSpan={2} style={{width: '15%',height:'100%',color:'#d38d01',fontWeight:'bold'}}> 
          
            <PanelHolder name={props.name}/>        
          
          
            </StyledTableCell>


            <StyledTableCell style={{fontWeight: 'bold'}}> {lorum} </StyledTableCell>

            </TableRow>

          <TableRow style={{height: '90%'}}>

            <StyledTableCell style={{color: 'silver'}} > {ipsum} </StyledTableCell>
            
          </TableRow>
        </TableBody>
      </Table>
   
  );
  }


  export default PostShell