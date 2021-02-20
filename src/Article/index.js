import React, { Component } from 'react'
import CommentsList from '../CommentsList'

class Article extends Component{
    constructor(props) {
        super(props)
        this.state = {isOpen: false}
    }

    handleClick = () => {
        console.log('---', 'clicked')
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const {post} = this.props
        const style = {width: '100%'}
        const body = <section className="card-body">{post.body}</section>
        return(
           <div className="card" style={style}> 
               <div className="card-header">
               <h2>
                  {post.title}
               </h2>
               </div>
                <div className="card-body">
                    {body}
                    <button onClick={this.handleClick} class="btn btn-outline-dark"> 
                    {this.state.isOpen ? 'Hide comments' : 'Show comments'} </button> 
                    {this.state.isOpen ? <section> <CommentsList postId={this.props.post.id}/></section> : null}
                </div>
            </div>
        
        )
    }
}


export default Article;

