import React from 'react';

// Componente CardProduto: representa um cartão de produto
const CardProduto = ({ nome, preco, descricao, imagem }) => { // aqui é função que recebe as props
  return (
    <div className="card-produto">
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>
      <p className="preco">R$ {preco.toFixed(2)}</p>
      <p className="descricao">{descricao}</p>
    </div>
  );
};

export default CardProduto;