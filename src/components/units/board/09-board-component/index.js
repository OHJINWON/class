export default function BoardComponent({isEdit}) {
    return(
        <div>
            <h1>{isEdit ? "수정" : "등록"}페이지</h1>
            제목: <input type="text" /><br/>
            내용: <input type="text" /><br/>
            <button>{isEdit ? "수정" : "등록"}하기</button>
        </div>
    )   
}