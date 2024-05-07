import { useMutation } from "@apollo/client"
import { useState } from "react"
import { 나의그래프큐엘셋팅, UPDATE_BOARD } from './BoardWrite.queries' // export는 골라서 가져오기 가능
import BoardWriteUI from "./BoardWrite.presenter" // export default로 한개만 가져오기
import { useRouter } from "next/router"
// import asdasd from "./BoardWrite.presenter" // export default로 이름 바꿔서 가져오기
// import asdasd, { apple } from "./BoardWrite.presenter" // export default와 export 함께 가져오기

// import * as S from './BoardWrite.style' // export 한방에 다 가져오기
// S.BlueButton // export 한방에 다 가져오기
// S.RedInput // export 한방에 다 가져오기

export default function BoardWrite({isEdit}) {

    const [나의함수] = useMutation(나의그래프큐엘셋팅)
    const [updateBoard] =useMutation(UPDATE_BOARD)
    const router = useRouter()

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const onChangeWriter = (e) => {
        setWriter(e.target.value)
    }
    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const onChangeContents = (e) => {
        setContents(e.target.value)
    }

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: { // variables 이게 $역활을 함
                writer: writer,
                title: title,
                contents: contents 
            }
        })
        router.push(`/section09/09-03-boards/${result.data.createBoard.number}`)
    }

    const onClickUpdate = async() => {
        const result = await updateBoard({
            variables:{
                number: Number(router.query.number),
                writer: writer,
                title: title,
                contents: contents 
            }
        })
        console.log(result)
        router.push(`/section09/09-03-boards/${router.query.number}`)
    }

    return(
        <div>
            <div>$$$$$$$$$$$$$$$ 여기는 컨테이너입니다.</div>
            <BoardWriteUI isEdit={isEdit} onChangeWriter={onChangeWriter} onChangeTitle={onChangeTitle} onChangeContents={onChangeContents} onClickSubmit={onClickSubmit} onClickUpdate={onClickUpdate}/>
            <div>$$$$$$$$$$$$$$$ 여기는 컨테이너입니다.</div>
        </div>

    )
}