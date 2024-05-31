import logo from "./logo.svg";
import "./App.css";
import Header from "./core/components/layouts/Header";
import Landing from "./core/components/layouts/Landing";

import Footer from "./core/components/layouts/Footer";
import RootRouter from "./RootRouter";

function App() {
  return (
    <>
      <Header appName="AZ Devconnector"></Header>
      <RootRouter></RootRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
