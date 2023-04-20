import {
  Alert,
  Backdrop,
  Button,
  CircularProgress,
  IconButton,
  Stack,
} from "@mui/material";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import metamaskIcon from "../../assets/icons/metamask.svg";
import coinbaseIcon from "../../assets/icons/coinbase.svg";
import walletconnectIcon from "../../assets/icons/connectWallet.svg";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const IMGS = [metamaskIcon, coinbaseIcon, walletconnectIcon];
export function WalletComponent({ hanbleChange = (value) => {} }) {
  const { isConnected } = useAccount();
  // const { address, connector, isConnected } = useAccount();
  // const { data: ensAvatar } = useEnsAvatar({ address });
  // const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();
  const [open, setOpen] = useState(true);
  // if (isConnected) {
  //   return (
  //     <div>
  //       {/* <img src={ensAvatar} alt="ENS Avatar" />
  //       <div>{ensName ? `${ensName} (${address})` : address}</div>
  //       <div>Connected to {connector.name}</div> */}
  //       <button onClick={disconnect}>Disconnect</button>
  //     </div>
  //   );
  // }

  return (
    <Stack
      direction={"row"}
      spacing={4}
      flexWrap={"wrap"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {connectors.map((connector, index) => (
        <Button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => {
            if (isConnected) {
              disconnect();
            } else {
              connect({ connector });
            }
            hanbleChange(0);
            setOpen(true);
          }}
        >
          <img
            src={IMGS[index]}
            alt={connector.name}
            style={{ width: "50px" }}
          />
          {
            <Backdrop
              sx={{ color: "#fff", zIndex: 10 }}
              open={isLoading && connector.id === pendingConnector?.id}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          }
        </Button>
      ))}

      {error && open && (
        <Alert
          severity={"warning"}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{
            width: "60%",
            position: "fixed",
            top: "15vh",
            right: "5vw",
          }}
        >
          {error.message}
        </Alert>
      )}
    </Stack>
  );
}
