// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { createTheme, ThemeProvider } from '@mui/material';
import styles from './app.module.less';
import LoginForm from './login-form/login-form';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
}
)
export function App() {
  return (<ThemeProvider theme={darkTheme}>
    <LoginForm />
  </ThemeProvider>)

}

export default App;
