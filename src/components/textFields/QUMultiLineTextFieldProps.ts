import { type CSSProperties } from 'react';

export interface QUMultiLineTextFieldProps {
    value?: string;
    onChange?: (changedValue: string, changedIsValid: boolean) => void;
    validationRule?: (value: string) => boolean;
    placeholder?: string;
    disabled?: boolean;

    style?: CSSProperties;
    className?: string;
}
