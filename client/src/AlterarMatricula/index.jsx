import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdateCompra() {
  const [id, setId] = useState('');
  const [aluno, setAluno] = useState('');
  const [plano, setPlano] = useState('');
  const [rede, setRede] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const atualizacao = { aluno, plano, rede };

    try {
      const response = await fetch(`http://localhost:5000/matriculas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(atualizacao),
      });
      if (response.ok) {
        alert(' Matricula atualizada com sucesso!');
        navigate("/compra");
      } else {
        alert('Erro ao atualizar a Matricula.');
      }
    } catch (error) {
      console.error('Erro ao atualizar a Matricula:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Atualizar matricula</h2>
      <input
        type="text"
        placeholder="ID da Matricula"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
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
      <button type="submit">Atualizar Matrícula</button>
    </form>
    </div>
  );
}
