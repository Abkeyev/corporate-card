import React from "react";
import { Grid } from "@material-ui/core";
import {
  BccTypography,
  BccLink,
  BccTabs,
  BccTab,
  BccTable,
  BccTableContainer,
  BccTableCell,
  BccTableRow,
  BccTableBody,
  BccCollapseTitle,
  BccCollapsePanel,
  BccCollapseDetails,
} from "./BccComponents";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      container: {
        backgroundColor: "#ffffff",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "46px 48px 64px",
        boxSizing: "border-box",
      },
      containerTab: {
        backgroundColor: "#fafafa",
        maringBottom: 72,
      },
      innerContainerTab: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "6px 48px 0",
        boxSizing: "border-box",
      },
      tabs: {
        marginTop: 30,
        minHeight: 150,
        fontSize: 16,
        "& > span": {
          color: "#27AE60",
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "1px solid #F3F3F3",
          overflowX: "scroll",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
      benefits: {
        "& > div:first-child": {
          marginBottom: 20,
        },
        "& > div:nth-child(2)": {
          marginBottom: 20,
        },
        "& > div": {
          width: "calc(50% - 16px)",
          borderRadius: 10,
          display: "flex",
          justifyContent: "space-between",
          padding: 24,
          "& > div:first-child": {
            width: "calc(25% - 25px)",
            "& > img": {
              width: "100%",
            },
          },
          "& > div:last-child": {
            width: "calc(75% - 25px)",
          },
        },
      },
      docs: {
        marginTop: 24,
        backgroundColor: "#ffffff",
        boxShadow:
          "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        "& > div:nth-child(2n)": {
          backgroundColor: "#fafafa",
        },
        "& > div:first-child": {
          display: "block",
        },
        "& > div": {
          width: "100%",
          marginBottom: 0,
          display: "flex",
          boxSizing: "border-box",
          padding: "24px",
          flexWrap: "nowrap",
          alignItems: "center",
          "& > a": {
            color: "#000D1A",
          },
          "& > img": {
            marginRight: 24,
          },
        },
      },
      table: {
        color: "#80868C",
        "& tr > td": {
          width: "50%",
        },
        "& tr > td:first-child": {
          paddingLeft: 0,
        },
        "& tr > td:last-child": {
          paddingRight: 0,
        },
        "& tr:last-child > td": {
          borderBottom: "none",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      container: {
        backgroundColor: "#ffffff",
      },
      innerContainer: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "32px 20px",
        boxSizing: "border-box",
      },
      containerTab: {
        backgroundColor: "#fafafa",
        maringBottom: 72,
      },
      innerContainerTab: {
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%",
        padding: "6px 20px 0",
        boxSizing: "border-box",
      },
      tabs: {
        minHeight: 150,
        fontSize: 16,
        "& > span": {
          color: "#27AE60",
        },
      },
      tab: {
        "& > div > div": {
          borderBottom: "1px solid #F3F3F3",
          overflowX: "scroll",
          position: "relative",
          "&::-webkit-scrollbar": {
            width: 0,
            background: "transparent",
            height: 0,
          },
        },
      },
      benefits: {
        "& > div:first-child": {
          marginBottom: 20,
        },
        "& > div:nth-child(2)": {
          marginBottom: 20,
        },
        "& > div": {
          width: "100%",
          borderRadius: 10,
          display: "flex",
          justifyContent: "space-between",
          padding: 24,
          "& > div:first-child": {
            width: "calc(25% - 25px)",
            "& > img": {
              width: "100%",
            },
          },
          "& > div:last-child": {
            width: "calc(75% - 25px)",
          },
        },
      },
      docs: {
        marginTop: 24,
        backgroundColor: "#ffffff",
        boxShadow:
          "0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)",
        borderRadius: 8,
        "& > div:nth-child(2n)": {
          backgroundColor: "#fafafa",
        },
        "& > div:first-child": {
          display: "block",
        },
        "& > div": {
          width: "100%",
          marginBottom: 0,
          display: "flex",
          boxSizing: "border-box",
          padding: "24px",
          flexWrap: "nowrap",
          alignItems: "center",
          "& > a": {
            color: "#000D1A",
          },
          "& > img": {
            marginRight: 24,
          },
        },
      },
      table: {
        color: "#80868C",
        "& tr > td:first-child": {
          paddingLeft: 0,
        },
        "& tr > td:last-child": {
          paddingRight: 0,
        },
        "& tr:last-child > td": {
          borderBottom: "none",
        },
      },
    },
  })
);

const Tabs = (props: any) => {
  const classes = useStyles({});
  const [index, setIndex] = React.useState(0);
  const tabsList = ["Преимущества", "Тарифы", "Вопросы и ответы"];

  return (
    <>
      <div className={classes.containerTab}>
        <div className={classes.innerContainerTab}>
          <BccTabs
            value={index}
            onChange={(e: any, i: number) => setIndex(i)}
            className={classes.tab}
          >
            {tabsList.map((t) => {
              return <BccTab label={t} />;
            })}
          </BccTabs>
        </div>
      </div>
      <div className={classes.container} style={{ backgroundColor: "white" }}>
        <div className={classes.innerContainer}>
          <div className={classes.tabs}>
            <BccTypography type="h3" mb="48px" color="initial" block>
              {tabsList[index]}
            </BccTypography>
            {index === 0 ? (
              <Grid
                container
                justify="space-between"
                wrap="wrap"
                className={classes.benefits}
              >
                <Grid item container wrap="nowrap" justify="space-between">
                  <Grid item>
                    <img src={process.env.PUBLIC_URL + "/img/b1.svg"} />
                  </Grid>
                  <Grid item>
                    <BccTypography type="h6" block mb="16px">
                      Доступ к деньгам 24/7
                    </BccTypography>
                    <BccTypography type="p2" block mb="12px" color="#4D565F">
                      Вы не привязаны к режиму работы отделений
                    </BccTypography>
                    <BccTypography type="p2" block mb="12px" color="#4D565F">
                      Внесение и снятие наличных в режиме 24/7
                    </BccTypography>
                    <BccTypography type="p2" block mb="12px" color="#4D565F">
                      Оплата товаров и услуг по всему миру
                    </BccTypography>
                  </Grid>
                </Grid>
                <Grid item container wrap="nowrap" justify="space-between">
                  <Grid item>
                    <img src={process.env.PUBLIC_URL + "/img/b2.svg"} />
                  </Grid>
                  <Grid item>
                    <BccTypography type="h6" block mb="16px">
                      Простая бухгалтерия
                    </BccTypography>
                    <BccTypography type="p2" block mb="12px" color="#4D565F">
                      Не нужно выдавать деньги под отчет, деньги списываются со
                      счета
                    </BccTypography>
                    <BccTypography type="p2" block mb="12px" color="#4D565F">
                      Контроль операций и удобная отчётность в мобильном и
                      интернет-банке
                    </BccTypography>
                  </Grid>
                </Grid>
                <Grid item container wrap="nowrap" justify="space-between">
                  <Grid item>
                    <img src={process.env.PUBLIC_URL + "/img/b3.svg"} />
                  </Grid>
                  <Grid item>
                    <BccTypography type="h6" block mb="16px">
                      Выпуск карт на сотрудников
                    </BccTypography>
                    <BccTypography type="p2" block mb="12px" color="#4D565F">
                      Любое количество дополнительных карт
                    </BccTypography>
                    <BccTypography type="p2" block mb="12px" color="#4D565F">
                      Выдача карт сотрудникам без посещения отделений
                    </BccTypography>
                  </Grid>
                </Grid>
                <Grid item container wrap="nowrap" justify="space-between">
                  <Grid item>
                    <img src={process.env.PUBLIC_URL + "/img/b4.svg"} />
                  </Grid>
                  <Grid item>
                    <BccTypography type="h6" block mb="16px">
                      Управление лимитами
                    </BccTypography>
                    <BccTypography type="p2" block mb="12px" color="#4D565F">
                      Траты сотрудников под контролем – управление лимитами в
                      приложении <BccLink href="">Starbusiness</BccLink>
                    </BccTypography>
                    <BccTypography type="p2" block mb="12px" color="#4D565F">
                      Ограничения по категориям покупок(настройка категорий в
                      Starbusiness)
                    </BccTypography>
                  </Grid>
                </Grid>
                <Grid item container wrap="nowrap" justify="space-between">
                  <Grid item>
                    <img src={process.env.PUBLIC_URL + "/img/b5.svg"} />
                  </Grid>
                  <Grid item>
                    <BccTypography type="h6" block mb="16px">
                      Чат-бот Visa.Concierge
                    </BccTypography>
                    <BccTypography type="p2" block mb="12px" color="#4D565F">
                      Подключившись к чат-боту в мессенджерах Viber или
                      Telegram, вы получаете виртуального помощника, который
                      всегда под рукой
                    </BccTypography>
                  </Grid>
                </Grid>
              </Grid>
            ) : index === 1 ? (
              <Grid container justify="space-between">
                <BccTableContainer>
                  <BccTable className={classes.table}>
                    <BccTableBody>
                      <BccTableRow>
                        <BccTableCell>
                          <BccTypography type="p2" block mb="4px">
                            Выпуск карты
                          </BccTypography>
                        </BccTableCell>
                        <BccTableCell>
                          <BccTypography
                            type="p2"
                            block
                            color="initial"
                            mb="4px"
                          >
                            0 ₸
                          </BccTypography>
                        </BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>
                          <BccTypography type="p2" block mb="4px">
                            Годовое обслуживание
                          </BccTypography>
                        </BccTableCell>
                        <BccTableCell>
                          <BccTypography
                            type="p2"
                            block
                            color="initial"
                            mb="4px"
                          >
                            0 ₸*
                          </BccTypography>
                        </BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>
                          <BccTypography type="p2" block mb="4px">
                            Получение наличных в банкоматах РК и за пределами
                            РК:
                            <br />
                            До 5 000 000 т<br />
                            <br />
                            Свыше предела
                          </BccTypography>
                        </BccTableCell>
                        <BccTableCell>
                          <BccTypography
                            type="p2"
                            block
                            color="initial"
                            mb="4px"
                          >
                            0 ₸**
                            <br />
                            <br />
                            <br />
                            <BccTypography type="p2" color="initial" block>
                              1% мин 250 ₸
                            </BccTypography>
                          </BccTypography>
                        </BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>
                          <BccTypography type="p2" block mb="4px">
                            Получение наличных в кассах в РК
                          </BccTypography>
                        </BccTableCell>
                        <BccTableCell>
                          <BccTypography
                            type="p2"
                            block
                            color="initial"
                            mb="4px"
                          >
                            1% мин 250 ₸
                          </BccTypography>
                        </BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>
                          <BccTypography type="p2" block mb="4px">
                            Получение наличных в кассах за пределами РК
                          </BccTypography>
                        </BccTableCell>
                        <BccTableCell>
                          <BccTypography
                            type="p2"
                            block
                            color="initial"
                            mb="4px"
                          >
                            1% + 1 000 ₸
                          </BccTypography>
                        </BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>
                          <BccTypography type="p2" block mb="4px">
                            Пополнение карты
                          </BccTypography>
                        </BccTableCell>
                        <BccTableCell>
                          <BccTypography
                            type="p2"
                            block
                            color="initial"
                            mb="4px"
                          >
                            0 ₸
                          </BccTypography>
                        </BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>
                          <BccTypography type="p2" block mb="4px">
                            SMS-уведомление
                          </BccTypography>
                        </BccTableCell>
                        <BccTableCell>
                          <BccTypography
                            type="p2"
                            block
                            color="initial"
                            mb="4px"
                          >
                            0 ₸
                          </BccTypography>
                        </BccTableCell>
                      </BccTableRow>
                      <BccTableRow>
                        <BccTableCell>
                          <BccTypography type="p2" block mb="4px">
                            * при покупках {"=>"} 300 000 тенге в месяц, в иных
                            случаях – 1 000 тенге в месяц
                            <br />
                            ** до 5 000 тенге – 100 тенге
                          </BccTypography>
                        </BccTableCell>
                      </BccTableRow>
                    </BccTableBody>
                  </BccTable>
                </BccTableContainer>
              </Grid>
            ) : index === 2 ? (
              <>
                <BccCollapsePanel>
                  <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                    <BccTypography type="p2">
                      Как можно получить карту #business?
                    </BccTypography>
                  </BccCollapseTitle>
                  <BccCollapseDetails>
                    <BccTypography type="p2">
                      Карта #business выдается бесплатно в момент открытия
                      счета. Дополнительные карты можно получить, обратившись в
                      отделение Банка.
                    </BccTypography>
                  </BccCollapseDetails>
                </BccCollapsePanel>
                <BccCollapsePanel>
                  <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                    <BccTypography type="p2">
                      Кто может оформить карту #business?
                    </BccTypography>
                  </BccCollapseTitle>
                  <BccCollapseDetails>
                    <BccTypography type="p2">
                      Основная карта #business выпускается только лицам с правом
                      первой финансовой подписи – владельцам счета.
                      Индивидуальный предприниматель – самому Индивидуальному
                      предпринимателю и/или лицу, с нотариальной доверенностью
                      на распоряжение счетом.
                    </BccTypography>
                  </BccCollapseDetails>
                </BccCollapsePanel>
                <BccCollapsePanel>
                  <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                    <BccTypography type="p2">
                      В чем отличие карты #business от других корпоративных
                      карт?
                    </BccTypography>
                  </BccCollapseTitle>
                  <BccCollapseDetails>
                    <BccTypography type="p2">
                      Карта #business не требует отдельного счета и выпускается
                      к расчетному счету юридического лица/индивидуального
                      предпринимателя.
                    </BccTypography>
                  </BccCollapseDetails>
                </BccCollapsePanel>
                <BccCollapsePanel>
                  <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                    <BccTypography type="p2">
                      Какие операции можно проводить по карте?
                    </BccTypography>
                  </BccCollapseTitle>
                  <BccCollapseDetails>
                    <BccTypography type="p2">
                      Пополнять и снимать наличные, оплачивать товары и услуги в
                      интернете и в торгово-сервисных предприятиях по всему
                      миру, в том числе посредством Apple Pay/ Samsung Pay. По
                      каждой карте есть возможность установить индивидуальные
                      лимиты на безналичную оплату.
                    </BccTypography>
                  </BccCollapseDetails>
                </BccCollapsePanel>
                <BccCollapsePanel>
                  <BccCollapseTitle expandIcon={<ExpandMoreIcon />}>
                    <BccTypography type="p2">
                      Какими документами подтверждаются операции по карте?
                    </BccTypography>
                  </BccCollapseTitle>
                  <BccCollapseDetails>
                    <BccTypography type="p2">
                      С помощью карты #business осуществляется оплата
                      представительских, хозяйственных, а также расходов на
                      основную деятельность компании, внесение выручки и выдача
                      наличных. Подтверждением проведения операций и документом
                      для первичной отчётности бухгалтерии является чек.
                    </BccTypography>
                  </BccCollapseDetails>
                </BccCollapsePanel>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
