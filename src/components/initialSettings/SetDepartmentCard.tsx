/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import InitialSettingsCardContainer from './InitialSettingsCardContainer'

interface SetDepartmentCardProps {
  onValidationChange: (isValid: boolean) => void;
}

const SetDepartmentCard = ({ onValidationChange }: SetDepartmentCardProps) => {
  const [department, setDepartment] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateDepartment = (value: string) => {
    // 일단은 임시로 빈 칸만 아니면 통과
    return value.trim().length > 0;
  };

  useEffect(() => {
    const valid = validateDepartment(department);
    setIsValid(valid);
    onValidationChange(valid);
  }, [department, onValidationChange]);

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
      `}>Step 3/7</div>
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
      `}>부서 선택하기</div>
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
        `}>회사 내에서 속한<br/>부서를 선택해주세요.</div>
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
              placeholder='부서 선택'
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              css={css`
                width: 100%;
                max-width: 200px;
                border: none;
                outline: none;
                text-align: left;
                color: var(--Gray, #878787);
                font-family: Pretendard;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 118%;
                &::placeholder {
                  text-align: left;
                  color: var(--Gray, #878787);
                }
            `}
            />
        </div>

    </InitialSettingsCardContainer>
  )
}

export default SetDepartmentCard