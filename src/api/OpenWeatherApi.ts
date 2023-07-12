import axios, {AxiosResponse} from "axios";
import {ForecastData} from "../data/ForecastData.tsx";


class OpenWeatherApi {
    static cityCode = "1819730"
    static appid = "336226ba578c3b386bead938bce9b09d"
    static apiUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${OpenWeatherApi.cityCode}&units=metric&appid=${OpenWeatherApi.appid}`
    static fetchForecastWeatherData = ((setApiResult2ForecastData: (forecastResultData: ForecastData) => void) => {
            axios.get(OpenWeatherApi.apiUrl)
                .then(
                    (response: AxiosResponse<ForecastData>) => setApiResult2ForecastData(response.data)
                )
                .catch(
                    (err) => console.error(err)
                )
        }
        )
}
export default OpenWeatherApi