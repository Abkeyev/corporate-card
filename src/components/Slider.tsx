import React, { Children } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccButton, BccTypography } from "../components/BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        backgroundSize: "cover",
        position: "relative",
      },
      container: {
        position: "relative",
        margin: "0 auto",
        padding: "0 48px",
        paddingBottom: "32px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      bgImg: {
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: "calc(50vw - 56px)",
        "& > div": {
          backgroundSize: "contain",
          position: "absolute",
          backgroundColor: '#F0CFB8',
          right: 0,
          top: 0,
          bottom: 0,
          width: "calc(50vw - 56px)",
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          '& > img': {
            margin: '0 auto',
            maxWidth: 500,
            width: '70%'
          }
        },
      },
      slderTitle: {
        marginBottom: 20,
      },
      sliderSubTitle: {
        marginBottom: 56,
      },
      sliderBtn: {
        height: 64,
        fontSize: 18,
        lineHeight: "64px",
        minWidth: 350,
      },
      slider: {
        width: "100%",
        overflowX: "hidden",
        "& > div": {
          width: "100%",
          transition: "all .7s ease-in-out",
          "& > div": {
            width: "100%",
          },
        },
      },
      slide: {
        "& > div:first-child": {
          width: "calc(50% - 16px)",
          padding: "80px 0 64px",
        },
        "& > div:last-child": {
          position: "relative",
          width: "calc(50% - 16px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          "& > span": {
            width: "85%",
            margin: "0 auto",
          },
        },
      },
      sliderSteps: {
        position: "absolute",
        bottom: 0,
        width: 210,
        left: "calc(50% - 105px)",
        display: "flex",
        flexWrap: "nowrap",
        zIndex: 99,
        justifyContent: "space-between",
        alignItems: "center",
      },
      sliderStep: {
        cursor: "pointer",
        width: 10,
        marginRight: 16,
        height: 10,
        borderRadius: "50%",
        boxSizing: "border-box",
        border: "1px solid #27AE60",
        "&:hover": {
          backgroundColor: "#27AE60",
        },
      },
      active: {
        backgroundColor: "#27AE60",
      },
      slideLeft: {
        marginRight: 64,
        cursor: "pointer",
      },
      slideRight: {
        marginLeft: 48,
        cursor: "pointer",
      },
      cardsText: {
        "& > div": {
          width: "calc(33% - 60px)",
          marginBottom: 64,
        },
      },
      header: {
        paddingTop: 48,
      },
      subText: {
        width: "100%",
      },
      decText: {
        lineHeight: "52px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        backgroundSize: "cover",
        backgroundColor: "#fafafa",
      },
      bgImg: {
        display: 'block',
        "& > div": {
          backgroundColor: '#F0CFB8',
          display: 'block',
          '& > img': {
            margin: '0 auto',
            padding: '24px 0',
            display: 'block',
            maxWidth: 500,
            width: '70%'
          }
        },
      },
      container: {
        position: "relative",
        margin: "0 auto",
        padding: "0 20px",
        paddingBottom: "32px",
        maxWidth: 1280,
        boxSizing: "border-box",
      },
      slderTitle: {
        marginBottom: 20,
      },
      sliderSubTitle: {
        marginBottom: 56,
      },
      sliderBtn: {
        height: 64,
        fontSize: 18,
        lineHeight: "64px",
        minWidth: "auto",
        width: "100%",
      },
      slider: {
        width: "100%",
        overflowX: "hidden",
        "& > div": {
          width: "100%",
          transition: "all .7s ease-in-out",
          "& > div": {
            width: "100%",
            flexWrap: "wrap",
            "& > div:last-child": {
              padding: "0",
            },
            "& > div:first-child": {
              order: 2,
            },
          },
        },
      },
      slide: {
        "& > div:first-child": {
          width: "100%",
          padding: "32px 0",
        },
        "& > div:last-child": {
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          "& > img": {
            width: "50%",
            maxWidth: 300,
            margin: "0 auto 42px",
            display: "block",
          },
          "& > span": {
            width: "100%",
            margin: "0 auto",
          },
        },
      },
      sliderStep: {
        cursor: "pointer",
        width: 10,
        marginRight: 16,
        height: 10,
        borderRadius: "50%",
        boxSizing: "border-box",
        border: "1px solid #27AE60",
        "&:hover": {
          backgroundColor: "#27AE60",
        },
      },
      active: {
        backgroundColor: "#27AE60",
      },
      slideLeft: {
        marginRight: 64,
        cursor: "pointer",
      },
      slideRight: {
        marginLeft: 48,
        cursor: "pointer",
      },
      last: {
        lineHeight: "normal!important",
      },
      cardsText: {
        "& > div": {
          width: "100%",
          marginBottom: 12,
          "& > span": {
            display: "inline-block",
            width: "auto",
            marginRight: 12,
            lineHeight: "40px",
            marginTop: "0!important",
            "& > br": {
              display: "inline-block",
            },
          },
        },
      },
      header: {
        display: "none",
      },
      subText: {
        width: "100%",
      },
      decText: {
        lineHeight: "40px",
      },
    },
    [theme.breakpoints.down("xs")]: {},
  })
);

interface SliderStepsProps {
  title: string;
  desc: any;
  img?: string;
  btnText: string;
  bgColor?: string;
}

interface SliderProps {
  steps: Array<SliderStepsProps> | SliderStepsProps;
  scrollToOrder?: any;
}

const Slider = (props: SliderProps) => {
  const classes = useStyles({});
  const goToApp = (e: any) => {
    props.scrollToOrder();
  };
  return (
    <div className={classes.outerContainer}>
      <div className={classes.bgImg}>
        <div>
          <img src={process.env.PUBLIC_URL + '/img/bg.png'} />
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.slider}>
          <div>
            <Grid container className={classes.header}>
              <Grid item>
                <img src={process.env.PUBLIC_URL + "/img/logo.svg"} />
              </Grid>
            </Grid>
            {!Array.isArray(props.steps) && (
              <Grid
                container
                justify="space-between"
                wrap="nowrap"
                className={classes.slide}
              >
                <Grid item>
                  <BccTypography type="p2" block mb="6px" color="#B1B1B1">
                    Для ИП и юридических лиц
                  </BccTypography>
                  <BccTypography type="h2" block className={classes.slderTitle}>
                    {props.steps.title}
                  </BccTypography>
                  <BccTypography
                    type="h4"
                    weight="normal"
                    block
                    className={classes.sliderSubTitle}
                  >
                    {props.steps.desc}
                  </BccTypography>
                  <Grid
                    container
                    justify="space-between"
                    alignItems="flex-start"
                    className={classes.cardsText}
                  >
                    <Grid item container wrap="wrap">
                      <BccTypography type="h1" color="#27AE60" mr="4px">
                        0
                      </BccTypography>
                      <BccTypography
                        type="p2"
                        className={classes.decText}
                        color="#27AE60"
                      >
                        ₸
                      </BccTypography>
                      <BccTypography
                        type="p3"
                        block
                        mt="20px"
                        className={classes.subText}
                      >
                        Обслуживание карты*
                      </BccTypography>
                    </Grid>
                    <Grid item container wrap="wrap">
                      <BccTypography type="h1" color="#27AE60" mr="4px">
                        0
                      </BccTypography>
                      <BccTypography
                        type="p2"
                        className={classes.decText}
                        color="#27AE60"
                      >
                        ₸
                      </BccTypography>
                      <BccTypography
                        type="p3"
                        block
                        mt="20px"
                        className={classes.subText}
                      >
                        Получение наличных**
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <BccTypography
                        type="p2"
                        color="#27AE60"
                        className={classes.last}
                      >
                        Мгновенная
                        <br />
                        выдача
                        <br />
                        карты
                      </BccTypography>
                    </Grid>
                    <Grid item>
                      <BccTypography
                        type="p2"
                        color="#27AE60"
                        className={classes.last}
                        style={{ lineHeight: "48px", whiteSpace: "nowrap" }}
                      >
                        Visa Concierge
                      </BccTypography>
                      <BccTypography
                        type="p3"
                        block
                        mt="20px"
                        className={classes.subText}
                      >
                        Чат-бот для карт #business***
                      </BccTypography>
                    </Grid>
                  </Grid>
                  <BccButton
                    variant="contained"
                    color="primary"
                    onClick={(e: any) => goToApp(e)}
                    className={classes.sliderBtn}
                  >
                    {props.steps.btnText}
                  </BccButton>
                </Grid>
                <Grid item></Grid>
              </Grid>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
