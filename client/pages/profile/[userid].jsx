import React, { useEffect, useState, Fragment, useContext } from 'react'
import ModalOuterContainer from '../../components/PopupModalDialog/ModalOuterContainer'
import ModalInnerContainer from '../../components/PopupModalDialog/ModalInnerContainer'
import ModalInnerSection from '../../components/PopupModalDialog/ModalInnerSection'
import ModalTitle from '../../components/PopupModalDialog/ModalTitle'
import ModalInput from '../../components/PopupModalDialog/ModalInput'
import SidebarItem from '../../components/PopupModalDialog/SidebarItem'
import SidebarContainer from '../../components/PopupModalDialog/SidebarContainer'
import ModalButtonContainer from '../../components/PopupModalDialog/ModalButtonContainer'
import ModalButton from '../../components/PopupModalDialog/ModalButton'
import { SKILL_OPTIONS, HOBBY_OPTIONS } from '../../constants'
import { useRouter } from 'next/router'
import { AuthContext } from '../../context/AuthContext'
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute'
import Details from '../../components/Profile/Details'
import Badges from '../../components/Profile/Badges'
const Profile = () => {
  const { currLoggedUser, setCurrLoggedUser } = useContext(AuthContext)

  const [widget, setWidget] = useState(null)

  useEffect(() => {
    setWidget(
      window.cloudinary.createUploadWidget(
        {
          cloudName: 'dppogsm2u',
          uploadPreset: 'lokali',
          multiple: false,
          maxFileSize: 3500000
        },
        (error, result) => {
          if (!error && result && result.event === 'success') {
            setCurrLoggedUser({
              ...currLoggedUser,
              profileImg: result.info.url
            })
          }
        }
      )
    )
  }, [])

  const [open, setOpen] = useState(true)
  const [currOnMainPage, setCurrOnMainPage] = useState(true)
  const router = useRouter()

  const openBadgesPanel = () => setCurrOnMainPage(false)
  const openWidget = () => {
    widget.open()
  }

  return currLoggedUser ? (
    <ModalOuterContainer open={open} height='600px' color='#fea53a'>
      {/* <button onClick={getGeoLoc}> GEO LOC</button> */}
      <ModalTitle title='My Profile' />
      <ModalInnerContainer>
        <SidebarContainer>
          <SidebarItem onClick={openWidget}>
            <img
              style={{ width: '100%', objectFit: 'cover' }}
              src={currLoggedUser.profileImg}
              alt='profileImg'
            />
          </SidebarItem>
          <SidebarItem onClick={openBadgesPanel}>
            <button>Your Score and Badges</button>
            <img width='100px' src='../../static/gold-star.png' alt='' />
            <p>4 star rating</p>
          </SidebarItem>
          <SidebarItem>
            <h1>My Activities</h1>
          </SidebarItem>
        </SidebarContainer>
        {/* Shows profile or badges */}
        <ModalInnerSection enableScroll={!currOnMainPage}>
          {currOnMainPage ? <Details currLoggedUser={currLoggedUser} /> : <Badges />}
        </ModalInnerSection>
      </ModalInnerContainer>
      <ModalButtonContainer>
        <ModalButton bg='white' color='#999' text='Save' />
        <ModalButton
          onClick={() => setOpen(false)}
          bg='white'
          color='#999'
          text='Cancel'
        />
      </ModalButtonContainer>
      <button onClick={() => setCurrOnMainPage(true)} className='align-bottom'>
        back to details
      </button>
    </ModalOuterContainer>
  ) : null
}

export default Profile
