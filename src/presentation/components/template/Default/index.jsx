// --- component
import Header from "presentation/components/organism/Header";
import Footer from "presentation/components/organism/Footer";

// --- start default
const Default = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </>
  );
};

export default Default;
