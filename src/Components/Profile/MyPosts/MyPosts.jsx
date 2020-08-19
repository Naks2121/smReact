import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {
    const postsElemens = props.posts.map(
        p => <Post message={p.post} likes={p.likes}/>
    );

    const newPostElement = React.createRef();
    
    function AddPost() {
        const  text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className= {styles.posts}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} cols="30" rows="2"></textarea>
            </div>
            <div>
                <button onClick={ AddPost }>Add post</button>
            </div>
            <div className={styles.posts}>
                { postsElemens }
            </div>
        </div>
    )
}

export default MyPosts;