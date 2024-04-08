export default function TypescriptPage() {
    // 타입스크립트에는 타입추룬이 있음
    // let aaa = "안녕하세요"
    // aaa = 3;

    // // 타입명시
    // let bbb : string= "반갑습니다"
    // bbb = 10

    // //타입명시가 필요한 상황
    // let ccc : number | string= 1000
    // ccc = "1000원"

    // //숫자타입
    // let ddd : number= 10
    // ddd = "철수"

    // // 블린타입
    // let eee : boolean = true
    // eee = false
    // eee = "false" //true로 작동함

    // // 배열타입
    // let fff : number[] = [1,2,3,4,5, "안녕하세요"]
    // let ggg : string[] = ["철수", "영희", "훈이", 10];
    // let hhh : (number | string)[] = ["철수", "영희", 10];

    // //객체타입
    // interface Iprofile {
    //     name: string
    //     age : string | number
    //     school : string
    //     hobby ?: string
    //     // ?있어도 되고 없어도 되고
    // }

    // const profile : Iprofile = {
    //     name : "철수",
    //     age : 8,
    //     school : "다람쥐초등학교",
    // }

    // profile.name = "후니" // 타입추룬으로 이것만 가능
    // profile.age = "8살"
    // profile.hobby = "수f영"

    // // 함수타입
    // function add(num1:number , num2:number, unti:string): string {
    //     return num1 + num2 + unti
    // }
    // const result = add(1000, 2000, "원") //결과의 리턴 타입도 예측 가능!!

    // const add2 = (num1:number , num2:number, unti:string): string => {
    //     return num1 + num2 + unti
    // }
    // const result2 = add2(1000, 2000, "원") //결과의 리턴 타입도 예측 가능!!

    // // any타입
    // let qqq: any = "철수" // 자바스크립트와 동일!
    // qqq = 123
    // qqq = true

    // return <></>
}