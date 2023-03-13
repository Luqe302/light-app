export enum LampsApiQueryKey {
    GetLamps = 'getLamps'
}

export enum LampIntensity {
    None = 0,
    First = 1,
    Second = 3,
    Third = 10,
    Fourth = 30,
    Fifth = 100
}

export interface LampDetails {
    id: string;
    name: string;
}

export interface LampParams {
    intensity: LampIntensity;
    isNightVisionEnabled: boolean;
    isDuskTillDownEnabled: boolean;
    isFlashingEnabled: boolean;
}

export interface Lamp extends LampDetails, LampParams {
}

export interface UpdateLampParamsPayload {
    id: string;
    data: Lamp;
}
