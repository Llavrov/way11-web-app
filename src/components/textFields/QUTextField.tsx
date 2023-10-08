import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { type ReactElement } from 'react';
import { type QUTextFieldProps } from './QUTextFieldProps';

export default function QUTextField({
    value,
    onChange,
    validationRule,
    placeholder,
    disabled,
    type,
    autocomplete,
    startContent,
    endContent,
    style,
    className,
    ...params
}: QUTextFieldProps): ReactElement {
    return (
        <TextField
            {...params}
            value={value}
            onChange={({ target }): void => onChange?.(target.value, validationRule ? validationRule(target.value) : true)}
            placeholder={placeholder}
            disabled={disabled}
            type={type}
            autoComplete={autocomplete}
            InputProps={{
                ...(params as any).InputProps,
                startAdornment: startContent ? <InputAdornment position="start">{startContent}</InputAdornment> : undefined,
                endAdornment: endContent ? <InputAdornment position="end">{endContent}</InputAdornment> : undefined,
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
                    height: '80px',
                    fontSize: '24px',
                },
            }}
            style={style}
            className={'w-full' + (className ? ' ' + className : '')}
        />
    );
}

