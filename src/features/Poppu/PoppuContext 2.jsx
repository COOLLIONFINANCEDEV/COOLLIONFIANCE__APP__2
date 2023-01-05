import React from "react";
import { useSelector } from "react-redux";
import Poppu from "../../components/Login/Poppu";
import CreateModal from "../../components/Modal/CreateModal";
import { selectPoppu } from "./PoppuSlice";

const PoppuContext = () => {
  const poppuList = useSelector(selectPoppu);
  return (
    <>
      {poppuList.map((item) => {
        return (
          <CreateModal
            ModalContent={Poppu}
            MakeOpen={true}
            ContentProps={{
              content: item.content,
              status: item.state,
              changeTab: item.changeTab,
            }}
          />
        );
      })}
    </>
  );
};

export default PoppuContext;
