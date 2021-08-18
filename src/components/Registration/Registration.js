import style from "./Registration.module.css"
import Header from "../Header/Header";
import {Link} from "react-router-dom";
import {RegistrationDis} from "../../redux/actions/todosActions";
import {useDispatch} from "react-redux";

export default function Registration() {
    const dispatch = useDispatch()


    const registrationFunc = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        dispatch(RegistrationDis(
            formData.get('email'),
            formData.get('password')
        ))
    }


    return (
        <div>
            <Link className={style.aboutLink} to="/about"> About </Link>
            <Header
                value='Registration'
            />
            <div className={style.regPage}>
                <form onSubmit={registrationFunc}>
                    <input type='email' id='email' name='email' placeholder='Enter your email'/>
                    <input type='password' id='password' name='password' placeholder='Enter your password'/>
                    <button className={style.regButton} name='reg'>Registration</button>
                    <Link className={style.link} to="/login"> Login </Link>
                </form>
            </div>
        </div>
    )
}