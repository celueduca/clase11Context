import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Layout from "../layout/index";

const Contact = () => {
  const { user } = useContext(AuthContext);
  return (
    <Layout>
      <div className="Main-Container">
        
        <div className="Main">
          <div className="Contact">
          <label aria-hidden="true">Contact</label>

            <form className="Form-Contact">
              <input
                className="Input"
                type="text"
                disabled={true}
                value={user?.name}
              />
              <input
                className="Input"
                disabled={true}
                type="text"
                value={user?.last_name}
              />
              <input
                className="Input"
                type="text"
                disabled={true}
                value={user?.nickname}
              />
              <input
                className="Input"
                type="text"
                disabled={true}
                value={user?.age}
              />
              <input
                className="Input"
                type="text"
                disabled={true}
                value={user?.email}
              />
              <input
                className="Input"
                type="text"
                disabled={true}
                value={user?.phone}
              />
              <textarea className="Input" placeholder="Observaciones" />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
