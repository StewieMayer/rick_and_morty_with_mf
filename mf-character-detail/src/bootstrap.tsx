import { Provider } from "react-redux";
import CharacterDetail from "./pages/characterDetail/CharacterDetail";
import { store } from "./app/store";

const CharacterDetailApp = () => {
  return <Provider store={store}>
    <CharacterDetail />
  </Provider>;
};

export default CharacterDetailApp;
