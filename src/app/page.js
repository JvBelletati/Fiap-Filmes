import CardFilme from '@/components/CardFilme'
import Titulo from '@/components/Titulo.jsx'

async function carregarDados() {
  const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=e29f83299859d229702074e8f70ce639&language=pt-br"
  const response = await fetch(url)
  const json = await response.json()
  return json.results
}

export default async function Home() {

  //mock
  const  filmes = await carregarDados()  

  return ( //JSX
    <>
      <nav className="flex items-end gap-4 bg-slate-900 p-4">
        <h1 className="text-3xl font-bold">Fiap Filmes</h1>
        <a href="/favoritos">Favoritos</a>
      </nav>

      <Titulo>Em alta</Titulo>

      <section className="flex flex-wrap gap-2">
        {filmes.map( filme => <CardFilme filme={filme} /> )}
      </section>

      <Titulo>Lançamentos</Titulo>

    </>
  )
}
