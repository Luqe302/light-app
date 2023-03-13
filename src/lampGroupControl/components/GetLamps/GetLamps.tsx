import {useLampsApi} from '../../hooks/useLampApi/useLampsApi';
import {Alert, CircularProgress} from '@mui/material';
import {Lamp} from '../../hooks/useLampApi/useLampApi.types';
import React from 'react';

export const GetLamps = ({children, ...props}: { children: (lamps: Lamp[]) => React.ReactNode }) => {
    const {useGetLamps} = useLampsApi();

    const {isLoading, data, isSuccess, error} = useGetLamps();

    if (isLoading) {
        return <CircularProgress {...props} />
    }

    if (isSuccess && data) {
        return <div {...props}>{children(data)}</div>
    }

    return <Alert severity="error" {...props}><>Something went wrong. Error: ${error}</>
    </Alert>
}
