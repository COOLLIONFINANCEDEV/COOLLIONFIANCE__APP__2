import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableContainer,
  TableHead,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CardPie from "../components/CardPie";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import {
  CheckUser,
  selectLogin,
  UpdateUser,
} from "../features/Login/LoginSlice";
import { useDispatch, useSelector } from "react-redux";
import CreateHead from "../components/Table/CreateHead";
import { WALLETKEY } from "../Context/Table/TableKeys";
import CreateBody from "../components/Table/CreateBody";
import CreateRowData from "../Helpers/CreateRowData";
import Action from "../components/Dashboard/Table/Actions/Action";
import { ADMIN, BORROWER } from "../Context/Roles/roles";
import YupValidationSchema from "../Helpers/YupValidationSchema";
import FormikDecoration from "../Helpers/FormikDecoration";
import CreateModal from "../components/Modal/CreateModal";
import randomkey from "../Helpers/randomKey";
import { deleteLoader, setLoader } from "../features/Loader/LoaderSlice";
import SessionService from "../Services/SessionService";
import { setPoppu } from "../features/Poppu/PoppuSlice";
import { errorContent } from "../Context/Content/AppContent";
import { AddWallet, selectedWallet } from "../features/Wallet/WalletSlice";

const Wallet = () => {
  const dispatch = useDispatch();
  const { palette, width } = useTheme();
  const [rechargeAmount, setRechargeAmount] = React.useState([]);
  const WalletStyle = {
    margin: "0 auto 0 auto",
    marginTop: { xs: "4vh", md: "10vh" },
    width: width,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "30px",
  };

  const WalletCardPie = {
    width: "100%",
    height: "100%",
    border: "1px solid",
    borderColor: palette.secondary.main,
    backgroundColor: palette.secondary.light,
    padding: "15px 10px",
    borderRadius: "10px",
  };

  const user = useSelector(selectLogin).user;
  const ROLE = user.role;
  const CreateData = new CreateRowData(WALLETKEY().body);
  const wallet = useSelector(selectedWallet).wallet;
  const walletLoaderkey = randomkey();

  React.useEffect(() => {
    dispatch(setLoader({ state: true, key: walletLoaderkey }));
    SessionService.GetWalletByUser(user.wallet.id)
      .then((datas) => {
        dispatch(deleteLoader({ key: walletLoaderkey }));
        dispatch(deleteLoader({ key: walletLoaderkey }));
        dispatch(AddWallet({ wallet: datas.data.data }));
        dispatch(
          UpdateUser({
            newUser: JSON.stringify(datas.data.data.user),
            user: user,
          })
        );
      })
      .catch((error) => {
        dispatch(deleteLoader({ key: walletLoaderkey }));
        dispatch(deleteLoader({ key: walletLoaderkey }));
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, user]);

  React.useEffect(() => console.log(wallet), [wallet]);

  const rows = [
    CreateData.create([
      "Frozen yoghurt",
      "15000$",
      "1000$",
      "agriculture",
      "2020-05-22",
      "2020-05-22",
      "active",
      <Action />,
    ]),
    CreateData.create([
      "Frozen yoghurst",
      "15000$",
      "1000$",
      "agriculture",
      "2020-05-22",
      "2020-05-22",
      "active",
      <Action />,
    ]),
  ];

  return (
    <Box sx={WalletStyle}>
      {rechargeAmount.map((item) => {
        return (
          item.state === true && (
            <CreateModal ModalContent={RechargeYourWallet} MakeOpen={true} />
          )
        );
      })}
      <Stack
        direction={"row"}
        justifyContent={"flex-end"}
        alignItems={"flex-end"}
        columnGap={"15px"}
        sx={{ width: "100%" }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            setRechargeAmount((state) => {
              const newValue = [
                ...state,
                {
                  state: true,
                },
              ];
              return newValue;
            });
          }}
        >
          Recharge your wallet
        </Button>

        {ROLE === BORROWER() && (
          <Button variant="outlined" size="large">
            redeem your debt
          </Button>
        )}

        {ROLE === ADMIN() && (
          <Button variant="contained" size="large" color="success">
            Make a transfer
          </Button>
        )}
      </Stack>
      <Stack
        sx={WalletCardPie}
        justifyContent="space-around"
        alignItems="center"
        direction={"row"}
        flexWrap="wrap"
        rowGap="20px"
      >
        <Button
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            direction: "column",
            width: "100%",
            padding: "15px 10px",
          }}
          variant="outlined"
        >
          <Typography
            sx={{ fontWeight: "bold", marginRight: "30px" }}
            variant="h4"
          >
            Current Balance:
          </Typography>
          <Typography variant="h4">00 XOF</Typography>
        </Button>
        <CardPie
          text={"Total transactions"}
          number={"00"}
          color="primary"
          logo={<FeaturedPlayListIcon fontSize="large" />}
          variant={"contained"}
        />
        <CardPie
          text={"Total payment"}
          number={"3500 $"}
          color="primary"
          logo={<FeaturedPlayListIcon fontSize="large" />}
          variant={"outlined"}
        />
        <CardPie
          text={"total withdrawals"}
          number={"1500 $"}
          color="success"
          logo={<FeaturedPlayListIcon fontSize="large" />}
          variant={"contained"}
        />
        <CardPie
          text={"total received"}
          number={"2000 $"}
          color="success"
          logo={<FeaturedPlayListIcon fontSize="large" />}
          variant={"outlined"}
        />
      </Stack>

      <Stack sx={WalletCardPie}>
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }}>
              <TableHead>
                <CreateHead head={WALLETKEY().head} />
              </TableHead>

              {rows.map((row) => (
                <CreateBody key={row.name} row={row} mode={true} />
              ))}
            </Table>
          </TableContainer>
        </Box>
      </Stack>
    </Box>
  );
};

const RechargeYourWallet = () => {
  const initialState = {
    amount: "",
    currency: "XOF",
    useCreditCard: false,
  };
  const dispatch = useDispatch();
  const TransactionLoaderKey = randomkey();

  const validationSchema = YupValidationSchema([
    { key: "amount", type: "number", props: 100 },
  ]);

  const handleError = () => {
    dispatch(setPoppu({ state: "error", content: errorContent() }));
  };

  const handleSubmit = (values) => {
    dispatch(setLoader({ state: true, key: TransactionLoaderKey }));
    SessionService.CreateTransaction(values)
      .then((datas) => {
        dispatch(deleteLoader({ key: TransactionLoaderKey }));
        if (datas.data.error === true) {
          handleError();
        } else if (datas.data.error === false) {
          const url = datas.data.data.payment_url;
          window.open(url, "_blank");
        }
      })
      .catch((erreur) => {
        dispatch(deleteLoader({ key: TransactionLoaderKey }));
        console.log(erreur);
        handleError();
      });
  };

  const formik = FormikDecoration(initialState, validationSchema, handleSubmit);

  return (
    <>
      <Box
        sx={{
          minWidth: "30vw",
          minHeight: "30vh",
          borberRadius: "10px",
        }}
      >
        <Stack rowGap="20px">
          <Typography variant="h6" color={"primary"}>
            Do you want to rechard your account ?
          </Typography>

          <Typography>You can change the amount .</Typography>
        </Stack>

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
            id="amount"
            name="amount"
            value={formik.values.amount}
            onChange={formik.handleChange}
            sx={{ width: "100%" }}
            size="small"
            error={formik.touched.amount && Boolean(formik.errors.amount)}
            helperText={formik.touched.amount && formik.errors.amount}
          />
          <Button sx={{ width: "100%" }} variant={"contained"} type="submit">
            Submit
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Wallet;
