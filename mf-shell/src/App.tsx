import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharactersRemote from "./pages/CharactersRemote";
import CharacterDetailRemote from "./pages/CharacterDetailRemote";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<CharactersRemote />} />
          <Route path="character/:id/*" element={<CharacterDetailRemote />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
