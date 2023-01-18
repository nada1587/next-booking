import React, { MouseEventHandler, ReactNode } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

interface IiconButtonProps {
  /**
   * 버튼명
   */
  label?: string;
  /**
   * 버튼명
   */
  withText?: boolean;
  /**
   * 활성화 여부
   */
  disabled?: boolean;
  /**
   * 클릭 이벤트
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /**
   * 자식 요소(SVG 호출)
   */
  children: ReactNode;
}

const IconButton = ({
  label,
  withText = false,
  disabled = false,
  ...props
}: IiconButtonProps) => {
  return (
    <IconButtonSet type="button" disabled={disabled} onClick={props.onClick}>
      {props.children}
      {label && <span className={cn({ hidden: !withText })}>{label}</span>}
    </IconButtonSet>
  );
};

const IconButtonSet = styled.button<IiconButtonProps>`
  ${({ theme }) => theme.flexBox.flexMixin('column', 'center', 'center')}
  cursor: pointer;
  > span {
    display: inline-block;
    padding-top: 3px;
    font-size: 12px;
  }
  :disabled {
    opacity: 0.35;
  }
  & + & {
    margin-left: 12px;
  }
`;

export default IconButton;
