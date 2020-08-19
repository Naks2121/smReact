import React from 'react'
import styles from './Profile.module.css'
import Posts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

function Profile(props) {
    return (
        <div className={styles.content}>
            <ProfileInfo /> 
            <Posts posts={props.state.posts} />
        </div>
    )
}

export default Profile;