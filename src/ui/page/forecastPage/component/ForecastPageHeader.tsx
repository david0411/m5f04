import "../css/ForecastPageHeaderStyle.css"
import React from "react";

type Props =    {
    updateTime: string |undefined
}

class ForecastPageHeader extends React.Component<Props> {
    render() {
        return (
            <>
                <div className="d-flex justify-content-between">
                    <h1 className="headerStyle1">
                        5 Day / 3 Hour Forecast
                    </h1>
                    <div className="d-flex">
                        <div className="headerStyle2">Last Update Time: <br/>
                            11/7/2023 11:21:00
                        </div>
                        <div className="emptySpace"></div>
                        <div id="reloadButton"></div>
                    </div>
                </div>
                <div className="headerStyle3">
                    Hong Kong
                </div>
            </>
        )
    }


}

export default ForecastPageHeader