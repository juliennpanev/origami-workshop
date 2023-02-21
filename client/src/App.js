import { Component } from 'react';
import { Route, Link, NavLink, Redirect, Swith, Routes } from 'react-router-dom'

import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs/ContactUs';

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

class App extends Component {

    constructor (props) {
        super(props);

        this.state = {
            posts: [],
            selectedPost: null
        }
    }


    componentDidMount() {
        postService.getAll()
            .then(posts => {
                this.setState({ posts })
            })

    }

    onMenuItemClick(id) {
        this.setState({ selectedPost: id })
    }

    getPosts() {
        if (!this.state.selectedPost) {
            return this.state.posts
        } else {
            return [ this.state.posts.find(x => x.id == this.state.selectedPost) ]
        }
    }

    render() {

        return (
            <div className={style.app}>
                <Header />
                <div className={style.container}>
                    <Menu onMenuItemClick={this.onMenuItemClick.bind(this)} />
                    <Routes>
                        <Route path='/' element={<Main posts={this.getPosts()} />} />
                        <Route path='about' element={<About props={'props test'} />}></Route>
                        <Route path='contact-us' element={<ContactUs />} />
                        <Route render={() => <h1>Default Router</h1>}/>
                    </Routes>

                </div>
            </div>
        );
    }
}

export default App;
