import { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Modal, Card } from '@material-ui/core'
import axios from 'axios'
import ModalOuterContainer from '../../components/PopupModalDialog/ModalOuterContainer'
import ModalHeader from '../../components/PopupModalDialog/ModalHeader'
import ModalInnerContainer from '../../components/PopupModalDialog/ModalInnerContainer'
import ModalTitle from '../../components/PopupModalDialog/ModalTitle'
import ModalButtonContainer from '../../components/PopupModalDialog/ModalButtonContainer'
import ModalButton from '../../components/PopupModalDialog/ModalButton'
import SideBarContainer from '../../components/PopupModalDialog/SideBarContainer'
import SidebarItem from '../../components/PopupModalDialog/SidebarItem'
import ModalInput from '../../components/PopupModalDialog/ModalInput'
import ModalMainSection from '../../components/PopupModalDialog/ModalMainSection'

const backgroundColorHelperFn = type => {
  return (
    (type === 'offer' && 'orange') ||
    (type === 'request' && 'blue') ||
    (type === 'event' && 'purple') ||
    (type === 'initiative' && 'green') ||
    'white'
  )
}

const PostCard = ({ title, desc, location, tags, type }) => {
  const [open, setOpen] = useState(false)

  const handleBid = async () => {
    let postAuthorId = '5eca93f6ffcd6532d455e651'
    let loggedUserId = '5ecd2ca4af87ae180c5b1640'
    let res = await axios.post(
      `http://localhost:4000/api/posts/items/bid/new`,
      { authorId: postAuthorId, loggedUserId },
      { withCredentials: true }
    )
    console.log(res)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
      <div  style={{backgroundColor: backgroundColorHelperFn((type=type))}} onClick={handleOpen} className='post-card flex space-between column'>
        <header>
          <h1>{title}</h1>
        </header>
        <p>{desc}</p>
        <footer className="flex space-between align-center">
          <span>{location}</span>
          <button>More</button>
        </footer>
      </div>
  )
}

export default PostCard
