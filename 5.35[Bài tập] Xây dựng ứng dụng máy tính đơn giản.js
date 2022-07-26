import React, {useState} from 'react';

const Calculator = () => {
    let [InputNumber, setFirstNumber] = useState({firstNumber: '', secondNumber: ''});
    let [result, setResult] = useState("")
    const handleOnchange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFirstNumber({...InputNumber, [name]: value})
    }

    const Calculate = (operation) => {
        if (operation === "/" && InputNumber.secondNumber === "0") {
            setResult("invalid input")
        } else {
            // eslint-disable-next-line no-eval
            setResult(eval(`${InputNumber.firstNumber}
            ${operation}
            ${InputNumber.secondNumber}`))
        }
    }
    return (
        <div>
            <input type="number"
                   placeholder="Number"
                   name="firstNumber"
                   value={InputNumber.firstNumber}
                   onChange={handleOnchange}/>
            <br/>
            <input
                type="number"
                placeholder="Number"
                name="secondNumber"
                value={InputNumber.secondNumber}
                onChange={handleOnchange}
            />
            <p>Results: {result}</p>
            <button type="button" name="calculate"
                    onClick={() => {
                        Calculate('+')
                    }}
            >+
            </button>
            <button type="button" name="calculate"
                    onClick={() => {
                        Calculate('-')
                    }}
            >-
            </button>
            <button type="button" name="calculate"
                    onClick={() => {
                        Calculate('*')
                    }}
            >X
            </button>
            <button type="button" name="calculate"
                    onClick={() => {
                        Calculate('/')
                    }}
            >/
            </button>
        </div>
    );
};

export default Calculator;