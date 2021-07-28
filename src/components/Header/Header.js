import style from "./Header.module.css"

export default function Header(props) {
    return (
        <header className={style.header}>{props.value}</header>
    )
}