import axios from "axios"

export default function RestGetPage(){

    function onClickAsync() {
        const result = axios.get("https://koreanjson.com/posts/1")
        console.log("비동기", result) // Promise
    }

    // async function onClickSync() {
    //     const result = await axios.get("https://koreanjson.com/posts/1") => 함수 중복 선언 문제
    //     console.log("동기", result) // 제데로된 결과 => {title : "....."}
    //     console.log(result.data.title)
    // }
    const onClickSync = async () => {
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log("동기", result) // 제데로된 결과 => {title : "....."}
        console.log(result.data.title)
    }

    return(
        <div>
            <button onClick={onClickAsync}>REST-API(비동기) 요청</button>
            <button onClick={onClickSync}>REST-API(동기) 요청</button>
        </div>
    )
}