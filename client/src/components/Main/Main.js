import './Main.css';
import Post from '../Post/Post';

const Main = (props) => {
    
    return (

        <main className="main-container">
            <h1>Some Heading</h1>

            <div className='posts'>
                {props.posts.map(p =>
                    <Post 
                        key={p.id}
                        img={p.imageName}
                        title={p.title}
                        description={p.description}
                        author={p.author}
                    />)}
            </div>

        </main>
    );

}


export default Main;