import React from "react";
import {List} from "../../../../data/ForecastData.ts";
import * as moment from "moment/moment";
import "../css/ForecastPageTableStyle.css"

type Props = {
    data: List
}


class ForecastPageTableRow extends React.Component<Props>   {
    render() {
        return <>
            <tr>
                <td>{moment.unix(this.props.data.dt).format("DD/MM/YYYY")}</td>
                <td>{moment.unix(this.props.data.dt).format("HH:mm")}</td>
                <td>{this.props.data.main.temp_min}/{this.props.data.main.temp_max}</td>
                <td>{this.props.data.main.humidity}%</td>
                <td><div className="weatherImg" style={{backgroundImage:`url("https://openweathermap.org/img/wn/${this.props.data.weather[0].icon}@2x.png")`}}></div></td>
            </tr>
        </>
    }
}

export default ForecastPageTableRow