import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeComponent from "./Component/HomeComponent";
import CategeryComponent from "./Component/CategeryComponent";
import HeaderComponent from "./Component/HeaderComponent";
import CountreisComponent from "./Component/CountreisComponent";
import ProdukComponent from "./Component/ProdukComponent";
import { useState, createContext } from "react";
import BasketComponent from "./Component/BasketComponent";
import SearchComponent from "./Component/SearchComponent";
import FooterComponent from "./Component/FooterComponent";

export const AddContext = createContext();

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || []
  );
  const [sear, setSear] = useState("");
  return (
    <AddContext.Provider value={{ user, setUser, sear, setSear }}>
      <div
        style={{
          backgroundImage: `url('https://catherineasquithgallery.com/uploads/posts/2021-02/1614404465_5-p-pitstsa-na-temnom-fone-6.jpg')`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="App"
      >
        <header className="App-header">
          <HeaderComponent />
        </header>
        <main
          style={{
            minHeight: "80vh",
          }}
        >
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="categery/:id" element={<CategeryComponent />} />
            <Route path="countreis/:id" element={<CountreisComponent />} />
            <Route path="produk/:id" element={<ProdukComponent />} />
            <Route path="korzina/:id" element={<BasketComponent />} />
            <Route path="search/:id" element={<SearchComponent />} />
          </Routes>
        </main>
        <footer>
          <FooterComponent />
        </footer>
      </div>
    </AddContext.Provider>
  );
}

export default App;
