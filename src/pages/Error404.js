import NavBar from "../components/NavBar/NavBar";
import PageTransition from "../components/PageTransition/PageTransition";
import NotFound from "../components/Sections/NotFound/NotFound";

function Error404() {
  return (
    <>
      <PageTransition text="Keaton Lees" />
      <NavBar />

      <NotFound />
    </>
  );
}

export default Error404;
