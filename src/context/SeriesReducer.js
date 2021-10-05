export default function seriesReducer(state, action) {
  switch (action.type) {
    case "ADD_SERIE":
      return {
        series: [...state.series, action.payload],
      };
    case "UPDATE_SERIE": {
      const dataToSet = action.payload;

      const updatedSeries = state.series.map((serie) => {
        if (serie.id === dataToSet.id) return dataToSet;
        else return serie;
      });

      return {
        ...state,
        series: updatedSeries,
      };
    }
    case "DELETE_SERIE": {
      const toDelete = action.payload;
      return {
        ...state,
        series: state.series.filter((serie) => serie.id !== toDelete),
      };
    }
    default:
      return {
        ...state,
      };
  }
}
