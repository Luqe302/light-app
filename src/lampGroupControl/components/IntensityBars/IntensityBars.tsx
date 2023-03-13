import {useMemo} from "react";
import * as S from './IntensityBars.styles'
import {LampIntensity} from "../../hooks/useLampApi/useLampApi.types";

const IntensityBars = ({intensity}: any) => {
    const intensityOptionsAsArray = useMemo(() => Object.values(LampIntensity).filter(value => typeof value === "number"), []);

    const renderIntensityBars = () => {
        return intensityOptionsAsArray.map((option, index) => (
                <S.Bar key={index} isActive={option <= intensity}></S.Bar>
            )
        ).slice(1);
    }

    return <S.Wrapper>{renderIntensityBars()}</S.Wrapper>
}

export default IntensityBars;