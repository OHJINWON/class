import { useQuery, gql, useMutation } from "@apollo/client"
import { Fragment, useEffect } from "react"

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

    const DELETE_BOARD = gql `
        mutation deleteBoard($number: Int){
            deleteBoard(number: $number)
            {
                message
            }
        }
    `

export default function StaticReoutingMovedPage() {

    const { data } = useQuery(FETCH_BOARDS)
    const [deleteBoard] = useMutation(DELETE_BOARD)

    const onClickDelete = (e) => {
        deleteBoard({
                variables:{
                    number : Number(e.target.id)
                },
                refetchQueries: [{query: FETCH_BOARDS}]
        })
    }

    console.log(data?.fetchBoards)
    // console.log("deleteBoard", deleteBoard)
    return (
        <div>
            {
                data?.fetchBoards.map(fetchBoards => 
                    (
                        // 특별한 이유가 없으면? Fragment(<></>)로 감싸자 <div />는 1개 더 그려야되서 조금 느려짐
                        // 1. 프레드먼트란? <></>, <Fragment></Fragment>
                        // 2. 프레그먼트에 key 입력하는 방법? <Fragment key={fetchBoards.number}></Fragment>
                        // <Fragment key={fetchBoards.number}></Fragment>
                        <div key={fetchBoards.number}>
                            <span>
                                <input type="checkbox"/>
                            </span>
                            <span style={{ margin: "10px" }}>{fetchBoards.number}</span>
                            <span style={{ margin: "10px" }}>{fetchBoards.title}</span> 
                            <span style={{ margin: "10px" }}>{fetchBoards.writer}</span>
                            <span>
                                {/* <input type="button" value={fetchBoards.number}/> */}
                                <button id={fetchBoards.number} onClick={onClickDelete}>삭제</button>
                            </span>
                        </div>
                    )
                )
            }
            {/* <div>1번 게시글로 이동 완료되었습니다.</div>
            
            <div>작성자: {data?. data.fetchBoard.writer}</div>
            <div>제목: {data?. data.fetchBoard.title}</div>
            <div>내용: {data?. data.fetchBoard.contentsw}</div> */}
        </div>
    )
}