import { Provider } from "react-redux";
import Characters from "./pages/characters/Characters";
import { store } from "./app/store";

const CharactersApp = () => {
  return <Provider store={store}>
    <Characters />
  </Provider>;
};

export default CharactersApp;
