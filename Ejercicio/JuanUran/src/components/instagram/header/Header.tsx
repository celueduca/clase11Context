import ImageHeader from "./ImageHeader"
import InputSearchHeader from "./InputSearchHeader"
import TabItems from "./TabItems"

const Header = () => {
    return (
        <div className="container-header">
             <ImageHeader/>
             <InputSearchHeader/>
             <TabItems/>           
        </div>
    )
}

export default Header
