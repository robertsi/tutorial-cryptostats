import { User } from '@cryptostats/api';
import { Button, Link, TextField } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useLoginMutation } from '../../apis/auth.api';
import { setAuthState } from '../../slices/auth.slice';
import { useAppDispatch } from '../hooks';

/* eslint-disable-next-line */
export interface LoginFormProps { }

export function LoginForm(props: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [emailErrored, setEmailErrored] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErrored, setPasswordErrored] = useState(false);

  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setEmailErrored(!email ? true : false);
    setPasswordErrored(!password ? true : false);
    try {
      // const response = (await login({ email, password })) as { data: User };
      const response = await login({ email, password }).unwrap();;
      dispatch(setAuthState({ user: response }));
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h1 className="text-6xl">Cryptostats</h1>
      <div className="flex flex-col gap-2">
        <TextField label="Email" className="w-80" type="email" required helperText={emailErrored && "Please enter a valid Email."} value={email} onChange={(event) => setEmail(event.target.value)} error={emailErrored} />
        <TextField label="Password" type="password" className="w-80" required helperText={passwordErrored && "Password may not be empty."} value={password} onChange={(event) => setPassword(event.target.value)} error={passwordErrored} />
        <RouterLink to="/signup" className="justify-self-start self-start mt-2">
          <Link>Sign Up</Link>
        </RouterLink>
      </div>
      <Button variant="contained" className="w-80" onClick={handleLogin}>
        <span className='p-1'>Login</span>
      </Button>
    </div>
  );
}

export default LoginForm;
