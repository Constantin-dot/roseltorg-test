import MainPage from "./pages/mainPage/MainPage";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import CharacterCard from "./pages/charachterCard/CharacterCard";
import EpisodeCard from "./pages/episodeCard/EpisodeCard";
import LocationCard from "./pages/locationCard/LocationCard";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route
                    path={"/roseltorg-test"}
                    exact
                    render={() => <MainPage />}
                />
                <Route
                    path={"/roseltorg-test/character"}
                    exact
                    render={() => <CharacterCard />}
                />
                <Route
                    path={"/roseltorg-test/episode"}
                    exact
                    render={() => <EpisodeCard />}
                />
                <Route
                    path={"/roseltorg-test/location"}
                    exact
                    render={() => <LocationCard />}
                />
                <Route path={"*"} render={() => <div>404 NOT FOUND</div>} />
            </Switch>
        </div>
    );
}

export default App;
