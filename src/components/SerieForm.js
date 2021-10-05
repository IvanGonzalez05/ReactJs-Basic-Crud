import React, { useState, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { SeriesContext } from "../context/SeriesState";

const SerieForm = () => {
  const [serie, setSerie] = useState({
    id: "",
    name: "",
    author: "",
    releaseDate: "",
  });

  const { series, addSerie, updateSerie } = useContext(SeriesContext);
  const history = useHistory();
  const params = useParams();

  const handleChange = (e) => {
    setSerie({ ...serie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) updateSerie(serie);
    else addSerie(serie);

    history.push("/");
  };

  useEffect(() => {
    const serieWasFound = series.find(
      (serie) => serie.id === parseInt(params.id)
    );

    if (serieWasFound) {
      setSerie({
        id: serieWasFound.id,
        name: serieWasFound.name,
        author: serieWasFound.author,
        releaseDate: serieWasFound.releaseDate,
      });
    }
  }, [params.id, series]);

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-md-column justify-content-md-center align-items-md-center
      bg-light text-dark h-100
      "
    >
      <h2 className="text-3xl mb-7">
        {serie.id ? "Update " : "Create "} a Serie
      </h2>
      <label htmlFor="name" className="mt-4">
        Serie Name:
      </label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
        value={serie.name}
        className="form-control w-25"
      />

      <label htmlFor="author">Author:</label>
      <input
        type="text"
        name="author"
        id="author"
        onChange={handleChange}
        value={serie.author}
        className="form-control w-25"
      />

      <label htmlFor="releaseDate">Release Date:</label>
      <input
        type="number"
        name="releaseDate"
        id="releaseDate"
        onChange={handleChange}
        value={serie.releaseDate}
        className="form-control w-25"
      />

      <div className="mt-4">
        <button
          type="submit"
          className="btn btn-secondary mx-4"
          onClick={() => history.push("/")}
        >
          Go back
        </button>
        <button type="submit" className="btn btn-info mx-4">
          {serie.id ? "Update Serie" : "Create Serie"}
        </button>
      </div>
    </form>
  );
};

export default SerieForm;
