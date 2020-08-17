import React from 'react'
import styles from './Profile.module.css'
import Posts from './MyPosts/MyPosts'

function Profile() {
    return (
        <div className={styles.content}>
            <img src="https://wallpaperaccess.com/full/6313.jpg" alt="profile_img" />
            <Posts />
        </div>
    )
}

export default Profile;