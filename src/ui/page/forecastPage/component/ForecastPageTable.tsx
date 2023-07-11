import {Table} from "react-bootstrap";
import React from "react";
import "../css/ForecastPageTableStyle.css"
import {ForecastData} from "../../../../data/ForecastData.ts";
import ForecastPageTableRow from "./ForecastPageTableRow.tsx";

type Props  =   {
    forecastData: ForecastData | undefined
}

class ForecastPageTable extends React.Component<Props> {
    render() {
        return (
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Temperature (Min/Max)</th>
                    <th>Humidity</th>
                    <th>Weather</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.forecastData &&
                    this.props.forecastData.list.map((value) =>
                        <ForecastPageTableRow data={value}/>
                    )
                }
                </tbody>
            </Table>
        )
    }

}

export default ForecastPageTable