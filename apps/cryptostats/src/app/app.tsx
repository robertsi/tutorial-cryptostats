// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { createTheme, ThemeProvider } from '@mui/material';
import { Routes } from '../routes/routes';
import styles from './app.module.less';
import React, { useEffect } from "react";
import { useGetUserQuery } from "./../apis/users.api";
import { useAppDispatch } from "./hooks";
import { useNavigate } from "react-router";
import { setAuthState } from "../slices/auth.slice";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  }
}
)
export function App() {
  const { data: user } = useGetUserQuery(undefined);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      dispatch(setAuthState({ user }));
      navigate("/");
    }
  }, [user, dispatch, navigate]);

  return (<ThemeProvider theme={darkTheme}>
    <Routes />
  </ThemeProvider>)

}

export default App;
