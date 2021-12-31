import { Header } from "./components/Header/Index";
import { Introduction } from "./components/Introduction/Index";
import { SearchDevs } from "./components/SearchDevs/Index";
import {GlobalStyle} from './styles/global';
function App() {
  return (
    <>
      <Header />
      <Introduction />
      <SearchDevs />
      <GlobalStyle />
    </>
  );
}

export default App;
