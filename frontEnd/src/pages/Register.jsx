import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = ({ setUser }) => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (email && password) {
    //   try {
    //     const { data: userDoc } = await axios.post("/users/login", {
    //       email,
    //       password,
    //     });

    //     setUser(userDoc);
    //     setRedirect(true);
    //   } catch (error) {
    //     alert(`Deu um erro ao logar:${error.response.data}`);
    //   }
    // } else {
    //   alert("Você precisa preencher o E-mail e a Senha!");
    // }
  };

  if (redirect) return <Navigate to="/" />;

  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4 p-8"></div>
      <h1 className="text=3xl font-bold">Faça seu Cadastro</h1>

      <form
        action=""
        className="flex w-full flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-full border-gray-300 px-4 py-2"
        />
        <input
          type="email"
          placeholder="Digite se E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-full border-gray-300 px-4 py-2"
        />
        <input
          type="password"
          placeholder="Digite sua Senha"
          className="w-full rounded-full border-gray-300 px-4 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-p-400 w-full cursor-pointer rounded-full border-gray-300 px-4 py-2 font-bold text-white">
          Registrar
        </button>
      </form>

      <p>
        Já tem uma conta?{" "}
        <Link to="/login" className="font-semibold underline">
          Entre aqui
        </Link>
      </p>
    </section>
  );
};

export default Register;
