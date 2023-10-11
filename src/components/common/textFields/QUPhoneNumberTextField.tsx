import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { type ReactElement } from 'react';
import { type QUPhoneNumberTextFieldProps } from './QUPhoneNumberTextFieldProps';

export default function QUPhoneNumberTextField({
    phoneNumber,
    onChange,
    placeholder,
    disabled,
    style,
    className,
}: QUPhoneNumberTextFieldProps): ReactElement {
    return (
        <MuiTelInput
            forceCallingCode
            focusOnSelectCountry
            onlyCountries={['RU']}
            defaultCountry="RU"
            value={phoneNumber}
            onChange={(changedPhoneNumber): void => onChange(changedPhoneNumber, matchIsValidTel(changedPhoneNumber))}
            placeholder={placeholder}
            disabled={disabled}
            InputProps={{
                sx: {
                    '&.Mui-focused': {
                        '.MuiOutlinedInput-notchedOutline': {
                            border: '0px solid black',
                            borderColor: 'black',
                        },
                    },
                    '.MuiOutlinedInput-notchedOutline': {
                        border: '0px solid black',
                        borderColor: 'black',
                    },
                    '.MuiTelInput-Flag': {
                        display: 'none',
                    },
                    borderRadius: '0',
                    background: '#E0E0E0',
                },
            }}
            style={style}
            className={'w-full' + (className ? ' ' + className : '')}
        />
    );
}
