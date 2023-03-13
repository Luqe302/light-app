import React from 'react';
import * as S from './LampGroupControl.styles'
import LampPanel from "../../LampPanel/LampPanel";
import {LampGroupControlProps} from './LampGroupControl.types';

const LampGroupControl = ({lamps, onLampParamsUpdate, isLoading, ...props}: LampGroupControlProps) => {

    return (
        <S.Wrapper {...props}>
            {lamps.map(lamp => <LampPanel key={lamp.id}
                                          lamp={lamp}
                                          onLampParamsUpdate={onLampParamsUpdate}
                                          isLoading={isLoading}
            />)}
        </S.Wrapper>
    );
};

export default LampGroupControl;
