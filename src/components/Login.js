import { React, useState, Component } from 'react';
import './Login.scss';
import Home from './Home';

function Login({ LoggingIn }) {
  const [details, setDetails] = useState({ username: "" });

  const submitHandler = e => {
    e.preventDefault();
    LoggingIn(details);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="main">
        <div className="logo">
          Samcord
        </div>
        <div className="form__group field">
          <input onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} type="input" className="form__field" placeholder="Username" name="inputname" id='username' required />
          <label htmlFor="username" className="form__label">Username</label>
          <button className="button-50" role="button" >SUBMIT</button>
        </div>
      </div>
    </form>
  )
}

export default Login;

















/* function Login() {
    const handleSubmit = (val) => {
        val.preventDefault()
        const uusername = val.target.inputname.value;
        console.log("username: " + uusername);
        this.props.history.push('./Home');
        
    }

    return (
        <div className="main">
            <div className="logo">
                Samcord
            </div>
                <form onSubmit={handleSubmit}>
                <div className="form__group field">
                    <input type="input" className="form__field" placeholder="Username" name="inputname" id='username' required />
                    <label htmlFor="username" className="form__label">Username</label>
                    <button>SUBMIT</button>
                </div>
                </form>
        </div>
    )
}

export default Login; */

/* <!-- HTML !-->
<button class="button-50" role="button">Button 50</button>


.button-50 {
  appearance: button;
  background-color: #000;
  background-image: none;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0,#000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: ITCAvantGardeStd-Bk,Arial,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 5px 10px 0;
  overflow: visible;
  padding: 12px 40px;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.button-50:focus {
  text-decoration: none;
}

.button-50:hover {
  text-decoration: none;
}

.button-50:active {
  box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
  outline: 0;
}

.button-50:not([disabled]):active {
  box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .button-50 {
    padding: 12px 50px;
  }
} */