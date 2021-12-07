import Nav from "../components/Nav";

interface Props{
    children: any,
  }
const Index = ({ children}: Props) => {
    return (
      <div className="Layout">
        <Nav />
        {children}
       
      </div>
    );
  };
  
  export default Index;