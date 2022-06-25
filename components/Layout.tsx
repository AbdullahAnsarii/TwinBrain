import Footerr from "./Footer";
import Header from "./Navbar";

const Layout = ({ children }:any) => {
  return (
    <div className="content">
      <Header />
      {children}
      <Footerr />
    </div>

  );
};
export default Layout;