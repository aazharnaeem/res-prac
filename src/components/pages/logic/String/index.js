import { useMemo, useState } from "react"
// import { debounce, throttle } from "lodash"


const String = () => {

    const [str, setStr] = useState('');
    const [revStr, setRevStr] = useState('');
    const [pal, setpal] = useState(false);
    const [same, setSame] = useState([])

    const changeHandler = (e) => {
        setStr(e.target.value);
    }

    // const throttleHan = useMemo(() => throttle(changeHandler, 100), [])
    // const debounceHan = useMemo(() => debounce(changeHandler, 100), [])

    const rev = (str) => {

        let arr = str.split('')
        let reverseString = ''
        for (var i = arr.length - 1; i >= 0; i--) {
            reverseString += arr[i];

        }
        setRevStr(reverseString)
    }


    const palindrome = (str) => {
        let arr = str.split('')
        let reverseString = ''
        for (var i = arr.length - 1; i >= 0; i--) {
            reverseString += arr[i];
        }
        if (reverseString == str) {
            setpal(true);
        }
        else {
            setpal(false);
        };
    };

    const findSame = (str) => {

        let arr = str.split('')
        for (var i = 0; i <= arr.length - 1; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    // setSame(
                    //     [...same, arr[j]]
                    // )
                    same.push(arr[j]);

                }
            }
        }
    }

    const submit = (e) => {
        e.preventDefault()
        rev(str);
        palindrome(str);
        findSame(str)

    }
    return (
        <div style={{
            margin: '0 auto',
            border: 'solid black 1px',
            maxWidth: 'fit-content',
            padding: "10px"
        }} >
            <form onSubmit={submit} >
                <input type='text'
                    placeholder="input a string to reverse"
                    value={str}
                    onChange={(e) => changeHandler(e)}
                />
                <br />
                <input
                    type='submit'
                    value='submit'
                />
            </form>
            <br />
            <div>
                String: <strong> {str}</strong> <br />
                ReverseString: <strong>{revStr}</strong><br />
                palindrome: <strong>{pal ? 'palindrome' : ''}</strong><br />
                Same: <strong>{
                    same.map((val, ind) => {
                        return (
                            <span key={ind}>
                                 ,{val}
                            </span>
                        )
                    })
                }</strong><br />
            </div>
        </div>
    )
}
export default String;