import React from 'react';
import {useLampsApi} from '../../hooks/useLampApi/useLampsApi';
import {LampsApiQueryKey, UpdateLampParamsPayload} from '../../hooks/useLampApi/useLampApi.types';
import {useQueryClient} from '@tanstack/react-query';
import {GetLamps} from "../../components/GetLamps/GetLamps";
import LampGroupControl from "../../components/GetLamps/LampGroupControl/LampGroupControl";
import {useSnackbar} from "../../../common/hooks/useSnackbar";

export const LampsDashboard = () => {
    const {showError, showSuccess} = useSnackbar();

    const queryClient = useQueryClient();

    const {useUpdateLampParams} = useLampsApi();

    const {mutate, isLoading} = useUpdateLampParams();

    const handleLampParamsUpdate = (payload: UpdateLampParamsPayload) => {
        mutate(payload, {
            onSuccess: (response) => {
                showSuccess(`Lamp ${payload.data.name} updated`)
                return queryClient.setQueryData([LampsApiQueryKey.GetLamps], response)
            },
            onError: (err) => {
                showError(`Error occurred: ${err}`)
            }
        })
    }

    return <GetLamps>
        {(lamps) => <LampGroupControl lamps={lamps} onLampParamsUpdate={handleLampParamsUpdate} isLoading={isLoading}/>}
    </GetLamps>
}
