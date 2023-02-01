import style from './App.module.css';
import Header from './components/Header/Header';
import Menu from './components/Manu/Menu'

function App() {
    return (
        <div className={style.app}>
            <Header />
            <div className={style.container}>
                <Menu />
            </div>

        </div>
    );
}

export default App;
