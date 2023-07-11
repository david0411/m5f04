import ForecastPageTable from "./ForecastPageTable.tsx";
import ForecastPageHeader from "./ForecastPageHeader.tsx";
import React from "react";
import {Container} from "react-bootstrap";
import {ForecastData} from "../../../../data/ForecastData.ts";
import OpenWeatherApi from "../../../../api/OpenWeatherApi.ts";

type Props  =  unknown

type State = {
    forecastData: ForecastData | undefined
}

class ForecastPageWrapper extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state =    {
            forecastData: undefined
        }
    }

    setApiResult2ForecastData = (forecastResultData: ForecastData) =>  {
        this.setState({
                forecastData: forecastResultData
        }
        )
    }

    componentDidMount() {
        this.setState({
            forecastData: OpenWeatherApi
            }
        );
    }

    render() {
        return (
            <Container>
                <ForecastPageHeader/>
                <ForecastPageTable forecastData={this.state.forecastData}/>
            </Container>
        )
    }
}

export default ForecastPageWrapper