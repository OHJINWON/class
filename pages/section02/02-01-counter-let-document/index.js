import { useState } from "react"

export default function CounterLetDoucumentPage() {
    
    function onClickCountUp() {
        const count = Number(document.getElementById("number").innerText) + 1
        document.getElementById("number").innerText = count
    }

    function onClickCountDown() {
        const count = Number(document.getElementById("number").innerText) - 1
        document.getElementById("number").innerText = count
    }

    return (
        <div>
            <div id="number">0</div>
            <button onClick={onClickCountUp}>카운트 올리기!!!</button>
            <button onClick={onClickCountDown}>카운트 내리기!!!</button>
        </div>
    )
}