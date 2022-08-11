import { useRef } from "react"


const UseRef = () => {
    const textInput = useRef();

    const focusTextInput = () => textInput.current.focus();
    // console.log(focusTextInput)

    return (
        <div>
            <input type="text" ref={textInput} />
            <button onClick={focusTextInput}>Focus the text input</button>
        </div>
    );
}

export default UseRef