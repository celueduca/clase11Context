import Navbar from "../components/navbar/Navbar";
interface Props{
  children: any,
}
const Index = ({ children}: Props) => {
  return (
    <div className="Layout">
      <Navbar />
      {children}
     
    </div>
  );
};

export default Index;
