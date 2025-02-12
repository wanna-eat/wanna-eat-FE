/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import InitialSettingsCardContainer from './InitialSettingsCardContainer'

interface SetRestaurantTypeCardProps {
  onValidationChange: (isValid: boolean) => void;
}

const SetRestaurantTypeCard = ({ onValidationChange }: SetRestaurantTypeCardProps) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [isValid, setIsValid] = useState(false);

  const handleTypeClick = (type: string) => {
    setSelectedTypes(prev => {
      if (prev.includes(type)) {
        // 이미 선택된 타입이면 제거
        return prev.filter(t => t !== type);
      } else if (prev.length < 3) {
        // 3개 미만 선택된 상태에서 새로운 타입 선택
        return [...prev, type];
      }
      // 이미 3개가 선택된 상태면 변경 없음
      return prev;
    });
  };

  useEffect(() => {
    const valid = selectedTypes.length > 0;
    setIsValid(valid);
    onValidationChange(valid);
  }, [selectedTypes, onValidationChange]);

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
      `}>Step 4/7</div>
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
      `}>선호하는 식당 종류를<br/>선택해주세요.</div>
      <div css={css`
        margin-top: 10px;
        color: #000;
        text-align: center;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.09px;
      `}>* 최대 3개 선택 가능</div>

      <div css={css`
        margin-top: 30px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        padding: 0 10px;
      `}>
        {['한식', '양식', '중식', '일식', '아시안', '기타'].map((type) => (
          <button
            key={type}
            css={css`
              display: flex;
              padding: 30px 0;
              justify-content: center;
              align-items: center;
              gap: 10px;
              border-radius: 20px;
              border: 1px solid ${selectedTypes.includes(type) ? '#F66' : 'var(--Gray, #E1E1E1)'};
              background: ${selectedTypes.includes(type) ? '#F66' : 'rgba(225, 225, 225, 0.20)'};
              color: ${selectedTypes.includes(type) ? '#fff' : '#000'};
              white-space: nowrap;
              cursor: pointer;
              width: 100%;
              font-size: 14px;
            `}
            onClick={() => handleTypeClick(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </InitialSettingsCardContainer>
  )
}

export default SetRestaurantTypeCard;