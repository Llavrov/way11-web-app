import TextField from '@mui/material/TextField';
import { type ReactElement } from 'react';
import { type QUMultiLineTextFieldProps } from './QUMultiLineTextFieldProps';

export default function QUMultiLineTextField({
    value,
    onChange,
    validationRule,
    placeholder,
    disabled,
    style,
    className,
}: QUMultiLineTextFieldProps): ReactElement {
    return (
        <TextField
            multiline
            value={value}
            onChange={({ target }): void => onChange?.(target.value, validationRule ? validationRule(target.value) : true)}
            placeholder={placeholder}
            disabled={disabled}
            type="text"
            InputProps={{
                sx: {
                    '&.Mui-focused': {
                        '.MuiOutlinedInput-notchedOutline': {
                            border: '0px solid black',
                            borderColor: '#8E8E93',
                        },
                        color: 'rgba(142, 142, 147, 1)',
                        fontSize: '28px',
                    },
                    '.MuiOutlinedInput-notchedOutline': {
                        border: '0px solid #8E8E93',
                        borderColor: '#8E8E93',
                    },
                    borderRadius: '20px',
                    background: 'rgba(142, 142, 147, 0.08)',
                    color: 'rgba(142, 142, 147, 0.24)',
                    transition: '0.5s',
                    height: '230px',
                    fontSize: '24px',
                    alignItems: 'flex-start',
                },
            }}
            style={style}
            className={'w-full' + (className ? ' ' + className : '')}
        />
    );
}
