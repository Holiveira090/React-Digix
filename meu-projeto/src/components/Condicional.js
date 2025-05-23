import { useState } from "react"

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault(e)
        setUserEmail(email)
        console.log(userEmail)
    }
    function limparEmail(e) {
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre o seu email</h2>
            <form>
                <input type="email" placeholder="Digite o seu email..." onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" onClick={enviarEmail}>Enviar Email</button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuario é {userEmail}</p>
                        <button onClick={limparEmail}>Limpar email</button>
                    </div>
                )}
            </form>
        </div>
    )
}
export default Condicional