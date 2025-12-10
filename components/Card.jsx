import Link from "next/link"
import Image from "next/image"
import { FaThumbsUp } from "react-icons/fa"

export default function Card({result}) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border-slate-400 sm:m-2 transition-shadow duration-200">
    <Link href={`/movie/${result.id}`}>
      <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path ||result.poster_path}`} alt="Movie Image"
        width={500} height={300} className='sm:rounded-t-lg border-2 group-hover:opacity-75 transition-opacity duration-300'
      />
      
    <div className="p-2">
    <p className="line-clamp-2">{result.overview}</p>
    <h2 className="text-lg font-bold truncate ">
        {result.title || result.name}
      </h2>
      
      <p className="flex items-center">
        {result.release_date || result.first_air_date}
        <FaThumbsUp className="h-5 mr-1 ml-4"/>
        {result. vote_count}
      </p>
    </div>
    </Link>
    </div>
  )
}
