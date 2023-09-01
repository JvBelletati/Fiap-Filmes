import CardFilme from '@/components/CardFilme'
import Titulo from '@/components/Titulo.jsx'

export default function Home() {

  //mock
  const  filmes = [

    {
      id: 1,
      titulo: "Star Wars",
      nota:  9.5,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uLlrDUtFG2tKtDcJN6kBznlqqsp.jpg"
    },

    {
      id: 2,
      titulo: "Barbie",
      nota:  8.5,
      poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg"
    }
  ] 


  return ( //JSX
    <>
      <nav className="bg-slate-900 p-4">
        <h1 className="text-3xl font-bold">Fiap Filmes</h1>
      </nav>

      <Titulo>Em alta</Titulo>

      <section className="flex flex-wrap gap-2">
        {filmes.map( filme => <CardFilme filme={filme} /> )}
      </section>

      <Titulo>Lançamentos</Titulo>

    </>
  )
}
