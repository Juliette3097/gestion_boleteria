const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";

export async function fetchEventos() {
    try {
        const res = await fetch(`${API_BASE}/eventos`);
        if (!res.ok) throw new Error("Error al conectar con backend");
        return await res.json();
    } catch (err) {
        console.error("Error al obtener eventos:", err);
        return [];
    }
}
