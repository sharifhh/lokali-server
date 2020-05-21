import React, { useEffect,  } from 'react';
import ModalOuterContainer from '../../components/PopupModalDialog/ModalOuterContainer';
import ModalInnerContainer from '../../components/PopupModalDialog/ModalInnerContainer';
import ModalInnerSection from '../../components/PopupModalDialog/ModalInnerSection';
import ModalTitle from '../../components/PopupModalDialog/ModalTitle';
import ModalInput from '../../components/PopupModalDialog/ModalInput';
import SidebarItem from '../../components/PopupModalDialog/SidebarItem'
import SidebarContainer from '../../components/PopupModalDialog/SidebarContainer'
import ModalButtonContainer from '../../components/PopupModalDialog/ModalButtonContainer';
import ModalButton from '../../components/PopupModalDialog/ModalButton';
import { SKILL_OPTIONS, HOBBY_OPTIONS } from '../../constants';
import { useRouter } from 'next/router';
const Profile = () => {
    const router = useRouter()
    useEffect(()=>{
        let {userId} = router.query
        console.log(userId)
        
    },[])
    return ( 
        <ModalOuterContainer height="500px" color="#fea53a">
            <ModalTitle title="My Profile"/>
            <ModalInnerContainer>
                <SidebarContainer>
                    <SidebarItem>
                        <span>Click to add your photo</span>
                    </SidebarItem>
                    <SidebarItem>
                        <span>Your Score and Badges</span>
                    </SidebarItem>
                </SidebarContainer>
                <ModalInnerSection>
                        <p style={{marginLeft:"20px"}} className="subtitle">Personal Details</p>
                        
                        <div  style={{marginTop:"20px",padding:""}}>
                            <ModalInput contain={true} placeholder="Enter your Name" label="Name" type="text"/>
                            <ModalInput contain={true} placeholder="Enter your Surname" label="Surname" type="text"/>
                            <ModalInput contain={true} placeholder="Enter your phone number" label="Contact" type="text"/>
                            <ModalInput contain={true} placeholder="Enter your location" label="Location" type="text"/>
                        </div>
                        <p style={{marginLeft:"20px"}} className="subtitle">More Details</p>
                            
                            <div style={{marginTop:"20px",padding:""}}>
                                <ModalInput contain={true} placeholder="Enter your Profession" label="Profession" type="text"/>
                                <ModalInput contain={true} placeholder="Select Skills" label="Skills" options={SKILL_OPTIONS}/>
                                <ModalInput contain={true} placeholder="Select Hobbies" label="Hobbies" options={HOBBY_OPTIONS}/>
                            </div>
                </ModalInnerSection>

            </ModalInnerContainer>
            <ModalButtonContainer>
                <ModalButton bg="white" color="#999" text="Save"/>
                <ModalButton bg="white" color="#999" text="Cancel"/>
            </ModalButtonContainer>
        </ModalOuterContainer>
     );
}
 
export default Profile;