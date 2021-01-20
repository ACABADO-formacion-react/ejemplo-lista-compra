import { useState } from "react";
import { Info } from "./componentes/Info";
import { Lista } from "./componentes/Lista";

function App() {
  const [formAbierto, setFormAbierto] = useState({ tipo: null });
  return (
    <>
      <section className="cabecera-contenedor container-fluid">
        <div className="row">
          <header className="cabecera col">
            <h1>Lista de la compra</h1>
          </header>
        </div>
      </section>
      <Info formAbierto={formAbierto} setFormAbierto={setFormAbierto} />
      <Lista formAbierto={formAbierto} setFormAbierto={setFormAbierto} />
    </>
  );
}

export default App;
