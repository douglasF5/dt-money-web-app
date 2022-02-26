import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Reset, GlobalCustomProperties } from "./styles/GlobalStyles";

export function App() {
  return (
    <>
      <Header />
      <Main />
      <Reset />
      <GlobalCustomProperties />
    </>
  );
}
