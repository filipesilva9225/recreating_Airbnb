import { useState } from "react";

const NewPlaces = () => {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [photos, setPhotos] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="w=full flex flex-col">
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="ml-2 text-2xl font-bold">
          Títulos
        </label>
        <input
          id="title"
          className="rounded-full border-gray-300 py-2 pr-6 pl-6"
          type="text"
          placeholder="Digite o Título do seu Anúncio"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="city" className="ml-2 text-2xl font-bold">
          Cidade e País
        </label>
        <input
          id="city"
          className="rounded-full border-gray-300 py-2 pr-6 pl-6"
          type="text"
          placeholder="Digite a Cidade e País seu Anúncio"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="photos" className="ml-2 text-2xl font-bold">
          Fotos
        </label>

        <div className="flex gap-2">
          <input
            className="grow rounded-full border-gray-300 py-2 pr-6 pl-6"
            type="text"
            placeholder="Adicione uma Foto pelo link dela"
            id="photos"
            value={photos}
            onChange={(e) => setPhotos(e.target.value)}
          />
          <button className="cursor-pointer rounded-full border border-gray-300 bg-gray-100 py-2 pr-6 pl-6 transition hover:bg-gray-300">
            Enviar Fotos\
          </button>
        </div>

        <div className="grid-col mt-2 grid gap-4">
          <label htmlFor="file">
            <input className="hidden" type="file" id="file" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
              />
            </svg>
            Upload
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="description" className="ml-2 text-2xl font-bold">
          Descrição
        </label>
        <textarea
          id="description"
          className="h-56 resize-none rounded-2xl border-gray-300 py-2 pr-6 pl-6"
          placeholder="Digite a descrição do seu anuncio"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="perks" className="ml-2 text-2xl font-bold">
          Comodidades
        </label>

        <Perks />
      </div>
    </form>
  );
};

export default NewPlaces;
