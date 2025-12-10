import Image from 'next/image'
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export default  async function page({params}) {
    const {id:movieId}= await params

    const resp= await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
    const movie= await resp.json()

  
  return (
    <div className='w-full'>
        <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
        <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} alt='Movie image
        ' style={{maxWidth:"100%", height:"100%"}} width={500} height={300}/>
       
        <div className='p-2'>
             <h2 className='text-lg mb-3 font-bold'>{movie.title || movie.name}</h2>
             <p className='text-lg mb-3'>{movie.overview}</p>
             <p className='mb-3'>
             <span className='font-semibold mr-1'>{movie.release_date || movie.first_air_date}</span>
             </p>
             <p>
             <span className='font-semibold mr-1'>Rating:</span>
                {movie.vote_count}</p>
        </div>
        </div>
    </div>
  )
}
