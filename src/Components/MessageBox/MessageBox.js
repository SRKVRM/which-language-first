import React, {useState} from 'react';
import './MessageBox.css';

function MessageBox(props) {
    const content = props.messages;
    
    return(
        <div className='message' style={props.style}>
            {content}
        </div>
    )
}

export default MessageBox;