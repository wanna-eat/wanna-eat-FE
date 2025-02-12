/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import InitialSettingsCardContainer from "./InitialSettingsCardContainer"
import femaleImage from '../../assets/bee/female.svg'
import maleImage from '../../assets/bee/male.svg'
import { useState, useEffect } from 'react';

type Gender = 'female' | 'male' | null;

interface SetGenderCardProps {
  onValidationChange: (isValid: boolean) => void;
}

const SetGenderCard = ({ onValidationChange }: SetGenderCardProps) => {
  const [selectedGender, setSelectedGender] = useState<Gender>(null);

  useEffect(() => {
    onValidationChange(selectedGender !== null);
  }, [selectedGender, onValidationChange]);

  const handleGenderSelect = (gender: Gender) => {
    setSelectedGender(gender);
  };

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
      `}>Step 2/7</div>
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
      `}>성별 선택하기</div>
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
        `}>성별이 어떻게 되시나요?</div>
      <div css={css`
        margin-top: 30px;
        display: flex;
        justify-content: center;
        gap: 10px;
      `}>
        <div onClick={() => handleGenderSelect('female')}>
          <div css={css`
            display: flex;
            padding: 20px 20px 16px 20px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            align-self: stretch;
            border-radius: 20px;
            border: 1px solid ${selectedGender === 'female' ? '#f66' : 'var(--Gray, #E1E1E1)'};
            width: 106.586px;
            height: 116px;
            background-color: ${selectedGender === 'female' ? '#f66' : 'transparent'};
            cursor: pointer;
            transition: all 0.2s ease-in-out;
          `}>
            <img src={femaleImage} alt="female" css={css`
              width: 100%;
              height: 100%;
              object-fit: contain;
            `} />
          </div>
          <div css={css`
            margin-top: 30px;
            color: ${selectedGender === 'female' ? '#f66' : 'var(--Gray, #878787)'};
            text-align: center;
            font-family: Pretendard;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: -0.09px;
            transition: color 0.2s ease-in-out;
          `}>여자</div>
        </div>
        <div onClick={() => handleGenderSelect('male')}>
          <div css={css`
            display: flex;
            padding: 20px 20px 16px 20px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            align-self: stretch;
            border-radius: 20px;
            border: 1px solid ${selectedGender === 'male' ? '#f66' : 'var(--Gray, #E1E1E1)'};
            width: 106.586px;
            height: 116px;
            background-color: ${selectedGender === 'male' ? '#f66' : 'transparent'};
            cursor: pointer;
            transition: all 0.2s ease-in-out;
          `}>
            <img src={maleImage} alt="male" css={css`
              width: 100%;
              height: 100%;
              object-fit: contain;
            `} />
          </div>
          <div css={css`
            margin-top: 30px;
            color: ${selectedGender === 'male' ? '#f66' : 'var(--Gray, #878787)'};
            text-align: center;
            font-family: Pretendard;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: -0.09px;
            transition: color 0.2s ease-in-out;
          `}>남자</div>
        </div>
      </div>
    </InitialSettingsCardContainer>
  )
}

export default SetGenderCard