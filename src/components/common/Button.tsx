/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  width?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ width = '100%', children, disabled, ...props }: ButtonProps) => {
  return (
    <button
      css={css`
        width: ${width};
        display: flex;
        padding: 20px 169px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        align-self: stretch;
        border-radius: 20px;
        border: 1px solid ${disabled ? '#E1E1E1' : '#F66'};
        background: ${disabled ? '#E1E1E1' : '#F66'};
        white-space: nowrap;
        cursor: ${disabled ? 'not-allowed' : 'pointer'};
        transition: 0.3s;
      `}
      disabled={disabled}
      {...props}
    >
      <div
        css={css`
          color: #fff;
          text-align: center;
          font-family: Pretendard;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          letter-spacing: -0.1px;
        `}
      >
        {children}
      </div>
    </button>
  );
};

export default Button;
