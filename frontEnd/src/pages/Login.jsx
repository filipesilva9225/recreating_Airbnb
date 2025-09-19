import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("test2@gmail.com");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("test2@gmail.com");
  };
  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4 p-8"></div>
      <h1 className="text=3xl font-bold">Faça seu Login</h1>

      <form
        action=""
        className="flex w-full flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Digite se E-mail"
          className="w-full rounded-full border-gray-300 px-4 py-2"
        />
        <input
          type="password"
          placeholder="Digite sua Senha"
          className="w-full rounded-full border-gray-300 px-4 py-2"
        />
        <button className="bg-p-400 w-full cursor-pointer rounded-full border-gray-300 px-4 py-2 font-bold text-white">
          Login
        </button>
      </form>

      <p>
        Ainda não tem uma conta?{" "}
        <Link to="/register" className="font-semibold underline">
          Registre-se aqui
        </Link>
      </p>
    </section>
  );
};

export default Login;
