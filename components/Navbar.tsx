import { Suspense } from "react";
import Navbaritem from "./Navbaritem";

export default function Navbar() {
  return (
    <div className="flex gap-4">
      <Suspense fallback={null}>
        <Navbaritem title="Trending" param="trending" />
        <Navbaritem title="Top Rated" param="top_rated" />
      </Suspense>
    </div>
  );
}
