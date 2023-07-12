import ForecastPageTable from "./ForecastPageTable.tsx";
import ForecastPageHeader from "./ForecastPageHeader.tsx";
import React from "react";
import {Container} from "react-bootstrap";
import {ForecastData} from "../../../../data/ForecastData.tsx";
import OpenWeatherApi from "../../../../api/OpenWeatherApi.ts";
import * as moment from "moment/moment";
import WeatherChart from "./WeatherChart.tsx";
import {ChartData} from "../../../../data/ChartData.tsx";

type Props  =  unknown

type State = {
    forecastData: ForecastData | undefined
    chartData: ChartData[] | undefined
    updateTime: string | undefined
}

class ForecastPageWrapper extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state =    {
            forecastData: undefined,
            chartData: undefined,
            updateTime: undefined
        }
    }

    setApiResult2ForecastData = (forecastResultData: ForecastData) =>  {
        this.setState({
            forecastData: forecastResultData,
            chartData: forecastResultData.list.map(value => (
                {
                    name: moment.unix(value.dt).format("DD-MM-YYYY HH:mm:ss"),
                    temperature: value.main.temp,
                    humidity: value.main.humidity
                }
                )
            ),
            updateTime: moment().format("DD-MM-YYYY HH:mm:ss")
        }
        )
    }

    fetchForecastWeatherData = () => {
        OpenWeatherApi.fetchForecastWeatherData(this.setApiResult2ForecastData);
    }

    componentDidMount() {
        this.fetchForecastWeatherData()
    }

    render() {
        return (
            <Container>
                <ForecastPageHeader updateTime={this.state.updateTime} fetchForecastWeatherData={this.fetchForecastWeatherData}/>
                <WeatherChart data={this.state.chartData}/>
                <ForecastPageTable forecastData={this.state.forecastData}/>
            </Container>
        )
    }
}

export default ForecastPageWrapper