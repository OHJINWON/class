import {BlueButton, RedInput} from './BoardWrite.style'

export default function BoardWriteUI({onChangeWriter, onChangeTitle, onChangeContents, onClickSubmit, isEdit, onClickUpdate, data, writer,title, contents}) {

    return(
        <div>
            <div>@@@@@@@@@@@@@@@@@@@ 여기는 프리젠터입니다. </div>
            <div>
                작성자: <RedInput type="text" onChange={onChangeWriter} defaultValue={data?.fetchBoard.writer}/>
                제목: <input type="text" onChange={onChangeTitle} defaultValue={data?.fetchBoard.title}/>
                내용: <input type="text" onChange={onChangeContents} defaultValue={data?.fetchBoard.contents}/>
                <BlueButton onClick={ isEdit ? onClickUpdate : onClickSubmit}>
                    {isEdit ? "수정" : "등록"}하기
                </BlueButton>
            </div>
            <div>@@@@@@@@@@@@@@@@@@@ 여기는 프리젠터입니다. </div>
        </div>
    )
}
export const apple = 3