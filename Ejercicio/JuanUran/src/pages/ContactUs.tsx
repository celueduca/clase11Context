import AuthContext from '../context/AuthContext'
import { useContext } from 'react'
import Header from '../components/home/Header';

const ContactUs = () => {
    const { user } = useContext(AuthContext);
    return (
        <>  
        <Header/>
            <div className="contact-us">
                <div>
                    <form action="">
                        <h2>Conctact Us</h2>
                        <div>
                            <b>Name: </b><input type="text" disabled value={user?.name} />
                        </div>
                        <div>
                            <b>Last Name: </b> <input type="text" disabled value={user?.last_name} />
                        </div>
                        <div>
                            <b>Age: </b><input type="text" disabled value={user?.age} />
                        </div>
                        <div>
                            <b>Email: </b><input type="text" disabled value={user?.email} />
                        </div>
                        <div>
                            <b>Phone: </b><input type="text" disabled value={user?.phone} />
                        </div>
                        <div>
                            <b>Nickname: </b><input type="text" disabled value={user?.nickname} />
                        </div>
                        <div>
                            <b>Observations:</b><textarea />
                        </div>
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactUs
