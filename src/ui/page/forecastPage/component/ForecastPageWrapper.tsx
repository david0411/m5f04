import ForecastPageTable from "./ForecastPageTable.tsx";
import ForecastPageHeader from "./ForecastPageHeader.tsx";
import React from "react";
import {Container} from "react-bootstrap";
import {ForecastData} from "../../../../data/ForecastData.ts";
import OpenWeatherApi from "../../../../api/OpenWeatherApi.ts";
import * as moment from "moment/moment";

type Props  =  unknown

type State = {
    forecastData: ForecastData | undefined
    updateTime: string | undefined
}

class ForecastPageWrapper extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state =    {
            forecastData: undefined,
            updateTime: undefined
        }
    }

    setApiResult2ForecastData = (forecastResultData: ForecastData) =>  {
        this.setState({
            forecastData: forecastResultData,
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
                <ForecastPageTable forecastData={this.state.forecastData}/>
            </Container>
        )
    }
}

export default ForecastPageWrapper