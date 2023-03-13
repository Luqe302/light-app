import {SnackbarMessage, useSnackbar as useNotistackSnackbar} from 'notistack';
import {useCallback} from 'react';

export function useSnackbar() {
    const notistackSnackbar = useNotistackSnackbar();

    const showSuccess = useCallback(
        (message: SnackbarMessage, duration?: number) => {
            notistackSnackbar.enqueueSnackbar(message, {variant: 'success', autoHideDuration: duration});
        },
        [notistackSnackbar]
    );

    const showError = useCallback(
        (message: SnackbarMessage) => {
            notistackSnackbar.enqueueSnackbar(message, {variant: 'error'});
        },
        [notistackSnackbar]
    );

    return {showSuccess, showError};
}
