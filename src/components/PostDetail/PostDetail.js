import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {
    const {id}=useParams()
    const [post,setPost]=useState({})
    const [comment,setComment]=useState({})
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[id])
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/comments/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComment(data))
    },[id])
    const {title,body}=post
    const {name,email}=comment
    return (
        <div style={{textAlign: 'center'}}>
            <h3>This is Post Detail of Id:{id}</h3>
            <h4>Title:{title}</h4>
            <p>Body:{body}</p>
            <h3>Comments:</h3>
            <p>Name:{name}</p>
            <p>Email:{email}</p>
            <p>Body:{comment.body}</p>
        </div>
    );
};

export default PostDetail;