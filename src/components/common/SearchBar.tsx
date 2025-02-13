import { css } from '@emotion/react';
import SearchImg from '../../assets/home/search.svg';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = '검색어를 입력해주세요.' }: SearchBarProps) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: flex-start;
        gap: 10px;
        background-color: rgba(225, 225, 225, 0.2);
        border-radius: 20px;
        padding: 12px 16px;
        width: 90%;
        margin: 0 auto;
        border: 1px solid #e1e1e1;
      `}
    >
      <img src={SearchImg} alt='Search' />
      <input
        type='text'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        css={css`
          border: none;
          background: none;
          font-size: 14px;
          font-weight: 400;
          outline: none;
          flex-grow: 1;
          &::placeholder {
            color: #878787;
          }
        `}
      />
    </div>
  );
};

export default SearchBar;
