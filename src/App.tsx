import { useState } from 'react'
import './App.css'

type Movie = {
  id: number
  name: string
}

type MovieResponse = {
  id: number
  name: string
  similar_movies: Movie[]
}

async function getRecommendations(url: string, movie: string): Promise<MovieResponse> {
  const response = await fetch(`${url}?movie=${movie}`)
  return response.json()
}

function App() {
  const [url, setUrl] = useState('')
  const [movieName, setMovieName] = useState('')
  const [movieList, setMovieList] = useState<Movie[]>([])
  const [currentMovie, setCurrentMovie] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function searchMovie() {
    setIsLoading(true)
    getRecommendations(url, movieName)
      .then((response) => {
        setMovieList(response.similar_movies)
        setCurrentMovie(response.name)
      }).finally(() => {
        setIsLoading(false)
    })
  }

  return (
    <>
      <header>
        <p>API URL</p>
        <input
          type="text"
          placeholder="http://ngrok.io/api/movies"
          value={url}
          onChange={(e) => setUrl(e.target.value)}>
        </input>
      </header>
      <form>
        <h1>Búsqueda de películas similares</h1>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
          width: '100%'
        }}>
          <input
            type="text"
            placeholder="Star Wars, Matrix, The Lord of the Rings..."
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
          <button type={'submit'} onClick={(e)=> {
            e.preventDefault()
            searchMovie()
          }}>Buscar</button>
        </div>

        {currentMovie.length > 0 && <p>Porque viste {currentMovie}</p>}
        {isLoading && <p>Cargando...</p>}
        {!isLoading && <ul>
          {movieList.map((movie: Movie) => (
            <li key={movie.id}>{movie.name}</li>
          ))}
        </ul>}
      </form>
    </>

  )
}

export default App
