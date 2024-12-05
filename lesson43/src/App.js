import logo from './logo.svg';
import './App.css';

function Title () {
    return (
        <h2>Title component</h2>
    )
}

function Header () {
    return (
        <header>
            <h1>Header Component</h1>
            <Title/>
        </header>
    )
}

function Content () {
    return (
        <content>
            <h1>Content Component</h1>
            <Title/>
        </content>
    )
}

function Footer () {
    return (
            <footer>
                <h1>Footer component</h1>
                <Title/>
            </footer>
    )
}

function App() {
    return (
        <div className="App">
            <Header/>
            <Content/>
            <Footer/>
        </div>
);
}

export default App;
