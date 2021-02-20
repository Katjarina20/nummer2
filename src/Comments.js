
function Comments (props) {
    const style = {width: '100%'}
    const body = <section className="card-name">{props.comment.body}</section>
    return(
       <div className="card">
           <div className="card-header">
               <h6>
               {props.comment.name}
               </h6>
           </div>
           <div className="card-body" >
           {body}
           </div>
    </div>
    )
}

export default Comments;