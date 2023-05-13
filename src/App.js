import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieList/MovieList';
import MovieDetails from './pages/movieDetails/MovieDetails';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path = "movie/:id" element = {<MovieDetails/>}/>
        <Route path = "movies/:type" element = {<MovieList/>}/>
        <Route path = "/*" element = {<h1>Error page</h1>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
