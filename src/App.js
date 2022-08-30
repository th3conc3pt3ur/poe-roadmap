import './App.css';
import {AppContextProvider} from './context/AppContext';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
    return (
        <AppContextProvider>
        <div className="">
            <Header/>
            <Form/>
            <Footer/>
        </div>
        </AppContextProvider>
    );
}

export default App;
