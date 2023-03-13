import {Lamp, UpdateLampParamsPayload} from '../../hooks/useLampApi/useLampApi.types';

export interface LampPanelProps {
    lamp: Lamp;
    onLampParamsUpdate: (payload: UpdateLampParamsPayload) => void;
    isLoading: boolean;
}
