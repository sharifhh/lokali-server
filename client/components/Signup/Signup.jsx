//CORE IMPORS 
import React, { useState } from 'react';
import Router from 'next/router';
//MODAL IMPORTS 
import ModalOuterContainer from '../PopupModalDialog/ModalOuterContainer';
import ModalTitle from '../PopupModalDialog/ModalTitle'
import ModalButtonContainer from '../PopupModalDialog/ModalButtonContainer'
import ModalButton from '../PopupModalDialog/ModalButton';
import ModalInput from '../PopupModalDialog/ModalInput';
//UTILS
import { MONTH_LIST, NUM_DAY_IN_MONTH, GENDER_OPTIONS, LOGGED_USER_KEY , ACTIVATION_ROUTE } from '../../constants';
import { saveToStorage } from '../../utils';


const Signup = () => {
    const [form, setForm] = useState({
        firstName:'', //String
        surname:'', //String
        email:'', //String
        day:'',
        month:'',
        year:'',
        gender:''//String
    })
    const onChange = e => setForm({...form, [e.target.id]:e.target.value})
    
    const handleSubmit = () => {
        //Redirect user to activation page. in the mean time save user cords in local storage
        saveToStorage(LOGGED_USER_KEY, form)
        Router.push(ACTIVATION_ROUTE)
    }
    return ( 
        <div className="signup">
            <ModalOuterContainer color="#d9d9d9">
                    <ModalTitle color="#3388e3" size="22px" title="Create a new Lokali Account"/>
                    <p className="subtitle">It's quick and easy</p>
                    <div style={{margin:'10px'}}>
                        <ModalInput value={form.firstName} onChange={onChange} id="firstName" type="text" placeholder="First Name"/>
                        <ModalInput value={form.surname} onChange={onChange} id="surname" type="text" placeholder="Surname"/>
                        <ModalInput value={form.email} onChange={onChange} id="email" type="text" placeholder="Email Address"/>
                        <p className="subtitle">Birthday</p>
                        <div style={{marginTop:'10px'}} className="flex">
                            <ModalInput value={form.day} onChange={onChange} id="day" options={NUM_DAY_IN_MONTH}/>
                            <ModalInput value={form.month} onChange={onChange} id="month" options={MONTH_LIST}/>
                            <ModalInput value={form.year} onChange={onChange} id="year" options={[2001,2002]}/>
                        </div>
                            <p className="subtitle">Gender</p>
                         <div style={{marginTop:"10px"}}>
                            <ModalInput value={form.gender} onChange={onChange} id="gender" options={GENDER_OPTIONS}/>
                         </div>
                    </div>
                    <ModalButtonContainer>
                        <ModalButton onClick={handleSubmit} text="Sign Up"/>
                    </ModalButtonContainer>
            </ModalOuterContainer>
        </div>
     );
}
 
export default Signup;