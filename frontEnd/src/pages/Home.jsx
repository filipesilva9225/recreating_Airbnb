import React from "react";
import Item from "../components/Item";

const Home = () => {
  return (
    <section>
      <div className="grid-cols-[repeat(auto-fit,minmax(225px, 1fr))] mx-auto grid max-w-7xl gap-8 p-8">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
};

export default Home;
