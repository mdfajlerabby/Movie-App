import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
      <div>
        <MovieCard movie={{ Poster: 'https://example.com/poster.jpg', Title: 'Example Movie', release_date: '2023-01-01' }} />
        <MovieCard movie={{ Poster: 'https://example.com/poster2.jpg', Title: 'Another Movie', release_date: '2023-02-01' }} />
      </div>
    </>
  )
}

export default App
