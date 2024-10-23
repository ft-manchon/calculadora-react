'use client'

import { useState } from "react";
import Botao from "./Botao";

export default function Calculadora() {
  const [input, setInput] = useState("");
  const handleBtnClick = (char: string) => {
    setInput((prevInput) => prevInput + char);
  }

  const calcRes = () => {
    setInput(eval(input).toString());
  }

  const limparInput = () => {
    setInput('');
  }

  const apagarChar = () => {
    setInput((prevInput) => (prevInput.substring(0, prevInput.length - 1)).toString());
  }

  // const calcFracao = () => {
  //   setInput((prevInput) => eval(1/prevInput).toString());
  // }

  // const porcentagem = () => {
  //   setInput((prevInput) => (prevInput/100).toString())
  // }

  return (
    <div className="border-4 border-black w-fit p-4 rounded-lg">
      <h1 className="text-center text-2xl font-bold">Calculadora</h1>
      <p className="text-right text-lg py-2 my-2 h-12">{input}</p>
      <div>
        <table>
          <tr>
              <Botao char="C" onClick={limparInput} sizeCol={2} />
              <Botao char="<" onClick={apagarChar} />
              <Botao char="/" onClick={handleBtnClick} />
              {/* <Botao char="1/x" onClick={calcFracao} /> */}
              {/* <Botao char="%" onClick={porcentagem} /> */}
          </tr>
          <tr>
              <Botao char="7" onClick={handleBtnClick} />
              <Botao char="8" onClick={handleBtnClick} />
              <Botao char="9" onClick={handleBtnClick} />
              <Botao char="*" onClick={handleBtnClick} />
          </tr>
          <tr>
              <Botao char="4" onClick={handleBtnClick} />
              <Botao char="5" onClick={handleBtnClick} />
              <Botao char="6" onClick={handleBtnClick} />
              <Botao char="-" onClick={handleBtnClick} />
          </tr>
          <tr>
              <Botao char="1" onClick={handleBtnClick} />
              <Botao char="2" onClick={handleBtnClick} />
              <Botao char="3" onClick={handleBtnClick} />
              <Botao char="+" onClick={handleBtnClick} />
          </tr>
          <tr>
              <Botao char="0" onClick={handleBtnClick} />
              <Botao char="." onClick={handleBtnClick} />
              <Botao char="=" onClick={calcRes} sizeCol={2} />
          </tr>
        </table>
      </div>
    </div>
  )
}