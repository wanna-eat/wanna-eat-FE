/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect, useRef } from 'react';
import InitialSettingsCardContainer from './InitialSettingsCardContainer';
import { CAFE_BRANDS } from '../../constants/brands';
import SearchDropdown from '../commons/SearchDropdown';

interface SetCafeBrandCardProps {
  onValidationChange: (isValid: boolean) => void;
}

const SetCafeBrandCard = ({ onValidationChange }: SetCafeBrandCardProps) => {
  const [searchText, setSearchText] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredBrands = CAFE_BRANDS.filter(brand => 
    brand.toLowerCase().includes(searchText.toLowerCase()) && 
    !selectedBrands.includes(brand)
  );

  const handleBrandClick = (brand: string) => {
    if (selectedBrands.length < 3 && !selectedBrands.includes(brand)) {
      setSelectedBrands(prev => [...prev, brand]);
      setSearchText('');
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleRemoveBrand = (brand: string) => {
    setSelectedBrands(prev => prev.filter(b => b !== brand));
  };

  useEffect(() => {
    const valid = selectedBrands.length > 0;
    onValidationChange(valid);
  }, [selectedBrands, onValidationChange]);

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
      `}>Step 6/7</div>
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
      `}>선호하는 카페 브랜드를<br/>선택해주세요.</div>
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
      `}>* 최대 3개 선택 가능</div>
      
      <div css={css`
        margin-top: 30px;
      `}>
        <div css={css`
          position: relative;
          margin-bottom: 16px;
        `}>
          <div css={css`
            display: flex;
            padding: 20px;
            justify-content: center;
            align-items: center;
            gap: 20px;
            align-self: stretch;
            border-radius: 20px;
            border: 1px solid #E1E1E1;
          `}>
            <input 
              ref={inputRef}
              type='text' 
              placeholder='카페 선택'
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                setShowDropdown(true);
              }}
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

          {showDropdown && searchText.length > 0 && (
            <div css={css`
              position: absolute;
              top: calc(95%);
              left: 0;
              right: 0;
              z-index: 10;
            `}>
              <SearchDropdown 
                items={filteredBrands}
                onSelect={handleBrandClick}
                visible={true}
              />
            </div>
          )}
        </div>

        <div css={css`
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 0 20px;
        `}>
          {selectedBrands.map((brand) => (
            <div
              key={brand}
              css={css`
                display: inline-flex;
                align-items: center;
                padding: 4px 12px;
                background-color: #F66;
                color: white;
                border-radius: 20px;
                font-size: 14px;
                gap: 6px;
                cursor: pointer;
                transition: opacity 0.2s ease;
                &:hover {
                  opacity: 0.9;
                }
              `}
              onClick={() => handleRemoveBrand(brand)}
            >
              {brand}
              <span css={css`
                font-size: 18px;
                line-height: 1;
              `}>×</span>
            </div>
          ))}
        </div>
      </div>
    </InitialSettingsCardContainer>
  );
};

export default SetCafeBrandCard;