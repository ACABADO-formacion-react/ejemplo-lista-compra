import { useEffect, useState } from "react";

export const useFetch = (
    url,
    accion,
    config = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
) => {
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const resp = await fetch(url, config);
                const articulosAPI = await resp.json();
                accion(articulosAPI);
            } catch (err) {
                setError(err);
            } finally {
                setCargando(false);
            }
        })();
    }, [url, accion, config]);

    return { error, cargando }
}