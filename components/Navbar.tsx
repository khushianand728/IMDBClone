import Navbaritem from "./Navbaritem";

export default function Navbar() {
  return (
    <div className="flex bg-amber-300 p-4 mt-6 text-lg gap-5 pl-40 ">
      <Navbaritem title="Trending" param="fetchTrending" />
      <Navbaritem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
