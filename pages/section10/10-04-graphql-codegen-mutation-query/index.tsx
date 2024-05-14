import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"
import { IQuery, IQueryFetchBoardArgs } from "../../../src/commons/types/generated/types"

    const FETCH_BOARD = gql `
        query fetchBoard($number: Int){
            fetchBoard(number: $number){
                number
                writer
                title
                contents
            }
        }
    `

export default function StaticReoutingMovedPage() {

    const router = useRouter()

    const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables: {
            number:Number(router.query.id)
        }
    })

    console.log(data)

    return (
        <div>
            <div>{router.query.id}번 게시글로 이동 완료되었습니다.</div>
            <div>작성자: {data?.fetchBoard?.writer}</div>
            <div>제목: {data?.fetchBoard?.title}</div>
            <div>내용: {data?.fetchBoard?.contents}</div>
            
        </div>
    )
}
