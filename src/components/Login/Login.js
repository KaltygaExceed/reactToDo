import style from "./Login.module.css"
import Header from "../Header/Header";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {LoginDis} from "../../redux/actions/todosActions"

export default function Login() {
    const dispatch = useDispatch()

    const loginFunc = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        dispatch(LoginDis(
            formData.get('email'),
            formData.get('password')
        ))
    }

    return (
        <div>
            <Link className={style.aboutLink} to="/about"> About </Link>
            <Header
                value='Login'
            />
            <div className={style.logPage} onSubmit={loginFunc}>
                <form>
                    <input type='email' id='email' name='email' placeholder='Enter your email'/>
                    <input type='password' id='password' name='password' placeholder='Enter your password'/>
                    <button className={style.loginButton} name='log'>Login</button>
                    <Link className={style.link} to="/registration"> Registration </Link>
                </form>
            </div>
        </div>
    )
}