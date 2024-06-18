import { UpCircleOutlined } from "@ant-design/icons/lib/icons";
import styled from "@emotion/styled";
import { MouseEvent } from "react";

const MyIcon = styled(UpCircleOutlined)`
    color: red;
    font-size: 50px;
`

export default function LibrayIconPage(): JSX.Element {
    const onClickDelete = (e: MouseEvent<HTMLDivElement>): void => {
        console.log(e.currentTarget.id)
    }
    return (
        <div id="삭제할게시글ID" onClick={onClickDelete}>
            <MyIcon />
        </div>
    )
}