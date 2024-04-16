import Config from "react-native-config";
import axios from 'axios';


const weatherApiKey = '87cfe42082314c5db6843220241504';

interface IParams {
  cityName?: string;
  days?: number;
}

const forecastEndpoint = (params :any) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${params.cityName}&days=${params.days}&hours=24`;

const apiCall = async (endpoint :any) => {
  const options = {
    method: "GET",
    url: endpoint,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return {};
  }
};

export const fetchWeatherForecast = (params: IParams) => {
  console.log("🚀 ~ fetchWeatherForecast ~ params:", params)
  const forecastUrl = forecastEndpoint(params);
  console.log("🚀 ~ fetchWeatherForecast ~ forecastUrl:", forecastUrl)
  return apiCall(forecastUrl);
};