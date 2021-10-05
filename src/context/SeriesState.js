import { createContext, useReducer } from "react";
import { v4 } from "uuid";
import SeriesReducer from "./SeriesReducer";
import initialState from "../dummy-data/state";

export const SeriesContext = createContext(initialState);

export const SeriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SeriesReducer, initialState);

  const addSerie = (serie) => {
    dispatch({
      type: "ADD_SERIE",
      payload: { ...serie, id: v4() },
    });
  };

  const updateSerie = (serieToUpdate) => {
    dispatch({
      type: "UPDATE_SERIE",
      payload: serieToUpdate,
    });
  };

  const deleteSerie = (serieToDelete) => {
    dispatch({
      type: "DELETE_SERIE",
      payload: serieToDelete,
    });
  };

  return (
    <SeriesContext.Provider
      value={{
        addSerie,
        updateSerie,
        deleteSerie,
        series: state.series,
      }}
    >
      {children}
    </SeriesContext.Provider>
  );
};
