/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import InitialSettingsCardContainer from './InitialSettingsCardContainer'

interface SetNameCardProps {
  onValidationChange: (isValid: boolean) => void;
}

const SetNameCard = ({ onValidationChange }: SetNameCardProps) => {
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateName = (value: string) => {
    // 숫자나 특수문자가 포함되어 있는지 확인
    const hasNumberOrSpecial = /[0-9!@#$%^&*(),.?":{}|<>]/.test(value);
    // 공백이 아닌 문자가 있는지 확인
    const hasValidChars = /\S/.test(value);
    return !hasNumberOrSpecial && hasValidChars;
  };

  useEffect(() => {
    const valid = validateName(name);
    setIsValid(valid);
    onValidationChange(valid);
  }, [name, onValidationChange]);

  return (
    <InitialSettingsCardContainer>
      <div css={css`
        margin-top: 30px;
        color: var(--Primary, #F66);
        text-align: center;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.08px;
      `}>Step 1/7</div>
      <div css={css`
        margin-top: 20px;
        color: #000;
        text-align: center;
        font-family: Pretendard;
        font-size: 25px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.125px;
      `}>반가워요!</div>
      <div css={css`
        margin-top: 10px;
        color: #000;
        text-align: center;
        font-family: Pretendard;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.09px;
        `}>이름을 입력해주세요</div>
        <div css={css`
            margin-top: 30px;
            display: flex;
            padding: 20px 0;
            justify-content: center;
            align-items: center;
            gap: 20px;
            align-self: stretch;
            border-radius: 20px;
            border: 1px solid #E1E1E1;
        `}>
            <input 
              type='text' 
              placeholder='이름'
              value={name}
              onChange={(e) => setName(e.target.value)}
              css={css`
                width: 100%;
                max-width: 200px;
                border: none;
                outline: none;
                text-align: center;
                color: var(--Gray, #878787);
                font-family: Pretendard;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 118%;
                &::placeholder {
                  text-align: center;
                  color: var(--Gray, #878787);
                }
            `}
            />
        </div>
        {name && (
          <div css={css`
            margin-top: 10px;
            color: ${isValid ? '#3C3' : '#F33'};
            text-align: center;
            font-family: Pretendard;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: -0.07px;
          `}>
            {isValid ? '사용 가능한 이름이에요' : '숫자, 특수문자는 사용할 수 없어요.'}
          </div>
        )}
    </InitialSettingsCardContainer>
  )
}

export default SetNameCard