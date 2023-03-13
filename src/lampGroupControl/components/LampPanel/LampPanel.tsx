import React from 'react';
import {Switch} from '@mui/material';
import * as S from './LampPanel.styles'
import {LampPanelProps} from "./LampPanel.types";
import {useLampPanel} from "../../hooks/useLampPanel/useLampPanel";
import IntensityBars from "../IntensityBars/IntensityBars";


const LampPanel = ({lamp, onLampParamsUpdate, isLoading, ...props}: LampPanelProps) => {

    const {
        increaseIntensity,
        decreaseIntensity,
        setNightVision,
        setDuskTillDown,
        setFlashing,
    } = useLampPanel();

    return (
        <S.LampBox {...props}>
            <S.InformationWrapper>
                {lamp.name}
                <IntensityBars intensity={lamp.intensity}/>
            </S.InformationWrapper>
            <S.LightFunctionsWrapper>
                <S.IntensityButtonsWrapper>
                    <S.Button variant="contained" onClick={() => onLampParamsUpdate(increaseIntensity(lamp))}
                              disabled={isLoading}>+</S.Button>
                    <S.IntensityPercentageBox>{lamp.intensity}%</S.IntensityPercentageBox>
                    <S.Button variant="contained" onClick={() => onLampParamsUpdate(decreaseIntensity(lamp))}
                              disabled={isLoading}>-</S.Button>
                </S.IntensityButtonsWrapper>
                <S.LightingModesWrapper>
                    <S.LightingMode>
                        <span>Night vision</span>
                        <Switch checked={lamp.isNightVisionEnabled}
                                onChange={(event, checked) => onLampParamsUpdate(setNightVision(lamp, checked))}
                                disabled={isLoading}/>
                    </S.LightingMode>
                    <S.LightingMode>
                        <span>Dusk Till Dawn</span>
                        <Switch checked={lamp.isDuskTillDownEnabled}
                                onChange={(event, checked) => onLampParamsUpdate(setDuskTillDown(lamp, checked))}
                                disabled={isLoading}/>
                    </S.LightingMode>
                    <S.LightingMode>
                        <span>Flashing</span>
                        <Switch checked={lamp.isFlashingEnabled}
                                onChange={(event, checked) => onLampParamsUpdate(setFlashing(lamp, checked))}
                                disabled={isLoading}/>
                    </S.LightingMode>
                </S.LightingModesWrapper>
            </S.LightFunctionsWrapper>
        </S.LampBox>

    );
};

export default LampPanel;
