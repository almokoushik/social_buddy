import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const { id, title, body } = props.post
    let history = useHistory()
    const ButtonClick=(id)=>{       
        const url=`posts/${id}`
        history.push(url)
    }

 
    return (
        <div style={{border:"1px solid navy",margin:"10px",padding:"10px"}}>
            <h3>Id:{id} -Title:{title}</h3>
            <p>{body}</p>
            <button onClick={()=>ButtonClick(id)}>Detail</button>
        </div>
    );
};

export default Post;