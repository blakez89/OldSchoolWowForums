import React from 'react';
import {default as PortraitPanel} from './PortraitPanel'
import SearchPanel from './SearchPanel';
import TextPanel from './TextPanel'


export default function PanelHolder(props){
    return(
        <div style={{display:'flex',flexDirection:'column'}}>

        <div style={{display:'flex',flexDirection:'row',marginLeft:'2vw'}}>   
        <PortraitPanel name={props.name}/>
        <SearchPanel/>            
        </div> 

        <TextPanel  name={props.name}/>

        </div>

    )
}