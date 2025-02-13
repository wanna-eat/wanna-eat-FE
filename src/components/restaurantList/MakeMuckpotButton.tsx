import { css } from '@emotion/react';
import AppLogoWhite from '../../assets/home/appLogoWhite.svg';
import { useNavigate } from 'react-router-dom';

const MakeMuckpotButton = () => {
  const navigation = useNavigate();
  return (
    <button
      css={css`
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px 20px;
        border: 1px solid transparent;
        border-radius: 20px;
        font-size: 16px;
        font-weight: 500;
        color: #ff6666;
        background-image: linear-gradient(#fff, #fff), linear-gradient(90deg, #ff6666, #ffbb66);
        background-origin: border-box;
        background-clip: padding-box, border-box;
        cursor: pointer;
        width: 90%;
        margin: 20px auto 0 auto;
      `}
      onClick={() => navigation('/group/input')}
    >
      <img
        src={AppLogoWhite}
        alt='먹팟 아이콘'
        css={css`
          position: absolute;
          left: 18px;
        `}
      />
      <span>먹팟 직접 만들기</span>
    </button>
  );
};

export default MakeMuckpotButton;
