import {SnackbarProvider as NotistackSnackbarProvider, SnackbarProviderProps} from 'notistack';
import React from 'react';
import {CloseSnackbarButton} from '../components/CloseSnackbarButton/CloseSnackbarButton';

const snackbarProviderProps: Omit<SnackbarProviderProps, 'children'> = {
    maxSnack: 3,
    anchorOrigin: {
        horizontal: 'center',
        vertical: 'top',
    },
    autoHideDuration: 2000,
    style: {
        width: '400px',
        maxWidth: '100%',
    },
    action: (key) => <CloseSnackbarButton id={key}/>,
};

export const SnackbarProvider = ({children}: { children: React.ReactNode }) => (
    <NotistackSnackbarProvider {...snackbarProviderProps}>{children}</NotistackSnackbarProvider>
);
