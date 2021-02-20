import React, { useEffect, useState  } from 'react';
import Comments from '../Comments'
import './style.css'

export default function CommentsList(props) {

        const [comments, setComments] = React.useState([]);

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comments => {
                const filteredComments = comments.filter (comment => comment.postId === props.postId)
                setComments(filteredComments)
            })
        }, []);

    const commentsElements = comments.map(comments => 
        <li key={comments.id} className="comments-list_li">
            <Comments comment={comments}/>
        </li>
    )

    return (
        <ul>
            {commentsElements}
        </ul>
    )
}


