export default function CheckBox() {
    const qqq2 = (e) => {
        alert("2클릭 ")
    }

    const qqq3 = (e) => {
        e.stopPropagation()
        alert("3클릭 ")
    }
    return (
        <span onClick={qqq2}>
            <input type="checkbox" onClick={qqq3}/>
        </span>
    )
}