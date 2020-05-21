import React, { useState, useEffect } from "react";

import ModalOuterContainer from "../../components/PopupModalDialog/ModalOuterContainer";
import ModalHeader from "../../components/PopupModalDialog/ModalHeader";
import ModalInnerContainer from "../../components/PopupModalDialog/ModalInnerContainer";
import ModalTitle from "../../components/PopupModalDialog/ModalTitle";
import ModalButtonContainer from "../../components/PopupModalDialog/ModalButtonContainer";
import ModalButton from "../../components/PopupModalDialog/ModalButton";
import SideBarContainer from "../../components/PopupModalDialog/SideBarContainer";
import SidebarItem from "../../components/PopupModalDialog/SidebarItem";
import ModalInput from "../../components/PopupModalDialog/ModalInput";
import ModalMainSection from "../../components/PopupModalDialog/ModalMainSection";

const CreateNewPostBar = (props) => {
  const { styles } = props;

  
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <div onClick={handleOpen}>
      <div className={`${styles.createNewPostBar}`}>
        <div>
          <input
            className={`${styles.createNewPostPanelInputField}`}
            placeholder="Enter the action title here"
          />
        </div>
        <div>
          <button className={`${styles.createNewPostButton}`}>
            Create A New Post
          </button>
        </div>
      </div>
      {open === true && (
        <ModalOuterContainer>
          <ModalHeader>HEADER</ModalHeader>
          <ModalInnerContainer>
            <SideBarContainer>
              <SidebarItem></SidebarItem>
              <SidebarItem></SidebarItem>
            </SideBarContainer>
            <ModalMainSection>
                
            </ModalMainSection>
          </ModalInnerContainer>
          <ModalButtonContainer>
            <ModalButton onClick={handleClose}>Cancel</ModalButton>
            <ModalButton>Create</ModalButton>
          </ModalButtonContainer>
        </ModalOuterContainer>
      )}
    </div>
  );
};
export default CreateNewPostBar;
