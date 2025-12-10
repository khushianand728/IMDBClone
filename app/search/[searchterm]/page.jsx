import Results from '@/components/Result'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function Searchpage({ params }) {
  const { searchterm } = await params;  

  const resp = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchterm}&language=en-US&page=1&include_adult=false`
  );

  const data = await resp.json();
  const results = data.results;

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {results && results.length > 0 && <Results results={results} />}
    </div>
  );
}
