import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  return (
    <>
      <Header />
      <section>
        <div className="grid-cols-[repeat(auto-fit,minmax(225px, 1fr))] mx-auto grid max-w-7xl p-8">
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
    </>
  );
}

export default App;
