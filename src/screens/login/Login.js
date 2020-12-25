import './login.css'

const Login = () => {
    return (
        <div className={'container'}>
            <div className={'card'}>
                <div className={'title'}>
                    <span className={'title-text'}>Login</span>
                </div>
                <div className={'inputs'}>
                    <input placeholder={'Login'}/>
                    <input type={'password'} placeholder={'Password'}/>
                </div>
                <div className={'actions'}>
                    <div className={'auth'}>
                        <span>Se connecter</span>
                    </div>
                    <div className={'register'}>
                        <span>S'inscrire</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;
