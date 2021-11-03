import '../css/next5.css'
import moment from 'moment'

const Next5 = ({weather}) => {
    return (
        <div className="Next5">
            <div className="next-block">
                <p>Tomorrow</p>
                <div className="apparent-temp">
                    <span className="next-num">{weather.data[1].temp || "- - "}</span><span className="next-degree"></span>
                </div>
            </div>
            <div className="divider"></div>
            <div className="next-block">
                <p>{moment(weather.data[2].valid_date).format('dddd')}</p>
                <div className="apparent-temp">
                    <span className="next-num">{weather.data[2].temp || "- - "}</span><span className="next-degree"></span>
                </div>
            </div>
            <div className="divider"></div>
            <div className="next-block">
                <p>{moment(weather.data[3].valid_date).format('dddd')}</p>
                <div className="apparent-temp">
                    <span className="next-num">{weather.data[3].temp || "- -" }</span><span className="next-degree"></span>
                </div>
            </div>
            <div className="divider"></div>
            <div className="next-block">
                <p>{moment(weather.data[4].valid_date).format('dddd')}</p>
                <div className="apparent-temp">
                    <span className="next-num">{weather.data[4].temp || "- - "}</span><span className="next-degree"></span>
                </div>
            </div>
            <div className="divider"></div>
            <div className="next-block">
                <p>{moment(weather.data[5].valid_date).format('dddd')}</p>
                <div className="apparent-temp">
                    <span className="next-num">{weather.data[5].temp || "- - "}</span><span className="next-degree"></span>
                </div>
            </div>
        </div>
    )
}

export default Next5
