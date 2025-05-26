import React, { useState } from "react";
import './PerfilUsuario.css';

function PerfilUsuario({ imagem, nome, bio }) {
    const [novoNome, setNome] = useState(nome);
    const [novoBio, setBio] = useState(bio);

    const handlerClick = () => {
        alert(`Você está seguindo ${novoNome}`);
    }

    const handleNomeChange = (e) => {
        setNome(e.target.value);
    }

    const handleBioChange = (e) => {
        setBio(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Dados salvos:\nNome: ${novoNome}\nBio: ${novoBio}`);
    }

    return (
        <div className="perfil-container">
            <img src={imagem} alt={`Foto de ${novoNome}`} style={{ borderRadius: '50%', border: '3px solid #888', width: '150px', height: '150px' }} />

            <h2 className="titulo-nome">{novoNome}</h2>
            <p className="bio">{novoBio}</p>

            <button onClick={handlerClick} style={{
                backgroundColor: '#4CAF50',
                padding: '10px 20px',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '10px'
            }}>
                Seguir
            </button>

            <form onSubmit={handleSubmit} className="form-atualizar">
                <input
                    type="text"
                    placeholder="Novo nome"
                    value={novoNome}
                    onChange={handleNomeChange}
                    className="input-perfil"
                />
                <textarea
                    placeholder="Nova bio"
                    value={novoBio}
                    onChange={handleBioChange}
                    className="textarea-perfil"
                ></textarea>
                <button type="submit" className="btn-submit">
                    Salvar
                </button>
            </form>
        </div>
    );
}

export default PerfilUsuario;
