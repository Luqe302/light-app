import {Lamp, LampIntensity, UpdateLampParamsPayload} from "../useLampApi/useLampApi.types";

export function useLampPanel() {

    const getIncreasedIntensity = (currentIntensity: LampIntensity) => {
        const intensityValues = Object.values(LampIntensity);
        const currentIndex = intensityValues.indexOf(currentIntensity);

        if (currentIndex < intensityValues.length - 1) {
            return intensityValues[currentIndex + 1] as LampIntensity;
        }
        return LampIntensity.Fifth
    };

    const getDecreasedIntensity = (currentIntensity: LampIntensity) => {
        const intensityValues = Object.values(LampIntensity);
        const currentIndex = intensityValues.indexOf(currentIntensity);

        if (currentIndex > 0 && currentIntensity !== LampIntensity.None) {
            return intensityValues[currentIndex - 1] as LampIntensity;
        }

        return LampIntensity.None
    };

    const increaseIntensity = (lamp: Lamp): UpdateLampParamsPayload => {
        return {id: lamp.id, data: {...lamp, intensity: getIncreasedIntensity(lamp.intensity)}}
    }

    const decreaseIntensity = (lamp: Lamp): UpdateLampParamsPayload => {
        return {id: lamp.id, data: {...lamp, intensity: getDecreasedIntensity(lamp.intensity)}}
    }

    const setNightVision = (lamp: Lamp, checked: boolean): UpdateLampParamsPayload => {
        return {id: lamp.id, data: {...lamp, isNightVisionEnabled: checked}}
    }

    const setDuskTillDown = (lamp: Lamp, checked: boolean): UpdateLampParamsPayload => {
        return {id: lamp.id, data: {...lamp, isDuskTillDownEnabled: checked}}
    }

    const setFlashing = (lamp: Lamp, checked: boolean): UpdateLampParamsPayload => {
        return {id: lamp.id, data: {...lamp, isFlashingEnabled: checked}}
    }

    return {
        increaseIntensity,
        decreaseIntensity,
        setNightVision,
        setDuskTillDown,
        setFlashing,
    }
}