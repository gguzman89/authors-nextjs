'use client';

import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline"
import * as React from "react";

type ThemeProp = {
    children: JSX.Element;
  };

export enum themePalette {
    BTN_PRIMARY = '#84d08e',
    PINK = '#745d5c',
    FONT_GLOBAL = '"Lato", monospace',
}

const themeOptions: ThemeOptions = {
    palette: {
        mode: "dark",
        primary: {
            main: themePalette.BTN_PRIMARY,
        },
        background: {
            default: themePalette.PINK,
        }
    },
    typography: {
        fontFamily: themePalette.FONT_GLOBAL
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: '8px',
                }
            }
        }
    },
}

const theme = createTheme(themeOptions)

export const ThemeConfig: React.FC<ThemeProp> = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}