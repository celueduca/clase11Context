import { BsThreeDots, BsHeart } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

const CardPost = () => {

    const posts = [
        {
            imageProfile: "https://www.tonica.la/__export/1607901990428/sites/debate/img/2020/12/13/kamado-tanjiro-querido-por-los-nixos.jpg_423682103.jpg",
            user: 'juan_uran_11',
            imagePost: 'https://www.tonica.la/__export/1607901990428/sites/debate/img/2020/12/13/kamado-tanjiro-querido-por-los-nixos.jpg_423682103.jpg',
            likes: 76,
            descripcion: 'Tanjiro...',
            hour: 'HACE 13 HORAS'
        },
        {
            imageProfile: "https://www.tonica.la/__export/1607901990428/sites/debate/img/2020/12/13/kamado-tanjiro-querido-por-los-nixos.jpg_423682103.jpg",
            user: 'juan_uran_11',
            imagePost: 'https://www.tonica.la/__export/1607901990428/sites/debate/img/2020/12/13/kamado-tanjiro-querido-por-los-nixos.jpg_423682103.jpg',
            likes: 76,
            descripcion: 'Tanjiro...',
            hour: 'HACE 13 HORAS'
        },
        {
            imageProfile: "https://www.tonica.la/__export/1607901990428/sites/debate/img/2020/12/13/kamado-tanjiro-querido-por-los-nixos.jpg_423682103.jpg",
            user: 'juan_uran_11',
            imagePost: 'https://www.tonica.la/__export/1607901990428/sites/debate/img/2020/12/13/kamado-tanjiro-querido-por-los-nixos.jpg_423682103.jpg',
            likes: 76,
            descripcion: 'Tanjiro...',
            hour: 'HACE 13 HORAS'
        }

    ]

    return (
        <>


            <div className="card-section">
                {
                    posts.map((post, i) => (
                        <div className="layout">
                        <div className="section-profile-container">
                            <div className="section-profile">
                                <div className="icon">
                                    <img src={post.imageProfile} alt="" />
                                    <div className="text-profile">
                                        <b>{post.user}</b>
                                    </div>
                                </div>

                                <BsThreeDots />

                            </div>
                        </div>
                        <div className="img-post">
                            <img src={post.imagePost} alt="" />
                        </div>
                        <div className="icon-post">
                            <div>
                                <BsHeart stroke-width="0.5" />
                                <svg className="icon" aria-label="Comentar" height="24" role="img" viewBox="0 0 24 24" width="22"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                                <FiSend className="icon" />
                            </div>
                            <svg aria-label="Guardar" height="24" role="img" viewBox="0 0 24 24" width="22"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                        </div>
                        <div className="text-post">
                            <b>{post.likes} Me gustas</b>
                            <p><b>juan_uran_11</b> Tanjiro...</p>
                            <p className="time">Hace 13 horas</p>
                        </div>
                        <div className="comment-post">
                            <div className="coment-post-input">
                                <svg aria-label="Emoji" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                                <input type="text" placeholder="Agrega un comentario..." />
                            </div>
                            <div><b>Publicar</b></div>
                        </div>
                        </div>
                    ))
                }
                </div>
            


        </>
    )
}

export default CardPost
