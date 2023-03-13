import {styled, Button as MuiButton, buttonClasses} from "@mui/material";

export const LampBox = styled('div')`
  display: flex;
  flex-direction: column;
  color: #F5F5F5FF;
  background-color: #102949;
  padding: 12px;
`;

export const InformationWrapper = styled('div')`
  display: flex;
  justify-content: center;
  gap: 24px;
  color: #F5F5F5FF;
  background-color: #102949;
`;

export const LightFunctionsWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 12px;
`

export const IntensityButtonsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Button = styled(MuiButton)`
    &.${buttonClasses.disabled} {
      color: #F5F5F5FF;
    }
`

export const IntensityPercentageBox = styled('div')`
  text-align: center;
  border: 1px solid #D3D3D3FF;
  padding: 6px;
`

export const LightingModesWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LightingMode = styled('div')`
  display: flex;
  justify-content: space-between;
`
