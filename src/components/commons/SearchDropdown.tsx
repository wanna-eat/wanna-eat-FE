/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface SearchDropdownProps {
  items: string[];
  onSelect: (item: string) => void;
  visible: boolean;
}

const SearchDropdown = ({ items, onSelect, visible }: SearchDropdownProps) => {
  if (!visible || items.length === 0) return null;

  return (
    <div css={css`
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      margin-top: 5px;
      background: white;
      border-radius: 10px;
      border: 1px solid #E1E1E1;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      max-height: 200px;
      overflow-y: auto;
      z-index: 10;
    `}>
      {items.map((item) => (
        <div
          key={item}
          onClick={() => onSelect(item)}
          css={css`
            padding: 12px 20px;
            cursor: pointer;
            &:hover {
              background-color: #f5f5f5;
            }
          `}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default SearchDropdown;
