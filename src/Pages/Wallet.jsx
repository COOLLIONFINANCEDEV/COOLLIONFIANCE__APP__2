// import { useTheme } from "@emotion/react";
// import {
//   Box,
//   Button,
//   Paper,
//   Stack,
//   Table,
//   TableContainer,
//   TableHead,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import CardPie from "../components/CardPie";
// import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
// import { selectLogin, UpdateUser } from "../features/Login/LoginSlice";
// import { useDispatch, useSelector } from "react-redux";
// import CreateHead from "../components/Table/CreateHead";
// import { WALLETKEY } from "../Context/Table/TableKeys";
// import CreateBody from "../components/Table/CreateBody";
// import CreateRowData from "../Helpers/CreateRowData";
// import { ADMIN } from "../Context/Roles/roles";
// import YupValidationSchema from "../Helpers/YupValidationSchema";
// import FormikDecoration from "../Helpers/FormikDecoration";
// import CreateModal from "../components/Modal/CreateModal";
// import randomkey from "../Helpers/randomKey";
// import { deleteLoader, setLoader } from "../features/Loader/LoaderSlice";
// import SessionService from "../Services/SessionService";
// import { setPoppu } from "../features/Poppu/PoppuSlice";
// import { errorContent } from "../Context/Content/AppContent";
// import { AddWallet, selectedWallet } from "../features/Wallet/WalletSlice";

// const Wallet = () => {
//   const dispatch = useDispatch();
//   const { palette, width } = useTheme();
//   const [rechargeAmount, setRechargeAmount] = React.useState([]);
//   const [withdrawalAmount, setWithdrawalAmount] = React.useState([]);
//   const [TransactionGlobalInfo, setTransactionGlobalInfo] = React.useState({
//     deposit: 0,
//     withdrawal: 0,
//   });
//   const [rows, setRows] = React.useState(null);
//   const WalletStyle = {
//     margin: "0 auto 0 auto",
//     marginTop: { xs: "4vh", md: "10vh" },
//     width: width,
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     rowGap: "30px",
//   };

//   const WalletCardPie = {
//     width: "100%",
//     height: "100%",
//     border: "1px solid",
//     borderColor: palette.secondary.main,
//     backgroundColor: palette.secondary.light,
//     padding: "15px 10px",
//     borderRadius: "10px",
//   };

//   const user = useSelector(selectLogin).user;
//   const ROLE = user.role;
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const CreateData = new CreateRowData(WALLETKEY().body);
//   const wallet = useSelector(selectedWallet).wallet;
//   const walletLoaderkey = randomkey();

//   React.useEffect(() => {
//     dispatch(setLoader({ state: true, key: walletLoaderkey }));
//     SessionService.GetWalletByUser(user.wallet.id)
//       .then((datas) => {
//         dispatch(deleteLoader({ key: walletLoaderkey }));
//         dispatch(deleteLoader({ key: walletLoaderkey }));
//         dispatch(AddWallet({ wallet: datas.data.data }));
//         dispatch(
//           UpdateUser({
//             newUser: JSON.stringify(datas.data.data.user),
//             user: user,
//           })
//         );
//       })
//       .catch((error) => {
//         dispatch(deleteLoader({ key: walletLoaderkey }));
//         dispatch(deleteLoader({ key: walletLoaderkey }));
//         console.log(error);
//       });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [dispatch, user]);

//   React.useEffect(() => {
//     if (wallet !== null) {
//       setTransactionGlobalInfo({ deposit: 0, withdrawal: 0 });
//       let deposit = 0;
//       let withdrawal = 0;
//       wallet.transactions.forEach((item) => {
//         if (
//           item.type.toLowerCase() === "deposit" &&
//           item.status.toLowerCase() === "accepted"
//         ) {
//           deposit += item.amount;
//         } else if (
//           item.type.toLowerCase() === "investment" &&
//           item.status.toLowerCase() === "accepted"
//         ) {
//           withdrawal += item.amount;
//         }
//       });
//       setTransactionGlobalInfo({ deposit: deposit, withdrawal: withdrawal });
//     }
//   }, [wallet]);

//   React.useEffect(() => {
//     if (wallet !== null) {
//       const rows = [];
//       wallet.transactions.forEach((item) => {
//         rows.push(
//           CreateData.create([
//             item.id,
//             `${item.amount} USD`,
//             item.type,
//             item.status === "pending" ? "fail" : item.status,
//             new Date(item.created_at).getMonth() + 1 >= 10 ||
//             new Date(item.created_at).getDate() >= 10
//               ? `${new Date(item.created_at).getFullYear()}-${new Date(
//                   item.created_at
//                 ).getMonth() + 1}-${new Date(item.created_at).getDate()}`
//               : `${new Date(item.created_at).getFullYear()}-0${new Date(
//                   item.created_at
//                 ).getMonth() + 1}-0${new Date(item.created_at).getDate()}`,
//             item.currency,
//             item.service,
//           ])
//         );
//       }); 
//       setRows(rows);
//     }
//   }, [CreateData, wallet]);

//   return (
//     <Box sx={WalletStyle}>
//       {rechargeAmount.map((item) => {
//         return (
//           item.state === true && (
//             <CreateModal ModalContent={RechargeYourWallet} MakeOpen={true} />
//           )
//         );
//       })}
//       {withdrawalAmount.map((item) => {
//         return (
//           item.state === true && (
//             <CreateModal ModalContent={MakeWithDrawal} MakeOpen={true} />
//           )
//         );
//       })}
//       <Stack
//         direction={"row"}
//         justifyContent={"flex-end"}
//         alignItems={"flex-end"}
//         columnGap={"15px"}
//         sx={{ width: "100%" }}
//       >
//         <Button
//           variant="contained"
//           size="large"
//           onClick={() => {
//             setRechargeAmount((state) => {
//               const newValue = [
//                 ...state,
//                 {
//                   state: true,
//                 },
//               ];
//               return newValue;
//             });
//           }}
//         >
//           Recharge your wallet
//         </Button>

//         <Button
//           variant="outlined"
//           size="large"
//           onClick={() => {
//             setWithdrawalAmount((state) => {
//               const newValue = [
//                 ...state,
//                 {
//                   state: true,
//                 },
//               ];
//               return newValue;
//             });
//           }}
//         >
//           make a withdrawal
//         </Button>

//         {ROLE === ADMIN() && (
//           <Button variant="contained" size="large" color="success">
//             Make a transfer
//           </Button>
//         )}
//       </Stack>
//       <Stack
//         sx={WalletCardPie}
//         justifyContent="space-around"
//         alignItems="center"
//         direction={"row"}
//         flexWrap="wrap"
//         rowGap="20px"
//       >
//         <Button
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             direction: "column",
//             width: "100%",
//             padding: "15px 10px",
//           }}
//           variant="outlined"
//         >
//           <Typography
//             sx={{ fontWeight: "bold", marginRight: "30px" }}
//             variant="h4"
//           >
//             Current Balance:
//           </Typography>
//           <Typography variant="h4">{wallet?.amount} USD</Typography>
//         </Button>
//         <CardPie
//           text={"Total transactions"}
//           number={wallet?.transactions?.length}
//           color="primary"
//           logo={<FeaturedPlayListIcon fontSize="large" />}
//           variant={"contained"}
//         />
//         <CardPie
//           text={"total deposit"}
//           number={`${TransactionGlobalInfo.deposit} USD`}
//           color="success"
//           logo={<FeaturedPlayListIcon fontSize="large" />}
//           variant={"contained"}
//         />
//         <CardPie
//           text={"total withdrawals "}
//           number={`${TransactionGlobalInfo.withdrawal} USD`}
//           color="success"
//           logo={<FeaturedPlayListIcon fontSize="large" />}
//           variant={"outlined"}
//         />
//       </Stack>

//       <Stack sx={WalletCardPie}>
//         <Box>
//           <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 700 }}>
//               <TableHead>
//                 <CreateHead head={WALLETKEY().head} />
//               </TableHead>

//               {rows !== null &&
//                 rows.map((row) => (
//                   <CreateBody key={row.name} row={row} mode={true} />
//                 ))}
//             </Table>
//           </TableContainer>
//         </Box>
//       </Stack>
//     </Box>
//   );
// };

// const RechargeYourWallet = () => {
//   const initialState = {
//     amount: "",
//     currency: "XOF",
//     useCreditCard: false,
//   };
//   const dispatch = useDispatch();
//   const TransactionLoaderKey = randomkey();

//   const validationSchema = YupValidationSchema([
//     { key: "amount", type: "number", props: 100 },
//   ]);

//   const handleError = () => {
//     dispatch(setPoppu({ state: "error", content: errorContent() }));
//   };

//   const handleSubmit = (values) => {
//     dispatch(setLoader({ state: true, key: TransactionLoaderKey }));
//     SessionService.CreateTransaction(values)
//       .then((datas) => {
//         dispatch(deleteLoader({ key: TransactionLoaderKey }));
//         if (datas.data.error === true) {
//           handleError();
//         } else if (datas.data.error === false) {
//           const url = datas.data.data.payment_url;
//           window.open(url, "_blank");
//         }
//       })
//       .catch((erreur) => {
//         dispatch(deleteLoader({ key: TransactionLoaderKey }));
//         console.log(erreur);
//         handleError();
//       });
//   };

//   const formik = FormikDecoration(initialState, validationSchema, handleSubmit);

//   return (
//     <>
//       <Box
//         sx={{
//           minWidth: "30vw",
//           minHeight: "30vh",
//           borberRadius: "10px",
//         }}
//       >
//         <Stack rowGap="20px">
//           <Typography variant="h6" color={"primary"}>
//             Do you want to rechard your account ?
//           </Typography>

//           <Typography>You can change the amount .</Typography>
//         </Stack>

//         <Stack
//           rowGap=""
//           alignItems="center"
//           spacing={2}
//           sx={{ marginTop: "10px" }}
//           component={"form"}
//           onSubmit={formik.handleSubmit}
//         >
//           <TextField
//             type={"number"}
//             id="amount"
//             name="amount"
//             value={formik.values.amount}
//             onChange={formik.handleChange}
//             sx={{ width: "100%" }}
//             size="small"
//             error={formik.touched.amount && Boolean(formik.errors.amount)}
//             helperText={formik.touched.amount && formik.errors.amount}
//           />
//           <Button sx={{ width: "100%" }} variant={"contained"} type="submit">
//             Submit
//           </Button>
//         </Stack>
//       </Box>
//     </>
//   );
// };

// const MakeWithDrawal = () => {
//   const initialState = {
//     amount: "",
//     phone: "",
//   };
//   const dispatch = useDispatch();
//   const makeWithDrawalLoaderKey = randomkey();
//   const wallet = useSelector(selectedWallet).wallet;

//   const validationSchema = YupValidationSchema([
//     { key: "amount", type: "amount", props: [0, wallet.amount] },
//     { key: "phone", type: "phone" },
//   ]);

//   const handleError = () => {
//     dispatch(setPoppu({ state: "error", content: errorContent() }));
//   };

//   const handleSubmit = (values) => {
//     dispatch(setLoader({ state: true, key: makeWithDrawalLoaderKey }));
//     SessionService.CreateWithDrawal(values)
//       .then((datas) => {
//         dispatch(deleteLoader({ key: makeWithDrawalLoaderKey }));
//         if (datas.data.error === true) {
//           handleError();
//         } else if (datas.data.error === false) {
//           const url = datas.data.data.payment_url;
//           window.open(url, "_blank");
//         }
//       })
//       .catch((erreur) => {
//         dispatch(deleteLoader({ key: makeWithDrawalLoaderKey }));
//         console.log(erreur);
//         handleError();
//       });
//     console.log(values);
//   };

//   const formik = FormikDecoration(initialState, validationSchema, handleSubmit);

//   return (
//     <>
//       <Box
//         sx={{
//           minWidth: "30vw",
//           minHeight: "30vh",
//           borberRadius: "10px",
//         }}
//       >
//         <Stack rowGap="20px">
//           <Typography variant="h6" color={"primary"}>
//             Do you want to withdraw money from your account ?
//           </Typography>

//           <Typography>You can change the amount .</Typography>
//         </Stack>

//         <Stack
//           rowGap=""
//           sx={{ marginTop: "10px" }}
//           component={"form"}
//           onSubmit={formik.handleSubmit}
//         >
//           <Typography sx={{ fontSize: "0.8rem" }} component="span">
//             Give your number where you can receive your money
//           </Typography>
//           <TextField
//             type={"tel"}
//             id="phone"
//             name="phone"
//             placeholder="phone number"
//             value={formik.values.phone}
//             onChange={formik.handleChange}
//             sx={{ width: "100%" }}
//             size="small"
//             error={formik.touched.phone && Boolean(formik.errors.phone)}
//             helperText={formik.touched.phone && formik.errors.phone}
//           />

//           <Typography
//             sx={{ fontSize: "0.8rem", marginTop: "10px" }}
//             component="span"
//           >
//             How much do you want to withdraw
//           </Typography>
//           <TextField
//             type={"number"}
//             id="amount"
//             name="amount"
//             placeholder="Amount"
//             value={formik.values.amount}
//             onChange={formik.handleChange}
//             sx={{ width: "100%" }}
//             size="small"
//             error={formik.touched.amount && Boolean(formik.errors.amount)}
//             helperText={formik.touched.amount && formik.errors.amount}
//           />
//           <Button
//             sx={{ width: "100%", marginTop: "20px" }}
//             variant={"contained"}
//             type="submit"
//           >
//             Submit
//           </Button>
//         </Stack>
//       </Box>
//     </>
//   );
// };

// export default Wallet;
