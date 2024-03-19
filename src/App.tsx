import { useState, useEffect } from 'react'
import './App.css'

type Movie = {
  id: number
  title: string
}


function App() {
  const [url, setUrl] = useState('')
  const [movieName, setMovieName] = useState('')
  const [movieList, setMovieList] = useState<Movie[]>([])

  useEffect(() => {
    if (movieName.length > 3 && url.length > 0) {
      const apiUrl = `${url}?movie=${movieName}`
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          setMovieList(data)
        })
    }
  }, [movieName]);

  function searchMovie(movie: string) {
    debounce(() => setMovieName(movie), 300)
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
      <main>
        <h1>Búsqueda de películas similares</h1>
        <input
          type="text"
          placeholder="Star Wars, Matrix, The Lord of the Rings..."
          value={movieName}
          onChange={(e) => searchMovie(e.target.value)}
        />
        <ul>
          {movieList.map((movie: Movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </main>
    </>

  )
}

export default App
