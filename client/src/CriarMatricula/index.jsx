import { useState } from 'react';
import '../globals.css';
import { useNavigate } from 'react-router-dom';


export default function CreateMatricula() {
  const [aluno, setAluno] = useState('');
  const [plano, setPlano] = useState('');
  const [rede, setRede] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const novaMatricula = { aluno, plano, rede };

    try {
      const response = await fetch('http://localhost:5000/matriculas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaMatricula),
      });
      if (response.ok) {
        alert('Matrícula criada com sucesso!');
        setAluno('');
        setPlano('');
        setRede('');
        navigate("/matriculas");
      } else {
        alert('Erro ao criar matrícula.');
      }
    } catch (error) {
      console.error('Erro ao criar matrícula:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Criar Matrícula</h2>
      <input
        type="text"
        placeholder="Nome do Aluno"
        value={aluno}
        onChange={(e) => setAluno(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Plano"
        value={plano}
        onChange={(e) => setPlano(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Rede"
        value={rede}
        onChange={(e) => setRede(e.target.value)}
        required
      />
      <button type="submit">Criar Matrícula</button>
    </form>
    </div>
  );
}
