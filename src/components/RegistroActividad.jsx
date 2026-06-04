import { Alert } from "react-bootstrap";

const RegistroActividad = ({ fecha }) => {
    if (!fecha) return null;//si fecha esta vacio retorna null

    return (
        <Alert variant="info" className="mt-4 text-center fw-bold shadow-sm">
            ⏳ Última actualización de la lista: {fecha}
        </Alert>
    );
};

export default RegistroActividad;