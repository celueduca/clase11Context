import React from "react";
import Post from "./Post";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

const Body = () => {

    return (

        <div className="containerDistributionBody">

            <div className="post">
                <div className="containerCardHistories">
                    <div className="cardHistories">
                        <Stories />
                    </div>
                </div>
                <div className="containerCardPost">

                    <div className="cardPost">
                        <Post />
                    </div>

                </div>
            </div>
            <div className="post2">
                <div className="containerAccount">
                    <div className="account tamFont">
                        <div className="center">
                            <img className="imgTamAccount" src="https://imagenes.20minutos.es/files/image_656_370/files/fp/uploads/imagenes/2021/09/29/cristiano-ronaldo.r_d.1684-405-1942.jpeg" alt="" />
                        </div>
                        <div>
                            <p><b>Cristiano Ronaldo</b></p>

                        </div>
                        <div className="colorBlue">
                            <p><b>cambiar</b></p>
                        </div>
                    </div>
                    
                </div>
                <div className="sujereencias">
                        <p><b>Sugerencias para ti</b></p><p>Ver Todo</p>
                </div>
               <div>
                   <Suggestions />
                   <Suggestions/>
                   <Suggestions/>
                   <Suggestions/>
               </div>
            </div>
        </div>

    );
}
export default Body;