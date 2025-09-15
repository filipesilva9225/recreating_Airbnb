import React from "react";

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-3">
      <img src="" alt="" className="aspect-square rounded-2xl object-cover" />

      <div>
        <h3 className="text-xl font-semibold">Cabo Frio, Rio de Janeiro</h3>
        <p className="truncate text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quas
          quam architecto quos ea enim repellendus necessitatibus nam?
          Necessitatibus, aut qui. Aliquam ipsa iste optio id doloremque, qui
          modi assumenda.
        </p>
      </div>

      <p>
        <span className="font-semibold">R$ 550</span> por noite
      </p>
    </a>
  );
};

export default Item;
