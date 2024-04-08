import { useQuery, gql } from "@apollo/client"

const FETCH_BOARD = gql `
        query{
            fetchBoard(number:7){
                number
                writer
                title
                contents
            }
        }
    `

export default function StaticReoutingMovedPage() {

    const { data } = useQuery(FETCH_BOARD)

    console.log(data)

    return(
        <div>
            <div>2번 게시글로 이동 완료되었습니다.</div>
            <div>작성자: {data?. data.fetchBoard.writer}</div>
            <div>제목: {data?. data.fetchBoard.title}</div>
            <div>내용: {data?. data.fetchBoard.contentsw}</div>
        </div>
    )
}
