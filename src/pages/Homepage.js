import { Search } from "../components/search/Search";
import { News } from "../components/search/News";
import { Footer } from "../components/Footer";

export const Homepage = () => (
  <div className="content">
    <Search />
    <News />
    <Footer />
  </div>
);
