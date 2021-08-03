import style from "./Login.module.css"
import Header from "../components/Header/Header";
import axios from "axios";

export default function Login() {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        try {
           const response = await axios.post('http://localhost:8000/registration',
                {
                    username: formData.get('email'),
                    password: formData.get('password')
                })
            alert(response.data.message)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Header
                value='Login'
            />
            <div className={style.logPage}>
                <form onSubmit={handleSubmit}>
                        <input type='email' id='email' name='email' placeholder='Enter your email'/>
                        <input type='password' id='password' name='password' placeholder='Enter your password'/>
                    <button className={style.loginButton}>Registration</button>
                </form>
            </div>
        </div>
    )
}