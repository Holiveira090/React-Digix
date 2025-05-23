import React from 'react';
import CardProduto from './CardProduto';
import './App.css';

const produtos = [ // Array de produtos
  // Aqui esta sendo um arrays de objetos, cada objeto representa um produto
  {
    nome: "Fone de Ouvido Bluetooth", 
    preco: 129.99,
    descricao: "Áudio de alta qualidade com conexão sem fio.",
    imagem: "https://th.bing.com/th/id/OIP.GtQr_z-Hpen0X0XZwVV2IgHaFj?w=277&h=208&c=7&r=0&o=5&cb=iwc2&dpr=1.1&pid=1.7"
  },
  {
    nome: "Smartwatch Fitness",
    preco: 259.90,
    descricao: "Monitoramento completo de saúde e esportes.",
    imagem: "https://th.bing.com/th/id/OIP.lqbzS_e1WGzgOCbSdmv2NAHaIr?w=166&h=194&c=7&r=0&o=5&cb=iwc2&dpr=1.1&pid=1.7"
  },
  {
    nome: "Notebook Gamer",
    preco: 4999.00,
    descricao: "Desempenho incrível para jogos e atividades pesadas.",
    imagem: "https://th.bing.com/th/id/OIP.eXPNx2PHJTFXcMfZ7aBSWAHaFB?w=260&h=180&c=7&r=0&o=5&cb=iwc2&dpr=1.1&pid=1.7"
  },

];

function App() { // Componente principal do aplicativo
  return (
    <div className="catalogo">
      {produtos.map((produto, index) => ( // a gente esta usando o map para iterar sobre o array de produtos
      //  map é uma função de array que cria um novo array com os resultados da chamada de uma função para cada elemento do array
        <CardProduto
          key={index}
          nome={produto.nome}
          preco={produto.preco}
          descricao={produto.descricao}
          imagem={produto.imagem}
        />
      ))}
    </div>
  );
}

export default App;