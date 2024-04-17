import { useMutation } from "@apollo/client"
import { useEffect, useState } from "react"
import { 나의그래프큐엘셋팅 } from './BoardWrite.queries' // export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter" // export default로 한개만 가져오기
// import asdasd from "./BoardWrite.presenter" // export default로 이름 바꿔서 가져오기
// import asdasd, { apple } from "./BoardWrite.presenter" // export default와 export 함께 가져오기

// import * as S from './BoardWrite.style' // export 한방에 다 가져오기
// S.BlueButton // export 한방에 다 가져오기
// S.RedInput // export 한방에 다 가져오기

export default function BoardWrite() {

    // useEffect(() => {
    //     if(writer && title && contents) {
    //         console.log("다 했음")
    //         setIsActive(true)
    //     } else {
    //         console.log("없음")
    //         setIsActive(false)
    //     }
    // })

    const [isActive, setIsActive] = useState(false)

    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const onChangeWriter = (e) => {
        setWriter(e.target.value)
        if(e.target.value && title && contents) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    const onChangeTitle = (e) => {
        setTitle(e.target.value)
        if(writer && e.target.value && contents) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }
    const onChangeContents = (e) => {
        setContents(e.target.value)
        if(writer && title && e.target.value) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    // console.log(writer, title, contents)
    

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: { // variables 이게 $역활을 함
                writer: writer,
                title: title,
                contents: contents 
            }
        })
        console.log(result)
    }

    return(
        <div>
            <div>$$$$$$$$$$$$$$$ 여기는 컨테이너입니다.</div>
            <BoardWriteUI isActive={isActive} onChangeWriter={onChangeWriter} onChangeTitle={onChangeTitle} onChangeContents={onChangeContents} onClickSubmit={onClickSubmit}/>
            <div>$$$$$$$$$$$$$$$ 여기는 컨테이너입니다.</div>
        </div>

    )
}