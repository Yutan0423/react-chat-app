import React from 'react';
import { pushMessage } from '../firebase'
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send' ;

const MessageSubmitButton = ({inputEl, name, setText, text}) => {
    console.log(text);
    return (
        <IconButton
            disabled={text === ''}
            onClick={() => {
                pushMessage({name: '丹さん', text});
                setText('');
                inputEl.current.focus();
            }}
            >
            <SendIcon />
        </IconButton>
    );
};

export default MessageSubmitButton;