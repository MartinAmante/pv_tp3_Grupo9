const RegistroActividad = ({ fecha }) => {
    if (!fecha) return null;//si fecha esta vacio retorna null

    return (
        <div className="alert alert-info mt-4 text-center fw-bold shadow-sm">
            ⏳ Última actualización de la lista: {fecha}
        </div>
    );
};

export default RegistroActividad;