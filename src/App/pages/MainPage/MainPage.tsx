import Header from "./components/Header";
import Content from "./components/Content";
import classes from "./MainPage.module.scss";

const MainPage = () => {
  return (
    <div className={classes.mainPage}>
      <Header />
      <Content />
    </div>
  );
};

export default MainPage;
