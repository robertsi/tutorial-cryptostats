import styles from './login-form.module.less';
import { Button, TextField, Link } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { useState } from 'react';

/* eslint-disable-next-line */
export interface SignupFormProps { }

export function SignupForm(props: SignupFormProps) {

  const [email, setEmail] = useState("");
  const [emailErrored, setEmailErrored] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErrored, setPasswordErrored] = useState(false);

  const handleSignup = () => {
    setEmailErrored(!email ? true : false);
    setPasswordErrored(!password ? true : false);
  }
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h1 className="text-6xl">Cryptostats</h1>
      <div className="flex flex-col gap-2">
        <TextField label="Email" className="w-80" type="email" required helperText={emailErrored && "Please enter a valid Email."} value={email} onChange={(event) => setEmail(event.target.value)} error={emailErrored} />
        <TextField label="Password" type="password" className="w-80" required helperText={passwordErrored && "Password may not be empty."} value={password} onChange={(event) => setPassword(event.target.value)} error={passwordErrored} />
        <RouterLink to="/login" className="justify-self-start self-start mt-2">
          <Link>Login</Link>
        </RouterLink>
      </div>
      <Button variant="contained" className="w-80" onClick={handleSignup}>
        <span className='p-1'>Sign Up</span>
      </Button>
    </div>
  );
}

export default SignupForm;
