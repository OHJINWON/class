import { ChangeEvent, MouseEvent } from 'react'

export interface IBoardWriteProps {
    isEdit: boolean
    data?: any
}
export interface Imyvariables {
    number: number
    writer?: string
    title?: string
    contents?: string
}
export interface IBoardWriteUI {
    onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (e: ChangeEvent<HTMLInputElement>) => void
    onClickSubmit: (e: MouseEvent<HTMLButtonElement>) => void
    onClickUpdate: (e: MouseEvent<HTMLButtonElement>) => void
    isEdit: boolean
    data?: any
}