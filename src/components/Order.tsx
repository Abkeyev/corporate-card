import React from "react";
import { Grid, MenuItem, FormControlLabel } from "@material-ui/core";
import {
  BccTypography,
  BccCheckbox,
  BccInput,
  BccLink,
  BccSlider,
  BccButton,
  BccAlert,
} from "./BccComponents";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import MaskedInput from "react-maskedinput";
// import BlockUi from "react-block-ui";
// import api from "../api/Api";
const webConfigEnv = (window as any).env;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      outerContainer: {
        background: "#ffffff",
      },
      innerOrderForm: {},
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        textAlign: "center",
        boxSizing: "border-box",
        padding: "48px 96px",
      },
      orderTitle: {
        width: "75%",
        margin: "0 auto",
      },
      orderNum: {
        color: "#249052",
        paddingRight: 10,
        borderRight: ".5px solid rgba(20, 20, 20, .7)",
      },
      orderNumTitle: {
        paddingLeft: 10,
        color: "#141414",
      },
      orderNumText: {
        marginTop: 20,
        opacity: 0.7,
      },
      item: {
        width: "calc(33% - 20px)",
      },
      orderForm: {
        background: "#FFFFFF",
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        width: "75%",
        padding: 46,
        boxSizing: "border-box",
        maxWidth: "75%",
        margin: "0 auto",
        textAlign: "center",
      },
      titleForm: {
        marginBottom: 16,
      },
      subTitleForm: {
        marginBottom: 46,
        opacity: 0.7,
      },
      inputStyle: {
        marginBottom: 24,
        textAlign: "left",
      },
      inputStyleText: {
        textAlign: "left",
        marginBottom: 32,
      },
      checkboxText: {
        alignItems: "center",
        marginBottom: 20,
      },
      btnWrap: {
        width: "100%",
        marginTop: 40,
        "& > button": { width: 200, margin: "0 auto" },
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      progress: {
        backgroundColor: "#E0E0E0",
        height: 36,
        borderRadius: 4,
        marginBottom: 24,
        textAlign: "center",
        "& > span": {
          lineHeight: "36px",
        },
      },
      alert: {
        marginBottom: 32,
      },
      garant: { textAlign: "left" },
      orderSteps: {
        marginBottom: 48,
        boxSizing: "border-box",
        "& > div:first-child": {
          "& > div:first-child": {
            marginLeft: "calc(33% / 2 - 20px)",
          },
          "& > div:nth-child(2n+1)": {
            height: 40,
            width: 40,
            borderRadius: "50%",
            backgroundColor: "#F3F3F3",
            textAlign: "center",
            "& > span": {
              lineHeight: "40px",
            },
          },
          "& > div:nth-child(2n)": {
            width: "calc(33% - 48px - 40px)",
            height: 1,
            backgroundColor: "#CCCFD1",
            margin: "20px 24px",
          },
        },
        "& > div:last-child": {
          marginTop: 12,
          "& > div": {
            width: "33%",
          },
        },
      },
      code: {
        margin: 0,
        "& input": {
          height: 62,
          boxSizing: "border-box",
        },
      },
      timer: {
        fontSize: 16,
        color: "#4D565F",
      },
      docForm: {
        height: 64,
        border: "1px solid #F3F3F3",
        borderRadius: 4,
        marginBottom: 24,
        padding: "8px 14px",
        lineHeight: "48px",
      },
      linkReSendSms: {
        color: "#3F0259",
        fontSize: 16,
        height: "auto",
        padding: 0,
        lineHeight: "initial",
        cursor: "pointer",
        textTransform: "none",
        "&:hover, &:active": {
          textDecoration: "underline",
          opacity: 0.8,
        },
      },
      progressBarSuccess: {
        borderRadius: 5,
        display: "block",
        margin: "12px 0 32px",
        height: 36,
        lineHeight: "36px",
        textAlign: "center",
        position: "relative",
        fontSize: 16,
        "& > span": {
          zIndex: 5,
          color: "white",
          fontWeight: "bold",
          position: "relative",
        },
      },
      successForm: {
        backgroundColor: "rgba(125, 206, 160, 0.1)",
        textAlign: "center",
        padding: "56px 64px 112px",
        "& > img": {
          display: "block",
          margin: "0 auto",
          marginBottom: 24,
        },
      },
      progressBarInnerSuccess: {
        position: "absolute",
        background: "#27AE60",
        transition: "width .5s ease-out",
        top: 0,
        height: 36,
        borderRadius: 5,
        bottom: 0,
        zIndex: 4,
      },
      paymentWrap: {
        position: "relative",
        marginBottom: 40,
      },
      sliderWrap: {
        position: "relative",
        width: "100%",
      },
      input: {
        display: "block",
        width: "100%",
        "& > div": {
          width: "inherit",
        },
      },
      sliderRange: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -20,
        color: "#b3b6ba",
        display: "flex",
        justifyContent: "space-between",
        fontSize: 12,
      },
    },
    [theme.breakpoints.down("sm")]: {
      outerContainer: {
        background: "#ffffff",
      },
      innerOrderForm: {},
      container: {
        maxWidth: 1280,
        margin: "0 auto",
        textAlign: "center",
        boxSizing: "border-box",
        padding: "32px 20px",
      },
      orderTitle: {
        width: "100%",
        margin: "0 auto",
      },
      orderNum: {
        color: "#249052",
        paddingRight: 10,
        borderRight: ".5px solid rgba(20, 20, 20, .7)",
      },
      orderNumTitle: {
        paddingLeft: 10,
        color: "#141414",
      },
      orderNumText: {
        marginTop: 20,
        opacity: 0.7,
      },
      item: {
        width: "calc(33% - 20px)",
      },
      orderForm: {
        background: "#FFFFFF",
        boxShadow:
          "0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        width: "100%",
        padding: 46,
        boxSizing: "border-box",
        maxWidth: "100%",
        margin: "0 auto",
        textAlign: "center",
      },
      titleForm: {
        marginBottom: 16,
      },
      subTitleForm: {
        marginBottom: 46,
        opacity: 0.7,
      },
      inputStyle: {
        marginBottom: 24,
        textAlign: "left",
      },
      inputStyleText: {
        textAlign: "left",
        marginBottom: 32,
      },
      checkboxText: {
        alignItems: "center",
        marginBottom: 20,
      },
      btnWrap: {
        width: "100%",
        marginTop: 40,
        "& > button": { width: 200, margin: "0 auto" },
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      progress: {
        backgroundColor: "#E0E0E0",
        height: 36,
        borderRadius: 4,
        marginBottom: 24,
        textAlign: "center",
        "& > span": {
          lineHeight: "36px",
        },
      },
      alert: {
        marginBottom: 32,
      },
      garant: { textAlign: "left" },
      orderSteps: {
        marginBottom: 48,
        boxSizing: "border-box",
        "& > div:first-child": {
          "& > div:first-child": {
            marginLeft: "calc(33% / 2 - 20px)",
          },
          "& > div:nth-child(2n+1)": {
            height: 40,
            width: 40,
            borderRadius: "50%",
            backgroundColor: "#F3F3F3",
            textAlign: "center",
            "& > span": {
              lineHeight: "40px",
            },
          },
          "& > div:nth-child(2n)": {
            width: "calc(33% - 48px - 40px)",
            height: 1,
            backgroundColor: "#CCCFD1",
            margin: "20px 24px",
          },
        },
        "& > div:last-child": {
          marginTop: 12,
          "& > div": {
            width: "33%",
          },
        },
      },
      code: {
        margin: 0,
        "& input": {
          height: 62,
          boxSizing: "border-box",
        },
      },
      timer: {
        fontSize: 16,
        color: "#4D565F",
      },
      docForm: {
        height: 64,
        border: "1px solid #F3F3F3",
        borderRadius: 4,
        marginBottom: 24,
        padding: "8px 14px",
        lineHeight: "48px",
      },
      linkReSendSms: {
        color: "#3F0259",
        fontSize: 16,
        height: "auto",
        padding: 0,
        lineHeight: "initial",
        cursor: "pointer",
        textTransform: "none",
        "&:hover, &:active": {
          textDecoration: "underline",
          opacity: 0.8,
        },
      },
      progressBarSuccess: {
        borderRadius: 5,
        display: "block",
        margin: "12px 0 32px",
        height: 36,
        lineHeight: "36px",
        textAlign: "center",
        position: "relative",
        fontSize: 16,
        "& > span": {
          zIndex: 5,
          color: "white",
          fontWeight: "bold",
          position: "relative",
        },
      },
      successForm: {
        backgroundColor: "rgba(125, 206, 160, 0.1)",
        textAlign: "center",
        padding: "56px 64px 112px",
        "& > img": {
          display: "block",
          margin: "0 auto",
          marginBottom: 24,
        },
      },
      progressBarInnerSuccess: {
        position: "absolute",
        background: "#27AE60",
        transition: "width .5s ease-out",
        top: 0,
        height: 36,
        borderRadius: 5,
        bottom: 0,
        zIndex: 4,
      },
      paymentWrap: {
        position: "relative",
        marginBottom: 40,
      },
      sliderWrap: {
        position: "relative",
        width: "100%",
      },
      input: {
        display: "block",
        width: "100%",
        "& > div": {
          width: "inherit",
        },
      },
      sliderRange: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -20,
        color: "#b3b6ba",
        display: "flex",
        justifyContent: "space-between",
        fontSize: 12,
      },
    },
    [theme.breakpoints.down("xs")]: {
      orderForm: {
        padding: 20,
      },
    },
  })
);

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const BccMaskedInput = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="+7(111) 111 11 11"
      placeholder={"+7(707) 707 77 77"}
    />
  );
};

const BccMaskedIinInput = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => inputRef(ref ? ref.inputElement : null)}
      mask="111 111 111 111"
      placeholder={"000 000 000 000"}
    />
  );
};

const Order = (props: any) => {
  const classes = useStyles({});
  const [filial, setFilial] = React.useState("");
  const [iin, setIin] = React.useState("");
  const [fio, setFio] = React.useState("");
  const [agree, setAgree] = React.useState(true);
  const [phone, setPhone] = React.useState("");
  const [phoneError, setPhoneError] = React.useState<boolean>(false);

  return (
    <div className={classes.outerContainer} ref={props.refProp}>
      <div className={classes.container}>
        <div className={classes.orderForm}>
          <Grid direction="column" container className={classes.innerOrderForm}>
            <Grid item>
              <BccTypography type="h3" mb="64px">
                Заполните заявку и получите
                <br />
                #Business
              </BccTypography>
            </Grid>
            <Grid item>
              <BccInput
                className={classes.inputStyle}
                fullWidth
                label="Фамилия, имя отчество*"
                variant="filled"
                id="fio"
                name="fio"
                value={fio}
                onChange={(e: any) => setFio(e.target.value)}
              />
            </Grid>
            <Grid item>
              <BccInput
                variant="filled"
                fullWidth
                label="Мобильный телефон*"
                onChange={(e: any) => setPhone(e.target.value)}
                className={classes.inputStyle}
                helperText={phoneError ? "Неверный формат номера телефона" : ""}
                error={phoneError ? true : false}
                id="phone"
                name="phone"
                value={phone}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  inputComponent: BccMaskedInput as any,
                }}
              />
            </Grid>
            <Grid item>
              <Grid
                container
                justify="flex-start"
                wrap="nowrap"
                className={classes.checkboxText}
              >
                <Grid item>
                  <BccCheckbox
                    value="remember"
                    color="primary"
                    checked={agree}
                    onChange={() => setAgree(!agree)}
                  />
                </Grid>
                <Grid item>
                  <BccTypography type="p3" ml="10px">
                    Я согласен(-а) на сбор и{" "}
                    <BccLink href="https://www.bcc.kz/" target="_blank">
                      обработку персональных данных
                    </BccLink>
                  </BccTypography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" wrap="nowrap" spacing={2}>
                <Grid item>
                  <img
                    src={process.env.PUBLIC_URL + "/img/safety.svg"}
                    className={classes.icon}
                    alt="order_security"
                  />
                </Grid>
                <Grid item>
                  <BccTypography type="p3" className={classes.garant}>
                    Мы гарантируем безопасность и сохранность ваших данных
                  </BccTypography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.btnWrap}>
              <BccButton fullWidth variant="contained" color="primary">
                Оформить карту
              </BccButton>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Order;
