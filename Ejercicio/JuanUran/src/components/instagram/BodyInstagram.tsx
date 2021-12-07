import Aside from "./aside/Aside"
import SectionPost from "./section/SectionPost"
import SectionState from "./section/SectionState"


const BodyInstagram = () => {

    return (
        <div className="container-body">
            <div >
                <div className="container-section-state">
                    <SectionState/>
                </div>
                <div>
                    <SectionPost/>
                </div>
            </div>
            <div>
                <Aside/>
            </div>
        </div>
    )
}

export default BodyInstagram
