import { Link } from 'react-router-dom';
import '../globals.css';

export default function Home() {
    return (
        <div className='container'>
            <h2>IronBerg</h2>
            <div className="card-container">
                <Link to="/matricula/cadastrar" className="card">
                    <div>Registrar Matrícula</div>
                </Link>
                <Link to="/matriculas" className="card">
                    <div>Lista de Matrícula</div>
                </Link>
                <Link to="/matriculas/alterar" className="card">
                    <div>Editar Matrícula</div>
                </Link>
            </div>
        </div>
    );
}
