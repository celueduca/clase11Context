import Profile from "./Profile"
import Suggestions from "./Suggestions"
import Text from "./Text"

const Aside = () => {
    return (
        <div className="container-aside">
            <div className="container-profile">
                <div className="profile">
                    <Profile />
                </div>
            </div>
            <div className="container-aside-suffestions">
                <div className="container-suffestions">
                    <Suggestions/>
                </div>
            </div>
            <div className="container-text">
                <Text/>
            </div>
        </div>
    )
}

export default Aside
