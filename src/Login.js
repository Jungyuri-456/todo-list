import { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  //   console.log(name);
  function handleLogin() {
    setIsLogin(true);
  }

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        maxWidth: "500px",
        marginLeft: "auto",
        marginRight: "auto",
      }}>
      {isLogin ? (
        <h2>{name}님, 환영해요!</h2>
      ) : (
        <>
          <input
            type="text"
            placeholder="이름 입력"
            value={name}
            onChange={(e) => setName(e.target.value)}></input>
          <button onClick={handleLogin}>로그인</button>
        </>
      )}
      {/* <h2>{name}님, 환영해요!</h2>
      <input
        type="text"
        placeholder="이름 입력"
        value={name}
        onChange={(e) => setName(e.target.value)}></input>
      <button onClick={handleLogin}>로그인</button> */}
    </div>
  );
}
export default Login;
