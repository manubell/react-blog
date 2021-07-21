import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id={"page-body"}>
          <Route path={"/"} component={HomePage} exact />
          <Route path={"/about"} component={AboutPage} />
          <Route path={"/articles-list"} component={ArticlesListPage} />
          <Route path={"/article/:name"} component={ArticlePage} exact />
        </div>
      </div>
    </Router>
  );
}

export default App;
