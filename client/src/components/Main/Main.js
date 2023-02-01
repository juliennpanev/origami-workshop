import './Main.css'

const Main = (props) => {
    console.log(props.posts)
    return(
        
        <main className="main-container">
            <h1>Some Heading</h1>
            {props.posts.map(p => <p key={p.id}>{p.content}</p>)}
        </main>
    );

}


export default Main;