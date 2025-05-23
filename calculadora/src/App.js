import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState('0'); // quando coloco [] quer dizer useState 
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => { // aqui estou criando a função inputDigit
    if (waitingForSecondOperand) { // aqui estou verificando se o valor de waitingForSecondOperand é true
      setDisplay(String(digit)); //  aqui estou convertendo o valor digit para string
      setWaitingForSecondOperand(false); // aqui estou mudando o valor de waitingForSecondOperand para false
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit); // aqui estou verificando se o valor de display é 0, se for, estou convertendo o valor digit para string, se não, estou concatenando o valor de display com o valor digit
    }
  };

  const inputDecimal = () => { // aqui estou criando a função inputDecimal
    if (waitingForSecondOperand) { // aqui estou verificando se o valor de waitingForSecondOperand é true
      setDisplay('0.'); // aqui estou mudando o valor de display para 0.
      setWaitingForSecondOperand(false); // aqui estou mudando o valor de waitingForSecondOperand para false
      return; // aqui estou retornando para sair da função
    }

    if (!display.includes('.')) { // aqui estou verificando se o valor de display não inclui o ponto
      setDisplay(display + '.'); // aqui estou concatenando o valor de display com o ponto
    }
  };

  const clearDisplay = () => { // aqui crear faz o mesmo que o AC
    setDisplay('0'); // aqui estou mudando o valor de display para 0
    setFirstOperand(null); // aqui estou mudando o valor de firstOperand para null
    setOperator(null); // aqui estou mudando o valor de operator para null
    setWaitingForSecondOperand(false); // aqui estou mudando o valor de waitingForSecondOperand para false
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);

    if (nextOperator !== '=') {
      setOperator(nextOperator);
    }
  };


  const calculate = (firstOperand, secondOperand, operator) => { // aqui estou criando a função calculate
    switch (operator) { // aqui estou criando o switch para verificar o valor de operator
      case '+':
        return firstOperand + secondOperand; // aqui estou retornando o valor da soma
      case '-':
        return firstOperand - secondOperand; // aqui estou retornando o valor da subtração
      case '*':  // aqui estou retornando o valor da multiplicação 
        return firstOperand * secondOperand; // aqui estou retornando o valor da multiplicação
      case '/':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="keypad">
        <button className="clear" onClick={clearDisplay}>AC</button>
        <button className="operator" onClick={() => performOperation('/')}>/</button>
        <button className="operator" onClick={() => performOperation('*')}>*</button>
        <button className="operator" onClick={() => performOperation('-')}>-</button>

        <button onClick={() => inputDigit(7)}>7</button>
        <button onClick={() => inputDigit(8)}>8</button>
        <button onClick={() => inputDigit(9)}>9</button>
        <button className="operator" onClick={() => performOperation('+')}>+</button>

        <button onClick={() => inputDigit(4)}>4</button>
        <button onClick={() => inputDigit(5)}>5</button>
        <button onClick={() => inputDigit(6)}>6</button>
        <br />
        <button onClick={() => inputDigit(1)}>1</button>
        <button onClick={() => inputDigit(2)}>2</button>
        <button onClick={() => inputDigit(3)}>3</button>

        <button className="equals" onClick={() => performOperation('=')}>=</button>

        <button className="zero" onClick={() => inputDigit(0)}>0</button>
        <button onClick={inputDecimal}>.</button>
      </div>
    </div>

  );
}

export default App;