import { MainLogin } from "./styled_home";
import { LeftLogin } from "./styled_home";
import { RightLogin } from "./styled_home";

function App() {
  return (
      <MainLogin>
        <LeftLogin>
          <h1>
            Faça login
            <br />E entre para nosso time
          </h1>
          <img
            src="/src/assets/astronaut-suit-animate.svg"
            alt="astronauta"
            className="astronauta"
          />
        </LeftLogin>
        <RightLogin>
          <div className="card-login">
            <h2>LOGIN</h2>
            <form className="form" action="">
              <label htmlFor="nome">Usuario</label>
              <input type="text" name="nome" id="nome" placeholder="Usuario" />
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                name="senha"
                id="senha"
                placeholder="Senha"
              />
            </form>
            <button type="btn-login">Login</button>
          </div>
        </RightLogin>
      </MainLogin>
  );
}

export default App;
