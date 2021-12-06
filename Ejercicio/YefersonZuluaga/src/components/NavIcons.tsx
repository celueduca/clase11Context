import React from "react";

import { AiFillHome , AiOutlineCompass, AiOutlineHeart} from "react-icons/ai"
import { FiSend } from "react-icons/fi"

const NavIcons = () => {


    return(

        <div className="icons">
             
                
                    <AiFillHome className="icon"/>
               
                    <FiSend className="icon"/>
                
                    <AiOutlineCompass className="icon"/>
                
                    <AiOutlineHeart className="icon"/>
              
        </div>
    )
}
export default NavIcons;