// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.rtl.css'
// import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import Header from './components/Header'
import Slider from './components/Slider'

function App() {
    return (
        <>
            <Header />
            <main className="container" >
                <Slider />
            </main>
        </>
);
}

export default App;
