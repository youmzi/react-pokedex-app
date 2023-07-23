import React, { FunctionComponent } from 'react';
import PokemonList from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';
import PokemonAdd from './pages/PokemonAdd';
import PokemonEdit from './pages/PokemonEdit';
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'
import PrivateRoute from './PrivateRoute'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App: FunctionComponent = () => {

    return (
        <Router>
            <div>
                {/* La barre de navigation commune à toutes les pages */}
                <nav>
                    <div className="nav-wrapper teal">
                        <Link to="/" className="brand-logo center">Pokédex</Link>
                    </div>
                </nav>
                {/* Le système de gestion des routes de notre application */}
                <Switch>
                    <PrivateRoute exact path="/" component={PokemonList} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/pokemons" component={PokemonList} />
                    <PrivateRoute exact path="/pokemons/add" component={PokemonAdd} />
                    <PrivateRoute exact path="/pokemons/edit/:id" component={PokemonEdit} />
                    <PrivateRoute exact path="/pokemons/:id" component={PokemonDetail} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    )
}
  
export default App;