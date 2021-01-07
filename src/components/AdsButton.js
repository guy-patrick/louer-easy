import { withRouter } from "react-router-dom"

const AdsButton = ({ title, className, page, history, match: { path } }) => (
    <button
        className={`${className} ads-btn`}
        onClick={() => history.push(`${path}${page}`)}
    >
        {title}
    </button>
)

export default withRouter(AdsButton)