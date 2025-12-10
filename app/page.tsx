import Result from '@/components/Result' 
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const revalidate = 60;

export default async function Page({ searchParams }: { searchParams: Promise<any> }) {
  const params = await searchParams;
  const genre = params?.genre || "fetchTrending";
  const endpoint =
    genre === "fetchTopRated"
      ? "/movie/top_rated"
      : "/trending/all/week";

  const url =`https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US&page=1`;
  

  const resp = await fetch(url, { next: { revalidate: 1000 } });
  const data = await resp.json();
  console.log("Full response:", data);

  const results = data?.results;
  console.log("Results:", results);
          
  return <div>
    <Result results={results}/>
  </div>;
}
