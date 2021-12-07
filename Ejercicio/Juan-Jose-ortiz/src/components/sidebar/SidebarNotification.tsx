import React from "react";

const SidebarNotification = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar-Profile">
        <img src={"/assets/perfil.jpg"} alt="" />
        <div>
          <span>juanjortiz19</span>
          <p>Juan Jose Ortiz Santa</p>
        </div>
        <button>Cambiar</button>
      </div>
      <div className="Sidebar-Content">
          <p>No tienes sugerencias nuevas</p>
      </div>
    </div>
  );
};

export default SidebarNotification;
