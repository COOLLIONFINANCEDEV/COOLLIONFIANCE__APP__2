import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Avatar,
  Alert,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Skeleton,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from "react-redux";
import FormikDecoration from "../../Helpers/FormikDecoration";
// eslint-disable-next-line no-unused-vars
import randomkey from "../../Helpers/randomKey";
import YupValidationSchema from "../../Helpers/YupValidationSchema";
import InvestmentRule from "../../Context/Concept/InvestmentRule";
import investImg from "../../assets/imgs/mobileMoney.svg";
import askMoneyImg from "../../assets/imgs/crypto.svg";
import { useTheme } from "@emotion/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { selectLogin } from "../../features/Login/LoginSlice";
import { useNavigate } from "react-router-dom";
import { LoginRouteLink } from "../../Router/Routes";
import {
  useAccount,
  usePrepareSendTransaction,
  useSendTransaction,
} from "wagmi";
import { WalletComponent } from "../../features/Wallet/WalletComponent";
import AppContent from "../../Seeds/AppContent";
import { deleteLoader, setLoader } from "../../features/Loader/LoaderSlice";
import { selectedOffers } from "../../features/Offers/OffersSlice";

const Payment = ({ defaultPrice = InvestmentRule.minPay, project }) => {
  const deleteStyle = {
    minWidth: "30vw",
    minHeight: "30vh",
    borberRadius: "10px",
  };
  const initialState = {
    price: defaultPrice,
  };
  const type = ["Wire Transfer", "cryto currency"];
  const ChooseData = [
    {
      id: 1,
      img: investImg,
      title: type[0],
      content:
        "Wire transfer payment method is the use of services such as credit card, debit card or mobile money",
    },
    {
      id: 2,
      img: askMoneyImg,
      title: type[1],
      content:
        "The crypto-currency payment method is simply the payment method using crypto-currencies.",
    },
  ];
  const crytpoWallet = process.env.REACT_APP_CRYPTOWALLET;

  const { isConnected } = useAccount();
  const { palette, shadows } = useTheme();
  const userInfo = useSelector(selectLogin);
  const { terms } = useSelector(selectedOffers);
  const [choose, setChoose] = React.useState(false);
  const [termsChoice, setTermsChoice] = React.useState({
    state: userInfo.isAuthenticated,
    value: terms?.at(-1)?.id,
  });
  const [choice, setChoice] = React.useState(isConnected ? 2 : 1);
  const [connectWallet, setConnectWallet] = React.useState(false);
  const navigate = useNavigate();
  const { config } = usePrepareSendTransaction({
    request: {
      to: crytpoWallet,
      value: 0,
    },
  });
  // wagmi crypto methode for pay
  const { sendTransaction } = useSendTransaction(config);
  const dispatch = useDispatch();
  const loaderInvestKey = randomkey();

  const handleSubmit = (values) => {
    if (userInfo.isAuthenticated) {
      handleInvest();
    } else {
      navigate(LoginRouteLink());
    }
  };
  const formik = FormikDecoration(
    initialState,
    YupValidationSchema([
      {
        key: "price",
        type: "number",
        props: [InvestmentRule.minPay],
      },
    ]),
    handleSubmit
  );
  const cinetPayInvest = () => {
    const cinetpayKey = process.env.REACT_APP_CINETPAY;
    const siteId = process.env.REACT_APP_SITEID;
    const apiUrl = process.env.REACT_APP_API_URL;
    const config = {
      apikey: cinetpayKey, //   YOUR APIKEY
      site_id: siteId, //YOUR_SITE_ID
      notify_url: apiUrl,
      mode: "PRODUCTION",
    };
    const checkout = {
      transaction_id: randomkey(), // YOUR TRANSACTION ID
      amount: formik.values.price,
      currency: "XOF",
      channels: "ALL",
      description: "l'investissement dans un projet",
      lang: "en",
      return_url: window.location.href,
    };

    if (window.CinetPay) {
      const CinetPay = window.CinetPay;
      CinetPay.setConfig(config);
      CinetPay.getCheckout(checkout);
      CinetPay.waitResponse(function (data) {
        if (data.status.toUpperCase() === "REFUSED") {
          alert("Votre paiement a échoué");
        } else if (data.status.toUpperCase() === "ACCEPTED") {
          alert("Votre paiement a été effectué avec succès");
        }
      });
      CinetPay.onError(function (data) {
        console.log(data);
      });
    }
  };
  const handleInvest = () => {
    if (choice === 1) {
      cinetPayInvest();
    } else {
      if (isConnected) {
        sendTransaction?.();
      } else {
        setConnectWallet(true);
      }
    }
  };
  const CreateInvest = async () => {
    dispatch(setLoader({ state: true, key: loaderInvestKey }));
    const InvestStepOneData = await CreateInvestStepOne();
    console.log(InvestStepOneData);
    dispatch(deleteLoader({ key: loaderInvestKey }));
  };
  const CreateInvestStepOne = async () => {};

  const CreateInvestStepTwo = () => {};

  React.useEffect(() => {
    if (isConnected) setConnectWallet(false);
  }, [isConnected]);

  return (
    <Box sx={deleteStyle}>
      {!termsChoice.state && (
        <Box>
          {/* back btn for return if user is the choose party */}
          {choose === true && (
            <Button
              startIcon={<ArrowBackIcon />}
              variant="contained"
              size="small"
              onClick={() => setChoose(false)}
            >
              Back
            </Button>
          )}

          {/* if is not connect the title for choose or has choose */}
          {connectWallet === false && (
            <>
              {termsChoice.state === false && userInfo.isAuthenticated && (
                <Button
                  startIcon={<ArrowBackIcon />}
                  variant="contained"
                  size="small"
                  sx={{ mb: "5px" }}
                  onClick={() =>
                    setTermsChoice({ state: true, value: termsChoice.value })
                  }
                >
                  Back
                </Button>
              )}
              <Stack rowGap="20px">
                <Typography variant="h4" color={"primary"} textAlign={"center"}>
                  {choose === false
                    ? "Invest in this project ?"
                    : "Investment method"}
                </Typography>
                <Typography>
                  {choose === false
                    ? "You can change the amount"
                    : "Choose the investment method that suits you best"}
                </Typography>
              </Stack>
            </>
          )}

          {/* for connect her wallet */}
          {connectWallet === true && (
            <Stack
              rowGap={1}
              spacing={2}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ width: "100%", m: "5px 0px" }}
            >
              <Typography
                variant="h4"
                color={"primary"}
                textAlign={"center"}
                sx={{ marginBottom: "10px" }}
              >
                Connect your wallet
              </Typography>
              <WalletComponent />
            </Stack>
          )}

          {/* it's for invest  */}
          {choose === false && (
            <Stack
              rowGap=""
              alignItems="center"
              spacing={2}
              sx={{ marginTop: "10px" }}
              component={"form"}
              onSubmit={formik.handleSubmit}
            >
              <TextField
                type={"number"}
                size="small"
                label={"Invest Now"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">$</InputAdornment>
                  ),
                }}
                sx={{ width: "100%" }}
                name={"price"}
                id={"price"}
                value={formik.values.price}
                onChange={formik.handleChange}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
              />
              {userInfo.isAuthenticated && (
                <Stack justifyContent={"center"} alignItems={"flex-end"}>
                  <Alert severity="info">
                    {AppContent.alert.ChangerMethodeDePaiment(
                      isConnected ? type.at(-1) : type[0]
                    )}
                  </Alert>
                  <Button size="small" onClick={() => setChoose(true)}>
                    <Typography
                      sx={{ textDecoration: "underline", fontSize: "0.7rem" }}
                    >
                      Change the payment method
                    </Typography>
                  </Button>
                </Stack>
              )}
              <Button variant="contained" color="primary" type={"submit"}>
                {" "}
                I invest in this project
              </Button>
            </Stack>
          )}

          {/* it's for choose the methode of paiment */}
          {choose === true && !connectWallet && (
            <>
              <Stack
                direction={{ md: "row" }}
                rowGap={5}
                spacing={2}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ width: "100%", m: "5px 0px" }}
              >
                {ChooseData.map((item) => (
                  <Card
                    sx={{
                      width: { xs: "100%", md: "50%" },
                      cursor: "pointer",
                      border: "5px solid white",
                      borderColor:
                        item.id === choice ? palette.primary.main : "white",
                      "&:hover": {
                        boxShadow: shadows[4],
                      },
                      transition: "all 0.4s",
                    }}
                    onClick={() => setChoice(item.id)}
                    key={item.id}
                  >
                    <CardHeader
                      avatar={
                        <Avatar
                          sx={{
                            bgcolor:
                              item.id === choice
                                ? palette.primary.main
                                : palette.secondary.main,
                          }}
                          aria-label="recipe"
                        >
                          {item.id}
                        </Avatar>
                      }
                    />
                    <CardMedia
                      sx={{ height: 150, width: 150, margin: "auto" }}
                      image={item.img}
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        textAlign={"center"}
                        textTransform={"capitalize"}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        textAlign={"center"}
                      >
                        {item.content}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
              <Button
                variant="contained"
                sx={{ width: "100%", marginTop: "30px" }}
                disabled={!choice}
                onClick={() => {
                  isConnected ? setChoose(false) : setConnectWallet(true);
                }}
              >
                I have made my choice
              </Button>
            </>
          )}
        </Box>
      )}

      {termsChoice.state && (
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Stack rowGap="20px">
            <Typography variant="h4" color={"primary"} textAlign={"center"}>
              Choose your interest
            </Typography>
            <Alert severity="warning">{AppContent.alert.ChooseTerms}</Alert>
          </Stack>

          {terms ? (
            <Stack
              justifyContent="center"
              alignItews="center"
              sx={{ width: "100%", mt: "10px" }}
              rowGap="25px"
            >
              <FormControl fullWidth variant="filled">
                <InputLabel id="term">
                  Make your choice with importance
                </InputLabel>

                <Select
                  labelId="term"
                  id="chooseTerm"
                  value={termsChoice.value}
                  name={type}
                  label={"choose term"}
                  onChange={(e) =>
                    setTermsChoice({ state: true, value: e.target.value })
                  }
                  sx={{ width: "100%" }}
                >
                  {terms.map((item) => (
                    <MenuItem
                      value={item.id}
                      key={item.id}
                    >{`${item?.benefit}% interest after ${item?.term} months of waiting`}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                variant="contained"
                onClick={() =>
                  setTermsChoice({
                    state: false,
                    value: termsChoice.value,
                  })
                }
              >
                I have made my choice
              </Button>
            </Stack>
          ) : (
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ width: "100%", mt: "15px" }}
              spacing={1}
            >
              <Skeleton variant="rounded" height={30} width={"100%"} />
              <Skeleton variant="rounded" height={10} width={"100%"} />
              <Skeleton variant="rounded" height={10} width={"100%"} />
            </Stack>
          )}
        </Stack>
      )}
    </Box>
  );
};

export default Payment;
