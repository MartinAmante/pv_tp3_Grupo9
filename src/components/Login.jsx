import React, { useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import autorizacionesServie from '../services/autorizacionesServie';
import { UsuarioContext } from '../context/UsuarioContext';


const Login = () => {
    const [formulario, setFormulario] = useState({ nombre: '',password:'' });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [erroresCampo, setErroresCampo] = useState({});

    const {guardarUsuario,setGuardarUsuario}=useContext(UsuarioContext);
   /* const { guardarSesion } = useAutorizaciones();*/

    const navigate = useNavigate();

    const manejarCambio = (e) =>{
        const {name,value} = e.target;
        setFormulario(previo => ({...previo, [name]:value}))

        if (erroresCampo[name]) {
             setErroresCampo(prev => ({ ...prev, [name]: null })); 
        };
        //errores campo
    }




    const validarFormulario = ({nombre,password}) =>{
        const errores = {};

        if(!nombre.trim())
        {
            errores.nombre='Usuario obligatorio';
        }
        if(!password.trim()){
            errores.password='contraseña obligtoria';
        }else if(password.length<5){
                
            errores.password='La constraseña debe tener como minimo 5 caracteres';
        }

        return errores;

    }




    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        const errores = validarFormulario(formulario);
        
        if (Object.keys(errores).length > 0) {
            setErroresCampo(errores);
            return;
        }

        setLoading(true);
        try{
            const usuario= await autorizacionesServie.login(formulario.nombre,formulario.password)
          
            setGuardarUsuario(usuario);
            /*guardarSesion(usuario);*/
          
            navigate('/perfil');
        }catch(err){ 
            setError(err.message);
        }finally{
            setLoading(false);
        }


    }

    const formIncompleto = !formulario.nombre.trim() || !formulario.password.trim();


        return (
                <div className="card shadow-sm mb-3 border-primary " >   
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}   >
                    <div>
                        <label>Nombre: </label>
                        <input
                            type="text"
                            name="nombre"
                            value= {formulario.nombre}
                            onChange= {manejarCambio}
                            required
                        />
                        
                    {erroresCampo.nombre && ( //si erroresCampo existe haces esto:
                        <p style={{ color: 'red', fontSize: '0.85rem' }}>
                            {erroresCampo.nombre}
                        </p>
                    )}
                    </div>
                    <br />
                    <div>
                        <label>Contraseña: </label>
                        <input
                            type="password"
                            name="password"
                            value= {formulario.password}
                            onChange={manejarCambio}
                            required
                        />
                    {erroresCampo.password && ( //si erroresCampo existe haces esto:
                        <p style={{ color: 'red', fontSize: '0.85rem' }}>
                            {erroresCampo.password}
                        </p>
                    )}
                    
                    </div>
                     <br />
                   {error && <p style={{ color: 'red' }}>{error}</p>}
                              
                <button type="submit" disabled={loading || formIncompleto}>
                    {loading ? 'Verificando...' : 'Ingresar'}
                </button>
                </form>

            </div>
        );
};

export default Login;

/* 
    le gusta el ketchup
*/