import Footerr from "./Footer";
import Header from "./Navbar";

const Layout = ({ children }:any) => {
  return (
    <>
      <Header />
      {children}
      <Footerr />
    </>

  );
};
export default Layout;