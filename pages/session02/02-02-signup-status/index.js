import { useState } from "react"

export default function SignupStatusPage() {

    const [email, setEamil] = useState("");
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")

    function onChangeEmail (e) {
        // console.log(e.target.value) // 이벤트 핸들러 함수
        setEamil(e.target.value)
    }

    function onChangePassword(e) {
        setPassword(e.target.value)
    }

    function onClickSignup() {
        // 1. 검증하기
        if(email.includes("@") === false) {
            // alert("이메일이 올바르지 않습니다.")
            // document.getElementById("myerror").innerText = "이메일이 올바르지 않습니다." 옛날방식
            setEmailError("이메일이 올바르지 않습니다.")

        } else {
        // 2. 백엔드 컴퓨터에 보내주기(백엔드 개발자가 만든 함수, 즉 API)
        // 3. 성공알람 보여주기
        alert("회원가입을 축하합니다.")
        }

    }

    return(
        <div>
            이메일: <input type="text" onChange={onChangeEmail} value={email}/>
            {/* <div>{errorMsg}</div> 옛날방식*/}
            <div>{emailError}</div>
            비밀번호: <input type="password" onChange={onChangePassword} value={password}/>
            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )
}