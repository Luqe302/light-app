import {Lamp, UpdateLampParamsPayload} from '../../../hooks/useLampApi/useLampApi.types';

export interface LampGroupControlProps {
    lamps: Lamp[]
    onLampParamsUpdate: (payload: UpdateLampParamsPayload) => void;
    isLoading: boolean;
}
