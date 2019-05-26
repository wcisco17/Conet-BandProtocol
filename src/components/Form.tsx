import { useState } from 'react';
import styled from "../assets/styles";
import { theme } from '../assets/styles/mainStyles';

interface IProps {
    title: string;
    onSubmit(v: any): void;
}

export const Input = styled.input`
    width: 258px;
    height: 36px;
    margin: 20px 0px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.11);
    box-sizing: border-box;
    border-radius: 5px;
`;

export const Form = styled.form`
    ${theme.flex};
    flex-direction: column;
`;

const useInputValue = (initialValue: any) => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        onChange: (e: any) => setValue(e.target.value),
        resetValue: () => setValue('')
    }
}

export default ({ title, onSubmit, }: IProps) => {
    const { resetValue, ...text } = useInputValue("");

    return (
        <Form
            onSubmit={
                e => {
                    e.preventDefault()
                    onSubmit(text.value)
                    resetValue()
                }
            }
        >
            <div>
                <Input placeholder={title} {...text} required />
            </div>
        </Form>
    )
}