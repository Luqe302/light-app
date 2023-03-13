import {useMutation, useQuery} from '@tanstack/react-query';
import {useState} from "react";
import {Lamp, LampIntensity, LampsApiQueryKey, UpdateLampParamsPayload} from './useLampApi.types';

const mockedLamps: Lamp[] = [
    {
        id: 'aph08xxx123123',
        name: 'APH 08',
        intensity: LampIntensity.Third,
        isNightVisionEnabled: false,
        isDuskTillDownEnabled: true,
        isFlashingEnabled: false,
    },
    {
        id: 'trh08xxx123123',
        name: 'TRH 08',
        intensity: LampIntensity.None,
        isNightVisionEnabled: false,
        isDuskTillDownEnabled: false,
        isFlashingEnabled: false,
    },
    {
        id: 'papi08xxx123123',
        name: 'PAPI 08',
        intensity: LampIntensity.Fifth,
        isNightVisionEnabled: true,
        isDuskTillDownEnabled: true,
        isFlashingEnabled: true,
    }

]

export function useLampsApi() {

    const [lamps, setLamps] = useState<Lamp[]>(mockedLamps)

    const useGetLamps = () => useQuery({
        queryKey: [LampsApiQueryKey.GetLamps],
        queryFn: () => new Promise<Lamp[]>((resolve => {
            return setTimeout(() => resolve(lamps), 2000)
        }))
    })

    const useUpdateLampParams = () => useMutation({
        mutationFn: (payload: UpdateLampParamsPayload) => new Promise<Lamp[]>(((resolve, reject) => {
            const {id, data} = payload;

            const currentLamps = Array.from(lamps);
            const targetLamp = currentLamps.find((item) => item.id === id);

            if (!targetLamp) {
                return reject('Lamp not found');
            }

            const updatedLamp = {...targetLamp, ...data};
            const targetLampIndex = currentLamps.findIndex((item) => item.id === id);

            currentLamps[targetLampIndex] = updatedLamp;
            setLamps(currentLamps);
            setTimeout(() => resolve(currentLamps), 500)
        }))
    })

    return {useGetLamps, useUpdateLampParams}
}
