import './Post.css'


function Post(props) {
    
    return (
        
        <div className='post-container'>
            <img src={props.img} alt="book cover"></img>
            <p className="post-title">{props.title}</p>
            <p className="post-description">{props.description}</p>
            <div>
                <span>
                    <small>Author: {props.author}</small>
                </span>
            </div>
        </div>
    );
        
}

export default Post;