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
import { useSelect } from "@mui/base";
import { selectLogin } from "../features/Login/LoginSlice";
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

const Wallet = () => {
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

        {ROLE === BORROWER() && (
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
          <Typography variant="h4">$729.00</Typography>
        </Button>
        <CardPie
          text={"Total transactions"}
          number={"03"}
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
    { key: "amount", type: "number", props: 500 },
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
          console.log(datas);
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
    <Stack
      sx={{ padding: "10px 10px", minWidth: { xs: "70vw", md: "30vw" } }}
      alignItems="center"
      justifyContent={"space-between"}
      spacing={5}
    >
      <Typography variant="h5">Recharge your wallet</Typography>
      <Stack
        component={"form"}
        justifyContent={"center"}
        alignItems="center"
        spacing={2}
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
    </Stack>
  );
};

export default Wallet;
