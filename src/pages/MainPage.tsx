import React from "react";
import { Slider, Tabs, HowTo, Order, Footer } from "../components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { animateScroll } from "react-scroll";

const useStyles = makeStyles((theme: Theme) => createStyles({}));
const MainPage = () => {
  const orderRef: any = React.useRef(null);
  const scrollToOrderRef = () => {
    animateScroll.scrollTo(orderRef.current.offsetTop);
  };
  return (
    <div className="main-page">
      <div className="container">
        <Slider
          steps={{
            title: "Карта #business",
            desc:
              "Оформите карту с расчетным счетом - теперь не нужно каждый раз переводить деньги со счета на другие карты",
            img: "/img/bg.png",
            btnText: "Оформить карту",
          }}
          scrollToOrder={scrollToOrderRef}
        />
        <Tabs />
        <HowTo />
        <Order refProp={orderRef} />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
