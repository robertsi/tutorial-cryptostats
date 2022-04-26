import styles from './login-form.module.less';
import { Button, TextField } from '@mui/material';

/* eslint-disable-next-line */
export interface LoginFormProps { }

export function LoginForm(props: LoginFormProps) {
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h1 className="text-6xl">Cryptostats</h1>
      <div className="flex flex-col gap-2">
        <TextField label="Email" className="w-80" type="email" required />
        <TextField label="Password" type="password" className="w-80" required />
      </div>
      <Button variant="contained" className="w-80">
        <span className='p-1'>Login</span>
      </Button>
    </div>
  );
}

export default LoginForm;
