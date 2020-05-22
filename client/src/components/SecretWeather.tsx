import React, { useCallback, useEffect, useState } from "react";

import ForecastTable from "./ForecastTable";
import { IconButton } from "@material-ui/core";
import Refresh from "@material-ui/icons/Refresh";
import { useAuth0 } from "../auth/Auth0Provider";

interface IForecast {
  date: Date;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

const SecretWeather = () => {
  const [forecastItems, setForecastItems] = useState<IForecast[]>([]);
  const { getTokenSilently } = useAuth0();

  const getWeather = useCallback(async () => {
    try {
      const token = await getTokenSilently();

      const response = await fetch("https://localhost:44364/weatherforecast", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        mode: "cors",
        cache: "no-cache",
      });

      const responseData = (await response.json()) as IForecast[];
      setForecastItems(responseData);
    } catch (error) {
      console.error(error);
    }
  }, [getTokenSilently]);

  useEffect(() => {
    getWeather();
  }, [getWeather]);

  return (
    <>
      <h1>
        Secret Weather from API
        <IconButton aria-label="refresh" onClick={getWeather}>
          <Refresh />
        </IconButton>
      </h1>
      {forecastItems.length > 0 && (
        <ForecastTable items={forecastItems}></ForecastTable>
      )}
    </>
  );
};

export default SecretWeather;
