import React from 'react';
import {
  FieldValues,
  Control,
  FieldPath,
  RegisterOptions,
  useController,
} from 'react-hook-form';
import styled from 'styled-components';

export type TControl<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: Omit<
    RegisterOptions<T>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  label?: string;
  type?: string;
  width?: string;
};

const TextField = ({ control, name, rules, ...props }: TControl<any>) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ control, name, rules });

  return (
    <StyledInput style={{ width: props.width ? props.width : '100%' }}>
      {props.label && <label htmlFor={name}>{props.label}</label>}
      <div>
        <input
          type={props.type ? props.type : 'text'}
          id={name}
          value={value}
          onChange={onChange}
          {...props}
        />
        {error && <p>{error.message}</p>}
      </div>
    </StyledInput>
  );
};

const StyledInput = styled.div`
  ${({ theme }) => theme.flexBox.flexMixin('row', 'flex-start', 'flex-start')}
  margin-bottom: 10px;
  > label {
    flex-shrink: 0;
    padding-right: 10px;
  }
  > div {
    text-align: left;
    > input {
      width: 100%;
      padding: 4px;
      border: 1px solid #f4f4f4;
      border-radius: 4px;
      background-color: #f4f4f4;
      outline: none;
      &:focus {
        border: 1px solid ${({ theme }) => theme.color.lineActivePrimary};
      }
    }
    > p {
      color: crimson;
      font-size: 12px;
    }
  }
`;

export default TextField;
