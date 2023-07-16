import { login } from "./utils";
import "./index.css";
import { useState } from "react";

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs para contorlar os inputs (useRef)
//
// Tarefas:
//   do - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
//   do - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
//   do - Desabilite o botão de Login equanto você está executando o login.
//   do - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
//   do - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState(null);
  const [requisicao, setRequisicao] = useState(false);

  const handleEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleSenha = (event) => {
    const { value } = event.target;
    setSenha(value);
  };

  const handleLogin = () => {
    setMessage(null);
    setRequisicao(true);

    login({ email: email, password: senha })
      .then(() => alert("Login efetuado com sucesso!"))
      .catch((err) => setMessage(err.message))
      .finally(() => setRequisicao(false));
  };

  return (
    <div className="wrapper">
      <div className="login-form">
        <h1>Login Form 🐞</h1>
        {
          /* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */
          message && <div className="errorMessage">{message}</div>
        }
        <div className="row">
          <label htmlFor={"email"}>Email</label>
          <input
            id={"email"}
            type={"email"}
            autoComplete="off"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="row">
          <label htmlFor={"password"}>Password</label>
          <input
            id={"password"}
            type={"password"}
            value={senha}
            onChange={handleSenha}
          />
        </div>

        <div className="button">
          <button
            disabled={email === "" || senha.length < 6 || requisicao}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
