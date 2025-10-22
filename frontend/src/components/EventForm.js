import React, { useState, useEffect } from "react";
import { createEvento, fetchArtistas } from "../services/api";
import { Container, Form, Button } from "react-bootstrap";

export default function EventForm() {
    const [form, setForm] = useState({
        nombre: "",
        descripcion: "",
        fecha_hora_inicio: "",
        fecha_hora_fin: "",
        artistaIds: [],
    });
    const [artistas, setArtistas] = useState([]);

    useEffect(() => {
        (async () => {
            const a = await fetchArtistas();
            setArtistas(a);
        })();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createEvento(form);
        alert("Evento creado correctamente!");
    };

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSelectArtistas = (e) => {
        const ids = Array.from(e.target.selectedOptions).map((opt) =>
            Number(opt.value)
        );
        setForm({ ...form, artistaIds: ids });
    };

    return (
        <Container className="mt-4">
            <h2 className="mb-4">Crear Nuevo Evento</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="descripcion"
                        value={form.descripcion}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Fecha Inicio</Form.Label>
                    <Form.Control
                        type="datetime-local"
                        name="fecha_hora_inicio"
                        value={form.fecha_hora_inicio}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Fecha Fin</Form.Label>
                    <Form.Control
                        type="datetime-local"
                        name="fecha_hora_fin"
                        value={form.fecha_hora_fin}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Artistas</Form.Label>
                    <Form.Select multiple onChange={handleSelectArtistas}>
                        {artistas.map((a) => (
                            <option key={a.id} value={a.id}>
                                {a.nombres} {a.apellidos}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Guardar Evento
                </Button>
            </Form>
        </Container>
    );
}
