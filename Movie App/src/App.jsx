import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
      <div>
        <MovieCard movie={{
          Title: 'The Matrix',
          Poster: 'https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg',
          release_date: '1999-03-31'
        }} />
        <MovieCard movie={{
          Title: 'Inception',
          Poster: 'https://m.media-amazon.com/images/I/51s+6Z5F1-L._AC_.jpg',
          release_date: '2010-07-16'
        }} />
      </div>
    </>
  )
}

export default App
