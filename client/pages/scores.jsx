import React from 'react';
import Star from '../icons/star'
import ModalOuterContainer from '../components/PopupModalDialog/ModalOuterContainer'
import ModalInnerContainer from '../components/PopupModalDialog/ModalInnerContainer'
import ModalButtonContainer from '../components/PopupModalDialog/ModalButtonContainer'
import ModalButton from '../components/PopupModalDialog/ModalButton'
import ModalTitle from '../components/PopupModalDialog/ModalTitle';
import ModalMainSection from '../components/PopupModalDialog/ModalMainSection';
import SidebarItem from '../components/PopupModalDialog/SidebarItem';
import SideBarContainer from '../components/PopupModalDialog/SideBarContainer';
import ModalInnerSection from '../components/PopupModalDialog/ModalInnerSection';
const Scores = () => {
    return ( 
        <div className="scores">
            <ModalOuterContainer>
                <ModalTitle title="My Scores and Badges"/>
                <ModalInnerContainer>
            
                   <SideBarContainer>
                    <SidebarItem>
                            <img 
                            style={{height:'100%', width:'100%', objectFit:'cover'}} 
                            src="https://res.cloudinary.com/dppogsm2u/image/upload/v1586349608/male_hjpio5.jpg" 
                            alt=""/>
                        </SidebarItem>
                        <SidebarItem>
                        <span>Overall Star Ranking</span>
                        </SidebarItem>
                   </SideBarContainer>
                    <ModalMainSection>
                        <ModalInnerSection>
                            <span>My Star Rating</span>
                            <div>
                                <Star/>
                                <Star/>
                                <Star/>
                                <Star/>
                            </div>
                        </ModalInnerSection>
                        <ModalInnerSection>
                            <span>My Badges</span>
               
                        </ModalInnerSection>
               

                    </ModalMainSection>
                </ModalInnerContainer>
                <ModalButtonContainer>
                        <ModalButton text="Cancel"/>
                </ModalButtonContainer>
            </ModalOuterContainer>
        </div>
     );
}
 
export default Scores;