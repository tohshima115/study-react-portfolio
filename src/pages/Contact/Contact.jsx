import './Contact.css';
import Nav from '../../components/Nav';
import Header from '../../components/Header';
import ContactBox from '../../components/ContactBox';
import { useState } from 'react';

function Contact() {
  const [nameVal, setNameVal] = useState("")
  const onInputNameValueChanged =(e)=> setNameVal(e.target.value);

  const [mailVal, setMailVal] = useState("")
  const onInputMailValueChanged =(f)=> setMailVal(f.target.value);

  return (
    <div className='contact'>
      <Nav/>
      <div className='container'>
        <Header title={"Contact"} />
        <main>
          <ContactBox boxName={"Name"} type={"text"} val={nameVal} change={onInputNameValueChanged}/>
          <ContactBox boxName={"Mail"} type={"email"} val={mailVal} change={onInputMailValueChanged}/>
          <div className='contactBox'>
            <div className='boxName'>Content of inquiry</div>
            <textarea className='boxInput text' name="context" id="" cols="30" rows="10"></textarea>
          </div>
          <div className='contactBox'>
            <input className='boxInput submit' type="submit" value="Submit" />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Contact;