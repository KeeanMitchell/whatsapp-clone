import './Chat.css'
import React from 'react'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import MoreVert from '@material-ui/icons/MoreVert'
import AttachFile from '@material-ui/icons/AttachFile'
import { Avatar, IconButton } from '@material-ui/core'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';

const Chat = () => {
    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar />
                <div className='chat__headerCurrent'>
                    <h3>Room name</h3>
                    <p>Description</p>
                </div>
                <div className='chat__headerOptions'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>

                </div>
            </div>
            <div className='chat__body'>
                <p className='chat__message'>
                    <span className='chat__messageName'>Keean</span>
                        A message ?
                    <span className='chat__messageTimestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className='chat__message chat__receiver'>
                    <span className='chat__messageName'>Keean</span>
                        A message ?
                    <span className='chat__messageTimestamp'>
                        {new Date().toUTCString()}
                    </span>
                </p>

            </div>
            <div className='chat__footer'>
                <IconButton>
                    <EmojiEmotionsIcon />
                </IconButton>
                <div className='chat__footerType'>
                    <form>
                        <input className='chat__footerInput' type='text' placeholder='Type a message' />
                    </form>
                </div>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>

        </div>
    )
}

export default Chat
