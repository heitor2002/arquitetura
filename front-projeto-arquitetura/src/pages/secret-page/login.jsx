import Head from "next/head";

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="login-background">
        <div className="container">
          <div className="box-login">
            <h2>Página de login</h2>
            <form>
              <div>
                <label>Usuário:</label>
                <input type="text" />
              </div>
              <div>
                <label>Senha:</label>
                <input type="password" />
              </div>
              <div>
                <input type="submit" value={"Entrar"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
