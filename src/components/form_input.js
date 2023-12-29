

// changes
import React, { useState } from 'react';
import Alert from "./alert";
import { Link } from 'react-router-dom';

export default function FormInput(props) {
  const [text, setText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  
  
  const callUpper = () => {
    let upperCased = text.toUpperCase();
    setText(upperCased);
  };
  const callSpellCheck = () => {
   
  };
  const callCopy=()=>
    {
        navigator.clipboard.writeText(text);
        const popwindow = window.open('','popup','width=300,height=200');
        <Alert message="Welcome Guest"/>
        popwindow.document.body.innerHTML="Copied To Clipboard...!!";
        setTimeout(()=>{
            popwindow.close();
        },800);
        
    };
  const callCamel = () => {
    let camelCased = text.replace(/[-_]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ''));
    setText(camelCased);
    <Alert message="Converted to Camel Case you may now Copy it..!!!"/>
  };

  const callLower = () => {
    let lowerCased = text.toLowerCase();
    setText(lowerCased);
    <Alert message="Converted to Lower Case you may now Copy it..!!!"/>
  };

  const callClear = () => {
    setText('');
    <Alert message="All text has been cleared..!!!"/>
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const remove_extra = () =>
  {
    let removed = text.split(/[ ]+/);
    setText(removed.join(" "));
    <Alert message="Extra spaces has been removed..!!!"/>
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    <>
    <Alert message="Dark mode has been enabled..!!"/>
   
    </>
  };
  

  return (
    <div className={`container${darkMode ? ' dark-mode' : ''}`}>
    <h1 className={`text-center mb-4 text-dark`}>{props.heading}</h1>
      <div className={`mb-3${darkMode ? ' text-light' : ''}`}>
        <label htmlFor="text_input" className={`form-label text-${darkMode ? 'black' : 'black'}`}>Enter Here.....</label>
        <textarea className={`form-control ${darkMode ? 'bg-dark text-light' : ''}`} id="text_input" rows="8" value={text} onChange={handleOnChange} />
        <div className={`mt-3${darkMode ? ' text-light' : ''}`}>
          <button className={`btn btn-${darkMode ? 'secondary' : 'success'}`} onClick={callUpper}>To Uppercase</button>
          <button className={`btn btn-${darkMode ? 'secondary' : 'warning'} mx-2`} onClick={callLower}>To Lowercase</button>
          <button className={`btn btn-${darkMode ? 'secondary' : 'secondary'}`} onClick={callCamel}>Camel Case</button>
          <button className={`btn btn-${darkMode ? 'secondary' : 'info'} mx-2`} onClick={callSpellCheck}>
            Spell Check
          </button>
          <button className={`btn btn-${darkMode ? 'secondary' : 'primary'}`} onClick={remove_extra}>Remove Extra Spaces</button>
          <button className={`btn btn-${darkMode ? 'secondary' : 'success'} mx-2`} onClick={callCopy}>Copy</button>
          <button className={`btn btn-${darkMode ? 'secondary' : 'danger'} mx-2`} onClick={callClear}>Clear</button>
          <button className={`btn btn-${darkMode ? 'secondary' : 'dark'} mx-2`} onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>

      <div className={`container${darkMode ? ' text-light' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',  }}>
  <h2 className={`text-${darkMode ? 'secondary' : 'primary'}`}>Your Text Summary</h2>
  <p><b className={`text-${darkMode ? 'secondary' : 'success'}`}>Length of text:</b> <b>{text.length}</b></p>
  <p><b className={`text-${darkMode ? 'secondary ' : 'success'}`}>Number of words:</b> {text.split(" ").length - 1}</p>
  <p>
    <b className={`text-${darkMode ? 'secondary' : 'success'}`}>Approximate reading time:</b> less than{' '}
    <b>{0.008 * (text.split(" ").length - 1)}</b> minutes.
  </p>
  <Link className="nav-link active" aria-current="page" to="/aboutus"><button className={`btn btn-${darkMode ? 'secondary' : 'primary'}`}>About App</button></Link>
  
</div>

    </div>
  );
}
