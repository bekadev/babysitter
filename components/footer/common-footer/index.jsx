import CopyrightFooter from "./CopyrightFooter";
import FooterContent from "./FooterContent";

const index = ({ footerStyle = "" }) => {
  return (
    <footer className={`main-footer ${footerStyle}`}>

      <CopyrightFooter />
      {/* <!--Bottom--> */}
    </footer>
    //   {/* <!-- End Main Footer --> */}
  );
};

export default index;
