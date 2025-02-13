import { css } from '@emotion/react';
import { Col } from '../commons/Flex';
import QuestionBeeImage from '../../assets/bee/question.svg';
interface MuckpotCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: () => void;
}

const MuckpotCreateModal = ({ isOpen, onClose, onCreate }: MuckpotCreateModalProps) => {
  if (!isOpen) return null;

  return (
    <Col
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        align-items: center;
        justify-content: center;
        z-index: 1000;
        width: 100%;
      `}
    >
      <div
        css={css`
          background: white;
          padding: 20px;
          border-radius: 20px;
          width: 90%;
          max-width: 400px;
          text-align: center;
        `}
      >
        <img
          src={QuestionBeeImage}
          alt='먹팟 생성'
          css={css`
            width: 128px;
            height: 128px;
            margin-bottom: 12px;
          `}
        />
        <h3
          css={css`
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 16px;
            color: #3d3d3d;
          `}
        >
          이 장소로 먹팟을 생성하시겠어요?
        </h3>

        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 12px;
          `}
        >
          <button
            css={css`
              background: #ff6666;
              color: white;
              padding: 12px;
              border-radius: 20px;
            `}
            onClick={onCreate}
          >
            먹팟 생성하기
          </button>
          <button
            css={css`
              background: rgba(255, 102, 102, 0.2);
              color: #ff6666;
              padding: 12px;
              border-radius: 20px;
              border: 1px solid #f66;
            `}
            onClick={onClose}
          >
            취소
          </button>
        </div>
      </div>
    </Col>
  );
};

export default MuckpotCreateModal;
