import React, { useState, useEffect } from 'react'
import Article from '../Article'
import './style.css'



export default function ArticleList ({ posts }) {

        const [post, setPosts] = React.useState([]);
        const [loading, setLoading] = React.useState(true);

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(response => response.json())
            .then(posts => {
                setPosts(posts);
                setLoading(false);
            })
        }, []);

    const postsElements = post.map(post => 
        <li key={post.id} className="article-list_li">
            <Article post={post} />
        </li>
    )
    return (
        <ul>
            {postsElements}
        </ul>
    )
}