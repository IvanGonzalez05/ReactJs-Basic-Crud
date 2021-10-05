import "./App.css";
import Index from "./components/Index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SerieForm from "./components/SerieForm";
import { SeriesProvider } from "./context/SeriesState";

function App() {
  return (
    <SeriesProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true}>
            <Index />
          </Route>
          <Route path="/add" component={SerieForm} />
          <Route path="/edit/:id" component={SerieForm} />
        </Switch>
      </BrowserRouter>
    </SeriesProvider>
  );
}

export default App;
