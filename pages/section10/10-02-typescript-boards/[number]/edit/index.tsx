import BoardWrite from "../../../../../src/components/units/board/10-writer/BoardWrite.container"
import { useQuery, gql } from "@apollo/client"
import { useRouter } from "next/router"

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

export default function GraphqlMutationPage() {
    
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            number:Number(router.query.number)
        }
    })
    // 수정하기
    // 한 줄일떄는 괄호() 필요 없음
    return (
        <div>
            <div>###################여기는 페이지입니다.###################</div>
            <BoardWrite isEdit={true} data={data}/>
            <div>###################여기는 페이지입니다.###################</div>
        </div>
    )
    
}