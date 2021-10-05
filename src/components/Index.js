import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SeriesContext } from "../context/SeriesState";

const Index = () => {
  const { series, deleteSerie } = useContext(SeriesContext);
  const keys = Object.keys(series[0]);

  return (
    <div className="bg-light text-dark h-100">
      <Link
        to="/add"
        className="btn btn-primary position-absolute top-0 start-50 translate-middle-x"
      >
        Add serie
      </Link>
      <table className="table table-striped table-hover w-50 mx-auto my-5">
        <thead className="table-dark">
          <tr className="table-headers">
            {keys.map((key) => (
              <th className="table-headers__header" key={key}>
                {key}
              </th>
            ))}
            <th className="">Edit</th>
            <th className="table-headers__header">Delete</th>
          </tr>
        </thead>
        <tbody>
          {series.map((serie) => (
            <tr className="table-rows" key={serie.id}>
              <td className="row-content">{serie.id}</td>
              <td className="row-content">{serie.name}</td>
              <td className="row-content">{serie.author}</td>
              <td className="row-content">{serie.releaseDate}</td>
              <td>
                <Link className="btn btn-success" to={`/edit/${serie.id}`}>
                  Edit
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteSerie(serie.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
