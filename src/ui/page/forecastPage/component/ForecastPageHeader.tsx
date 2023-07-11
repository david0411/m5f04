import "../css/ForecastPageHeaderStyle.css"
import React from "react";

type Props = {
    updateTime: string | undefined
    fetchForecastWeatherData: () => void
}

class ForecastPageHeader extends React.Component<Props> {
    render() {
        return <>
                <div className="d-flex justify-content-between">
                    <h1 className="headerStyle1">
                        5 Day / 3 Hour Forecast
                    </h1>
                    <div className="d-flex">
                        <div className="headerStyle2">Last Update Time: <br/>
                            {
                                this.props.updateTime
                                ? this.props.updateTime
                                    : "loading"
                            }
                        </div>
                        <div className="emptySpace"></div>
                        <div id="reloadButton" onClick={this.props.fetchForecastWeatherData}></div>
                    </div>
                </div>
                <div className="headerStyle3">
                    Hong Kong
                </div>
            </>
    }


}

export default ForecastPageHeader