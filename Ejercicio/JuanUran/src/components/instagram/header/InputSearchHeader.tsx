import { AiOutlineSearch } from "react-icons/ai";

const InputSearchHeader = () => {
    return (
        <div className="container-input">
            <AiOutlineSearch className="icon"/>
            <input type="text" placeholder="Buscar"></input>
        </div>
    )
}

export default InputSearchHeader
