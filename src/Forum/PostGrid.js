import React from "react";
import Grid from '@material-ui/core/Grid';
import {default as PostShell} from './PostShell'
import { makeStyles } from "@material-ui/core/styles";

import {slugs} from './sampleJson/wowForumJson'
//make the post shells have a little padding and alternating backgrounds
export const PostGrid = () => {
const useStyles = makeStyles(theme => ({
    container: {
        border: '2px solid red'
        
    
    },
    item: {
        width: '80%',
        border: '2px solid green'
      
      
    }
  }));

  const classes = useStyles()


   

    const charMap = slugs.map(char=>{
        const {name,wowClass,guildName,Server} = char
        return(
        <Grid className={classes.item} item={true} key={name}>
        <PostShell slug={char}/>
        </Grid>
      
        )
    })


        return(
           
            
             <Grid container={true} className={classes.container} direction="column" spacing={1} alignItems="center" >
               
                   {charMap}
            </Grid>
           
           
        )
}