import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
    return (
        <div className= {styles.posts}>
            <textarea name="add" cols="30" rows="2"></textarea>
            <button type="submit">Add post</button>
            <Post message='Hi, how are you?' name='Kate' likes='3'/>
            <Post  message='My second post!' name='Yennefer' likes='11'/>
            <Post message='Klark Kent is superman!!!' name='Triss' likes='10' />
        </div>
    )
}

export default MyPosts;