import { useQuery, gql } from "@apollo/client"
import { MouseEvent } from "react"
import CheckBox from "./checkBox"

    const FETCH_BOARDS = gql `
        query{
            fetchBoards{
                number
                writer
                title
                contents
            }
        }
    `

export default function StaticReoutingMovedPage() {

    const { data } = useQuery(FETCH_BOARDS)

    const qqq1 = (e) => {
        alert("1클릭 ")
    }

    const qqq4 = (e) => {
        e.stopPropagation()
        alert("4클릭 ")
    }

    console.log(data?.fetchBoards)
    return (
        <div>
            {
                data?.fetchBoards.map((fetchBoards: any) => 
                    (   
                        <div key={fetchBoards.number} id={fetchBoards.writer} onClick={qqq1}>
                            <CheckBox />
                            <span style={{ margin: "10px" }} onClick={qqq4}>{fetchBoards.number}</span>
                            <span style={{ margin: "10px" }}>{fetchBoards.title}</span> 
                            <span style={{ margin: "10px" }}>{fetchBoards.writer}</span>
                        </div>
                    ))
            }
            {/* <div>1번 게시글로 이동 완료되었습니다.</div>
            
            <div>작성자: {data?. data.fetchBoard.writer}</div>
            <div>제목: {data?. data.fetchBoard.title}</div>
            <div>내용: {data?. data.fetchBoard.contentsw}</div> */}
        </div>
    )
}
