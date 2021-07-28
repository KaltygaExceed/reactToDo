import style from "./Header.module.css"

export default function Header({value}) {
    return (
        <header className={style.header}>{value}</header>
    )
}