import React, { useEffect, useState, Fragment, useContext  } from 'react';
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
import { AuthContext } from '../../context/AuthContext';
import { getURL } from 'next/dist/next-server/lib/utils';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
const Profile = () => {
    const {getUser} = useContext(AuthContext)
    // const myWidget = window.cloudinary.createUploadWidget(
    //         {
    //           cloudName:'dppogsm2u',
    //           uploadPreset: 'lokali',
    //           multiple: false,
    //           maxFileSize: 3500000
    //         },
    //         (err, res) => {
    //         console.log(res,err)
    //         }
    //       );
    const [open, setOpen] = useState(true)
    const [currOnMainPage, setCurrOnMainPage] = useState(true)
    const router = useRouter()
    const initUser =  async (id) =>{
        let res = await getUser(id)
        console.log(res)
    }
    useEffect(()=>{
        
        let {userid} = router.query
        initUser(userid)
        
        
    },[router.query])
    const openBadgesPanel = () => setCurrOnMainPage(false)
    const openWidget = () =>{myWidget.open()}
    
    return ( 
        <ProtectedRoute>
                    <ModalOuterContainer open={open} height="600px" color="#fea53a">
            <ModalTitle title="My Profile"/>
            <ModalInnerContainer>
                <SidebarContainer>
                    <SidebarItem onClick={openWidget}>
                        <p>Click to add your photo</p >
                    </SidebarItem>
                    <SidebarItem onClick={openBadgesPanel}>
                    <button>Your Score and Badges</button >
                    <img width='100px' src="../../static/gold-star.png" alt=""/>
                    <p>4 star rating</p>
                    </SidebarItem>
                </SidebarContainer>
                <ModalInnerSection enableScroll={!currOnMainPage}>
                    {currOnMainPage ? 
                   <Fragment>
                        
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
                   </Fragment>
                   : 
                   <Fragment >
                        
                   <p style={{marginLeft:"20px"}} className="subtitle">My Ranking</p>
                       
                       <div  style={{marginTop:"20px",padding:""}}>
                            <img width='80px' height="auto" src="../../static/gold-star.png" alt=""/>
                            <img width='80px' height="auto"src="../../static/gold-star.png" alt=""/>
                            <img width='80px' height="auto"src="../../static/gold-star.png" alt=""/>
                            <img width='80px' height="auto"src="../../static/gold-star.png" alt=""/>
                     
                       </div>
                       <p style={{marginLeft:"20px"}} className="subtitle">My Badges</p>
                    
                           <div style={{marginTop:"20px",padding:""}}>
                           <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/> <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/> <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                                <img width='80px' src="../../static/test-badge-icon.png" alt=""/>
                           </div>
                  </Fragment>
                }
                </ModalInnerSection>

            </ModalInnerContainer>
            <ModalButtonContainer>
                <ModalButton bg="white" color="#999" text="Save"/>
                <ModalButton onClick={ ()=>setOpen(false)} bg="white" color="#999" text="Cancel"/>
            </ModalButtonContainer>
            <button onClick={()=>setCurrOnMainPage(true)} className="align-bottom">back to details</button>
        </ModalOuterContainer>
        </ProtectedRoute>
     );
}
 
export default Profile;