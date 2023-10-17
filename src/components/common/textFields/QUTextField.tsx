import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import {type ReactElement, useEffect, useState} from 'react';
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

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile((window && window?.innerWidth <= 768));
    }, [])

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
                        color: '#fff',
                        fontSize: isMobile ? '28px' : '18px',
                    },
                    '.MuiOutlinedInput-notchedOutline': {
                        border: '0px solid #8E8E93',
                        borderColor: '#8E8E93',
                    },
                    borderRadius: '20px',
                    background: 'rgba(142, 142, 147, 0.08)',
                    color: 'rgba(142, 142, 147, 0.24)',
                    transition: '0.5s',
                    height: isMobile ? '80px' : '58px',
                    fontSize: isMobile ? '24px' : '16px',
                },
            }}
            style={style}
            className={'w-full' + (className ? ' ' + className : '')}
        />
    );
}

