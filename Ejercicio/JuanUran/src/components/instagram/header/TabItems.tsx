import { GrHomeRounded } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";
import { useHistory } from "react-router-dom"


const TabItems = () => {
    const history = useHistory();
    const handleHome = () => history.push('/')
    return (
        <div className="container-navBar">
            <ul>
                <li  onClick={() => handleHome()} className="casa"><GrHomeRounded/></li>
                <li  ><FiSend /></li>
                <li>
                    <svg aria-label="Nueva publicación" className="_8-yf5 "
                        color="#262626" fill="#262626" height="25" role="img" viewBox="0 0 24 24" width="25">
                        <path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                        <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>
                        <line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
                    </svg></li>

                <li><svg aria-label="Buscar personas" className="_8-yf5 " color="#262626" fill="#262626" height="25" role="img" viewBox="0 0 24 24" width="25"><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon><polygon fill-rule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg></li>
                <li><BsHeart /></li>
                <li>
                    <img src="https://www.tonica.la/__export/1607901990428/sites/debate/img/2020/12/13/kamado-tanjiro-querido-por-los-nixos.jpg_423682103.jpg" alt="" />
                </li>
            </ul>
        </div>
    )
}

export default TabItems
