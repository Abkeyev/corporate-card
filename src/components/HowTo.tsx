import React from "react";
import { Grid, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { BccTypography, BccChip, BccCard } from "./BccComponents";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        backgroundColor: "#fafafa",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "48px",
        margin: "0 auto",
      },
      orderTitle: {
        width: "85%",
        margin: "0 auto",
      },
      orderSteps: {
        marginBottom: 48,
        boxSizing: "border-box",
        "& > div:first-child": {
          color: "#27AE60",
          "& > div:first-child": {
            marginLeft: "calc(33% / 2 - 40px)",
          },
          "& > div:nth-child(2n+1)": {
            height: 80,
            width: 80,
            borderRadius: "50%",
            border: "1px solid #27AE60",
            boxSizing: "border-box",
            textAlign: "center",
            "& > span": {
              lineHeight: "80px",
            },
          },
          "& > div:nth-child(2n)": {
            width: "calc(33% - 48px - 80px)",
            height: 1,
            backgroundColor: "#CCCFD1",
            margin: "40px 24px",
          },
        },
        "& > div:last-child": {
          marginTop: 36,
          "& > div": {
            width: "33%",
            textAlign: "center",
          },
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        backgroundColor: "#fafafa",
      },
      container: {
        maxWidth: 1280,
        boxSizing: "border-box",
        padding: "20px",
        margin: "0 auto",
      },
      orderTitle: {
        width: "100%",
        margin: "0 auto",
      },
      orderSteps: {
        marginBottom: 48,
        boxSizing: "border-box",
        "& > div:first-child": {
          color: "#27AE60",
          "& > div:first-child": {
            marginLeft: "calc(33% / 2 - 40px)",
          },
          "& > div:nth-child(2n+1)": {
            height: 80,
            width: 80,
            borderRadius: "50%",
            border: "1px solid #27AE60",
            boxSizing: "border-box",
            textAlign: "center",
            "& > span": {
              lineHeight: "80px",
            },
          },
          "& > div:nth-child(2n)": {
            width: "calc(33% - 48px - 80px)",
            height: 1,
            backgroundColor: "#CCCFD1",
            margin: "40px 24px",
          },
        },
        "& > div:last-child": {
          marginTop: 36,
          "& > div": {
            width: "33%",
            textAlign: "center",
          },
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      orderSteps: {
        marginBottom: 48,
        boxSizing: "border-box",
        "& > div:first-child": {
          color: "#27AE60",
          "& > div:first-child": {
            marginLeft: "calc(33% / 2 - 30px)",
          },
          "& > div:nth-child(2n+1)": {
            height: 60,
            width: 60,
            borderRadius: "50%",
            border: "1px solid #27AE60",
            boxSizing: "border-box",
            textAlign: "center",
            "& > span": {
              lineHeight: "60px",
            },
          },
          "& > div:nth-child(2n)": {
            width: "calc(33% - 48px - 60px)",
            height: 1,
            backgroundColor: "#CCCFD1",
            margin: "30px 24px",
          },
        },
      },
    },
  })
);

const HowTo = (props: any) => {
  const classes = useStyles({});
  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <div className={classes.orderTitle}>
          <BccTypography
            type="h3"
            weight="medium"
            block
            mb="60px"
            align="center"
          >
            Как получить карту
          </BccTypography>
          <Grid
            container
            direction="column"
            justify="center"
            className={classes.orderSteps}
          >
            <Grid item container direction="row">
              <Grid item>
                <BccTypography type="h4">1</BccTypography>
              </Grid>
              <Grid item></Grid>
              <Grid item>
                <BccTypography type="h4">2</BccTypography>
              </Grid>
              <Grid item></Grid>
              <Grid item>
                <BccTypography type="h4">3</BccTypography>
              </Grid>
            </Grid>
            <Grid item container direction="row" justify="center">
              <Grid item>
                <BccTypography type="h6" block mb="8px">
                  Подайте заявку
                </BccTypography>
                <BccTypography type="p3" block color="#7D7D7D">
                  Обратитесь за #business в<br />
                  ближайшее отделение Банка
                </BccTypography>
              </Grid>
              <Grid item>
                <BccTypography type="h6" block mb="8px">
                  Откройте счет
                </BccTypography>
                <BccTypography type="p3" block color="#7D7D7D">
                  Откройте
                  <br />
                  текущий счет
                </BccTypography>
              </Grid>
              <Grid item>
                <BccTypography type="h6" block mb="8px">
                  Получите карту
                </BccTypography>
                <BccTypography type="p3" block color="#7D7D7D">
                  Сразу получите карту
                  <br />и начните пользоваться
                </BccTypography>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
