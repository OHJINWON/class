import {BlueButton, RedInput} from './BoardWrite.style'

export default function BoardWriteUI({onChangeWriter, onChangeTitle, onChangeContents, onClickSubmit}) {

    return(
       <div>
            <div>@@@@@@@@@@@@@@@@@@@ 여기는 프리젠터입니다. </div>
            <div>
                작성자: <RedInput type="text" onChange={onChangeWriter}/>
                제목: <input type="text" onChange={onChangeTitle}/>
                내용: <input type="text" onChange={onChangeContents}/>
                <BlueButton onClick={onClickSubmit}>GRAPHQL-API 요청하기</BlueButton>
            </div>
            <div>@@@@@@@@@@@@@@@@@@@ 여기는 프리젠터입니다. </div>
       </div>
    )
}
export const apple = 3