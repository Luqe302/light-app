import {useSnackbar} from 'notistack';
import * as S from './CloseSnackbarButton.styles'
import {CloseSnackbarButtonProps} from "./CloseSnackbarButton.types";
import {CloseIcon} from "../../icons/CloseIcon";

export const CloseSnackbarButton = ({id, ...props}: CloseSnackbarButtonProps) => {
    const {closeSnackbar} = useSnackbar();
    return (
        <S.CloseButton onClick={() => closeSnackbar(id)} {...props}>
            <CloseIcon/>
        </S.CloseButton>
    );
};
