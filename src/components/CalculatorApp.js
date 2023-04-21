import React from "react";
import styles from "./CalculatorApp.Styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { loadButtons, loadAns, loadClear, loadBackspace } from "../redux/calculatorRedux/Calculator.actions";
import { CALCULATOR_KEY } from "../redux/calculatorRedux/Calculator.reducer";

const CalculatorApp = () => {
    const dispatch = useDispatch()

    const handleAnswer = (e) => {
        e.preventDefault()

        dispatch(loadAns())
    }

    const viewCalculator = useSelector((state) => {
        return state[CALCULATOR_KEY]
    })

    return (
        <React.Fragment>
            <section>
                <div style={styles.container}>
                    <div style={styles.header}>
                        <p>CALCULATOR</p>
                    </div>

                    <div style={styles.input}>
                        <input
                            type="text"
                            placeholder="0"
                            value={(viewCalculator.ans).length === 0 ? viewCalculator.number : viewCalculator.ans}
                            style={styles.input2}
                        />
                    </div>

                    <div style={styles.button}>
                        <button 
                            onClick={() => dispatch(loadClear())} 
                            style={styles.buttonAC}
                        >AC</button>
                        <button 
                            onClick={() => dispatch(loadBackspace())}
                            style={styles.buttonC}
                        >C</button>
                        <button 
                            onClick={() => dispatch(loadButtons('+'))}
                            style={styles.buttonItem}
                        >+</button>
                    </div>
                    <div style={styles.button}>
                        <button 
                            onClick={() => dispatch(loadButtons(7))}
                            style={styles.buttonItem}
                        >7</button>
                        <button 
                            onClick={() => dispatch(loadButtons(8))}
                            style={styles.buttonItem}
                        >8</button>
                        <button 
                            onClick={() => dispatch(loadButtons(9))}
                            style={styles.buttonItem}
                        >9</button>
                        <button 
                            onClick={() => dispatch(loadButtons('-'))}
                            style={styles.buttonItem}
                        >-</button>
                    </div>
                    <div style={styles.button}>
                        <button 
                            onClick={() => dispatch(loadButtons(4))}
                            style={styles.buttonItem}
                        >4</button>
                        <button 
                            onClick={() => dispatch(loadButtons(5))}
                            style={styles.buttonItem}
                        >5</button>
                        <button 
                            onClick={() => dispatch(loadButtons(6))}
                            style={styles.buttonItem}
                        >6</button>
                        <button 
                            onClick={() => dispatch(loadButtons('*'))}
                            style={styles.buttonItem}
                        >*</button>
                    </div>
                    <div style={styles.button}>
                        <button 
                            onClick={() => dispatch(loadButtons(1))}
                            style={styles.buttonItem}
                        >1</button>
                        <button 
                            onClick={() => dispatch(loadButtons(2))}
                            style={styles.buttonItem}
                        >2</button>
                        <button 
                            onClick={() => dispatch(loadButtons(3))}
                            style={styles.buttonItem}
                        >3</button>
                        <button 
                            onClick={() => dispatch(loadButtons('/'))}
                            style={styles.buttonItem}
                        >/</button>
                    </div>
                    <div style={styles.button}>
                        <button 
                            onClick={() => dispatch(loadButtons('.'))}
                            style={styles.buttonItem}
                        >.</button>
                        <button 
                            onClick={() => dispatch(loadButtons(0))}
                            style={styles.buttonItem}
                        >0</button>
                        <button 
                            onClick={handleAnswer}
                            style={styles.buttonEqual}
                        >=</button>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default CalculatorApp