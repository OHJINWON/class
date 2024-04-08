import { useMutation, gql } from "@apollo/client"
import { useState } from "react"

const 나의그래프큐엘셋팅 = gql`
    mutation createBoard ($writer: String, $title: String, $contents: String){

        createBoard(writer: $writer,title: $title, contents: $contents){
            _id
            number
            message
        }
    }
` 

export default function GraphqlMutationPage() {
    const [나의함수] = useMutation(나의그래프큐엘셋팅)

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
        console.log(result)
    }

    // 한 줄일떄는 괄호() 필요 없음
    return (
        <div>
            작성자: <input type="text" onChange={onChangeWriter}/>
            제목: <input type="text" onChange={onChangeTitle}/>
            내용: <input type="text" onChange={onChangeContents}/>
            <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
        </div>
    )
}