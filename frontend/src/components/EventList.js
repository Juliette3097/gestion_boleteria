import React, { useEffect, useState } from "react";
import { fetchEventos } from "../services/api";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function EventList() {
    const [eventos, setEventos] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await fetchEventos();
            console.log("Eventos recibidos:", data);
            setEventos(data);
        })();
    }, []);

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">Eventos Disponibles</h2>
            <Row>
                {eventos.length === 0 && <p>No hay eventos registrados.</p>}
                {eventos.map((e) => (
                    <Col md={6} lg={4} key={e.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{e.nombre}</Card.Title>
                                <Card.Text>{e.descripcion}</Card.Text>
                                <p>
                                    <strong>Inicio:</strong>{" "}
                                    {new Date(e.fecha_hora_inicio).toLocaleString()}
                                </p>
                                <p>
                                    <strong>Fin:</strong>{" "}
                                    {new Date(e.fecha_hora_fin).toLocaleString()}
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
