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

const PostTile = ({ styles }) => {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(null);

  const handleClose = () => {
    console.log("Clicked and handleClose was fired")
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    console.log(open);
  }, [open]);

  const structure = [
    "Gift Offering",
    "Gift Offering Type",
    "Gift Offering Category",
    "Location",
    "Time",
    "Date",
    "Attending",
  ];

  return (
    <div onClick={handleOpen}>
      <div className={`${styles.postTile}`}>
        <div className={`${styles.postTileTitle}`}>
          Gift Offering - Dinner Party
        </div>
        <div className={`${styles.postTileBody}`}>
          <p>
            <b>The offering item and explanation mission statement.</b>
          </p>
          <p>More details here.</p>
        </div>
      </div>
      {(open && (
        <ModalOuterContainer>
          <ModalHeader>HEADER</ModalHeader>
          <ModalInnerContainer>
            <SideBarContainer>
              <SidebarItem></SidebarItem>
              <SidebarItem></SidebarItem>
            </SideBarContainer>
            <ModalMainSection>
              {structure.map((item, index) => (
                <ModalInput key={index} label={item} />
              ))}
            </ModalMainSection>
          </ModalInnerContainer>
          <ModalButtonContainer>
            <ModalButton handleClick={handleClose}>Cancel</ModalButton>
            <ModalButton>Bid</ModalButton>
          </ModalButtonContainer>
        </ModalOuterContainer>
      )) ||
        null}
    </div>
  );
};
export default PostTile;
