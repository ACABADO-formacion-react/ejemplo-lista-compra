import { lazy, Suspense } from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import { HomePage } from "./componentes/pages/HomePage";
//import { AboutPage } from "./componentes/pages/AboutPage";
//import { ListaPage } from "./componentes/pages/ListaPage";
//import { NotFoundPage } from "./componentes/pages/NotFoundPage";

const AboutPage = lazy(() => import("./componentes/pages/AboutPage"));
const ListaPage = lazy(() => import("./componentes/pages/ListaPage"));
const NotFoundPage = lazy(() => import("./componentes/pages/NotFoundPage"));

function App() {
  return (
    <>
      <section className="cabecera-contenedor container-fluid">
        <div className="row">
          <header className="cabecera col">
            <h1>Lista de la compra</h1>
          </header>
          <nav className="menu-principal col">
            <ul className="list-inline">
              <li className="list-inline-item">
                <NavLink to="/principal" activeClassName="activo">Principal</NavLink>
              </li>
              <li className="list-inline-item">
                <NavLink to="/lista" activeClassName="activo">Lista</NavLink>
              </li>
              <li className="list-inline-item">
                <NavLink to="/acerca-de" activeClassName="activo">Acerca de</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <Suspense fallback={<div>Cargando</div>}>
        <Switch>
          <Route path="/principal" component={HomePage} />
          <Route path="/lista/:id?" component={ListaPage} />
          <Route path="/acerca-de">
            <AboutPage />
          </Route>
          <Route path="/" exact>
            <Redirect to="/principal" />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
