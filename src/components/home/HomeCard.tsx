import { Col, Row } from '../commons/Flex';
import starFilledImg from '../../assets/home/starFilled.svg';
import starOutlinedImg from '../../assets/home/starOutlined.svg';
import { css } from '@emotion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import TagList from './TagList';

interface HomeCardProps {
  name: string;
  category: string;
  address: string;
  tag?: string[];
  imageUrl?: string[];
  isFavorite?: boolean;
  onToggleFavorite: () => void;
  onOpenModal: (type: 'join' | 'create') => void;
}

const HomeCard = ({
  name,
  category,
  address,
  tag = [],
  imageUrl = [],
  isFavorite = false,
  onToggleFavorite,
  onOpenModal,
}: HomeCardProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) emblaApi.on('select', () => {});
  }, [emblaApi]);

  return (
    <Col
      css={css`
        padding: 10px 20px;
      `}
    >
      <Row
        css={css`
          justify-content: space-between;
          font-size: 16px;
          font-weight: 600;
        `}
      >
        <p>{name}</p>
        <button
          onClick={onToggleFavorite}
          css={css`
            background: none;
            cursor: pointer;
          `}
        >
          <img src={isFavorite ? starFilledImg : starOutlinedImg} alt='favorite-icon' css={css``} />
        </button>
      </Row>
      {imageUrl.length > 0 && (
        <div
          ref={emblaRef}
          css={css`
            overflow: hidden;
          `}
        >
          <div
            css={css`
              display: flex;
            `}
          >
            {imageUrl.map((url, index) => (
              <div
                key={index}
                css={css`
                  flex: 0 0 70%;
                  position: relative;
                `}
              >
                <img
                  src={url}
                  alt={`${name}-${index}`}
                  css={css`
                    width: 200px;
                    height: 120px;
                    object-fit: cover;
                    border-radius: 8px;
                  `}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      <Row>
        <p
          css={css`
            font-weight: 500;
            font-size: 14px;
          `}
        >
          {category}
        </p>
        <p
          css={css`
            font-size: 14px;
            color: #878787;
            margin-left: 8px;
          `}
        >
          {address}
        </p>
      </Row>
      <TagList tags={tag} />

      <Row
        css={css`
          justify-content: space-between;
          font-size: 14px;
          margin-top: 12px;
        `}
      >
        <button
          css={css`
            width: 47%;
            border-radius: 20px;
            cursor: pointer;
            border: solid 1px #e1e1e1;
            background-color: #fff;
          `}
          onClick={() => onOpenModal('create')}
        >
          먹팟 만들기
        </button>
        <button
          css={css`
            width: 47%;
            border-radius: 20px;
            cursor: pointer;
            border: solid 1px #e1e1e1;
            background-color: #fff;
          `}
          onClick={() => onOpenModal('join')}
        >
          현재 먹팟 참여
        </button>
      </Row>
    </Col>
  );
};

export default HomeCard;
