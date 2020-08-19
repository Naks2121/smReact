import React from 'react'
import styles from './Post.module.css'

function Post(props) {
    return (
        <div className= {styles.item}>
            <img src='https://i.pinimg.com/736x/5a/9c/54/5a9c54d6bfde0a5c65e8539f36cf00fc.jpg' alt='avatar'/>
            <div>
                {props.message}
            </div>
            <span>Like: </span> {props.likes}
        </div>
    )
}

export default Post;