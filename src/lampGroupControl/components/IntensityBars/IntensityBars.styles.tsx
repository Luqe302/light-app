import {styled} from "@mui/material";

export const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const Bar = styled('div')<{
    isActive: boolean
}>`
  height: 5px;
  width: 30px;
  border-radius: 5px;
  background-color: ${({ isActive }) => (isActive ? '#F5F5F5FF' : '#094E95')};

`;
