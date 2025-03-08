import { useState, useEffect } from "react";
import {
  evaluate,
  factorial,
  pow,
  sqrt,
  sin,
  cos,
  tan,
  log10,
  log,
  pi,
  e,
} from "mathjs";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  useEffect(() => {
    const storedHistory =
      JSON.parse(localStorage.getItem("calculatorHistory")) || [];
    setHistory(storedHistory);
  }, []);

  useEffect(() => {
    localStorage.setItem("calculatorHistory", JSON.stringify(history));
  }, [history]);

  const handleClick = (value) => {
    if (["sin", "cos", "tan"].includes(value)) {
      setInput((prev) => prev + `${value}(`);
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      let finalExpression = input
        .replace(/x!/g, "!")
        .replace(/π/g, pi)
        .replace(/e/g, e)
        .replace(/√/g, "sqrt")
        .replace(/xⁿ/g, "^")
        .replace(/x²/g, "^2")
        .replace(/x³/g, "^3")
        .replace(/sin\(/g, "sin(")
        .replace(/cos\(/g, "cos(")
        .replace(/tan\(/g, "tan(")
        .replace(/log\(/g, "log10(");

      if (/\/0([^\d]|$)/.test(finalExpression)) {
        setResult("Error");
        return;
      }

      const evaluated = evaluate(finalExpression);
      if (evaluated === Infinity || evaluated === -Infinity) {
        setResult("Error");
      } else {
        setResult(evaluated.toString());
        setHistory((prev) => [evaluated.toString(), ...prev]);
        setHistoryIndex(-1);
      }
    } catch (error) {
      setResult("Error");
    }
  };

  const handleExponentiation = (exponent) => {
    if (/\d|\)/.test(input.slice(-1))) {
      setInput((prev) => prev + `^${exponent}`);
    } else {
      setResult("Error");
    }
  };

  const showPreviousResult = () => {
    if (history.length > 0 && historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setInput(history[newIndex]);
    }
  };

  const buttons = [
    "AC",
    "DEL",
    "Prev",
    "Ans",
    "Rad",
    "1",
    "2",
    "3",
    "+",
    "*",
    "4",
    "5",
    "6",
    "-",
    "/",
    "7",
    "8",
    "9",
    "=",
    "0",
    ".",
    "%",
    "Rad",
    "Deg",
    "x!",
    "(",
    ")",
    "Inv",
    "sin",
    "cos",
    "tan",
    "ln",
    "log",
    "π",
    "e",
    "√",
    "x²",
    "x³",
    "xⁿ",
  ];

  return (
    <div className="bg-gradient-to-r from-purple-100 to-blue-200 p-8 rounded-3xl shadow-2xl w-full max-w-2xl text-center text-gray-800 border border-purple-300">
      <div className="mb-6 text-4xl bg-white p-4 rounded-lg overflow-x-auto shadow-inner border border-gray-300">
        {input || "0"}
      </div>
      <div className="mb-6 text-3xl text-purple-700 font-bold">{result}</div>

      <div className="grid grid-cols-5 gap-3">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className={`bg-gray-200 text-gray-800 py-6 rounded-xl hover:bg-gray-300 transition shadow-lg hover:scale-105 active:scale-95 text-lg ${
              btn === "=" ? "col-span-2" : ""
            }`}
            onClick={() => {
              if (btn === "=") calculateResult();
              else if (btn === "AC") handleClear();
              else if (btn === "DEL") handleBackspace();
              else if (btn === "x²") handleExponentiation(2);
              else if (btn === "x³") handleExponentiation(3);
              else if (btn === "Prev") showPreviousResult();
              else handleClick(btn);
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
