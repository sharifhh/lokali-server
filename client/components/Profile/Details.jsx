import React, {Fragment} from 'react';
import ModalInput from '../PopupModalDialog/ModalInput';
import { SKILL_OPTIONS, HOBBY_OPTIONS } from '../../constants'

const Details = ({currLoggedUser}) => {
    return ( 
        <Fragment>
                        
        <p style={{marginLeft:"20px"}} className="subtitle">Personal Details</p>
            
            <div  style={{marginTop:"20px",padding:""}}>
                <ModalInput value={currLoggedUser.name} contain={true} placeholder="Enter your Name" label="Name" type="text"/>
                <ModalInput value={currLoggedUser.surname} contain={true} placeholder="Enter your Surname" label="Surname" type="text"/>
                <ModalInput value={'fds'} contain={true} placeholder="Enter your phone number" label="Contact" type="text"/>
                <ModalInput contain={true} placeholder="Enter your location" label="Location" type="text"/>
            </div>
            <p style={{marginLeft:"20px"}} className="subtitle">More Details</p>
                
                <div style={{marginTop:"20px",padding:""}}>
                    <ModalInput contain={true} placeholder="Enter your Profession" label="Profession" type="text"/>
                    <ModalInput contain={true} placeholder="Select Skills" label="Skills" options={SKILL_OPTIONS}/>
                    <ModalInput contain={true} placeholder="Select Hobbies" label="Hobbies" options={HOBBY_OPTIONS}/>
                </div>
       </Fragment>
     );
}
 
export default Details;