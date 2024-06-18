import { useQuery, gql } from "@apollo/client"
import { MouseEvent } from "react"

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

    const onClickAlert = (e: MouseEvent<HTMLDivElement>) => {
            // alert(`${e.target.id}님이 작성한 글입니다.`)
            alert(e.currentTarget.id + "님이 작성한 글입니다.")
    }

    const qqq = (e) => {
        alert("클릭 타이틀")
    }

    console.log(data?.fetchBoards)
    return (
        <div>
            {
                data?.fetchBoards.map((fetchBoards: any) => 
                    (
                        <div key={fetchBoards.number} id={fetchBoards.writer} onClick={onClickAlert}>
                            <span>
                                <input type="checkbox"/>
                            </span>
                            <span style={{ margin: "10px" }}>{fetchBoards.number}</span>
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
