import { Component } from 'react';
import style from './App.module.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu'
import Main from './components/Main/Main';

import postService from './services/postService';

//function App() {
//    return (
//        <div className={style.app}>
//            <Header />
//            <div className={style.container}>
//                <Menu />
//                <Main />
//            </div>
//        </div>
//    );
//}

class App extends Component{

    constructor(props) {
        super(props);

        this.state = {
            posts : []
        }
    }


    componentDidMount() {
        postService.getAll()
        .then(posts => {
            this.setState({posts})
        })
        
    }

    render() {
        console.log(this.state.posts)
        return(
            <div className={style.app}>
            <Header />
            <div className={style.container}>
                <Menu />
                <Main posts={this.state.posts}/>
            </div>
        </div>
        );
    }
}

export default App;
