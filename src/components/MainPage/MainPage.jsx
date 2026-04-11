import { Outlet, useNavigation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MainPage = () => {
  const navigation = useNavigation();
  const isNevigation = Boolean(navigation.location)
  return (
    <>
      <h1>Main Page</h1>
      <Header></Header>
      <section className="max-w-12 mx-auto">
        {
          isNevigation && <span>Loading......</span>
        }
      </section>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainPage;
