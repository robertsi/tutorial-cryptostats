// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { createTheme, ThemeProvider } from '@mui/material';
import { Routes } from '../routes/routes';
import styles from './app.module.less';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
}
)
export function App() {
  return (<ThemeProvider theme={darkTheme}>
    <Routes />
  </ThemeProvider>)

}

export default App;
