import { useHistory } from "react-router-dom";

export const HomePage = () => {
    const history = useHistory();
    const entra = (e) => {
        e.preventDefault();
        history.push("/lista");
    }
    return (
        <>
            <h2>Ésta es la página Principal</h2>
            <a href="entrar" onClick={entra}>Entrar</a>
        </>
    )
}