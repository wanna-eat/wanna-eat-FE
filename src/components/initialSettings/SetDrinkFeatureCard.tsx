/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import InitialSettingsCardContainer from './InitialSettingsCardContainer';

interface SetDrinkFeatureCardProps {
  onValidationChange: (isValid: boolean) => void;
}

const SetDrinkFeatureCard = ({ onValidationChange }: SetDrinkFeatureCardProps) => {
  const [selectedAtmosphere, setSelectedAtmosphere] = useState<string>('');
  const [selectedDrinkType, setSelectedDrinkType] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');

  useEffect(() => {
    const valid = selectedAtmosphere !== '' && selectedDrinkType !== '' && selectedSize !== '';
    onValidationChange(valid);
  }, [selectedAtmosphere, selectedDrinkType, selectedSize, onValidationChange]);

  const buttonContainerStyle = css`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 0 20px;
  `;

  const buttonStyle = (isSelected: boolean) => css`
    display: flex;
    flex: 1;
    max-width: 140px;
    padding: 15px 0;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 20px;
    border: 1px solid ${isSelected ? '#F66' : 'var(--Gray, #E1E1E1)'};
    background: ${isSelected ? '#F66' : 'rgba(225, 225, 225, 0.20)'};
    color: ${isSelected ? '#fff' : '#000'};
    white-space: nowrap;
    cursor: pointer;
    font-size: 14px;
  `;

  const labelStyle = css`
    margin-top: 30px;
    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.09px;
  `;

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
      `}>Step 7/7</div>
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
      `}>선호하는 음료의 특징을<br/>선택해주세요.</div>

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
`}>* 항목별로 한 개씩만 선택 가능</div>

      <div css={labelStyle}>달달한/상큼한</div>
      <div css={buttonContainerStyle}>
        {['달달한', '상큼한'].map((type) => (
          <button
            key={type}
            css={buttonStyle(selectedAtmosphere === type)}
            onClick={() => setSelectedAtmosphere(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div css={labelStyle}>시원한/따뜻한</div>
      <div css={buttonContainerStyle}>
        {['시원한', '따뜻한'].map((type) => (
          <button
            key={type}
            css={buttonStyle(selectedDrinkType === type)}
            onClick={() => setSelectedDrinkType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div css={labelStyle}>카페인/디카페인</div>
      <div css={buttonContainerStyle}>
        {['카페인', '디카페인'].map((type) => (
          <button
            key={type}
            css={buttonStyle(selectedSize === type)}
            onClick={() => setSelectedSize(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </InitialSettingsCardContainer>
  );
};

export default SetDrinkFeatureCard;