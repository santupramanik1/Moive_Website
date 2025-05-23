import { Outlet, useNavigation } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Loading } from "./Loading";

export const AppLayout = () => {
  const nevigation = useNavigation();
  if (nevigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>{" "}
      {/* This is Component is used to render the child component inside the parent component */}
      <Footer></Footer>
    </>
  );
};
