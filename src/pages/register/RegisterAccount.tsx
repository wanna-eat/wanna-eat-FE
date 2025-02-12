/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { Col } from '../../components/commons/Flex';
import BackHeader from '../../components/commons/BackHeader';
import Button from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';

const inputContainerStyle = css`
  margin-top: 10px;
  display: inline-flex;
  padding: 14px 0;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid var(--Gray, #E1E1E1);
  width: 100%;
`;

const inputStyle = css`
  border: none;
  outline: none;
  width: 100%;
  color: var(--Text, #3D3D3D);
  font-family: Pretendard;
  font-size: 16px;
  padding-left: 20px;
  &::placeholder {
    color: var(--Gray, #878787);
  }
`;

const RegisterAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password: string) => {
    // 영문 대문자, 소문자, 숫자, 특수문자 중 2가지 이상 조합하여 6~20자
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    const conditionsMet = [hasUpperCase, hasLowerCase, hasNumber, hasSpecial].filter(Boolean).length >= 2;
    const validLength = password.length >= 6 && password.length <= 20;
    
    return conditionsMet && validLength;
  };

  useEffect(() => {
    setIsPasswordValid(validatePassword(password));
  }, [password]);

  const handleEmailCheck = () => {
    // TODO: 실제 이메일 중복 확인 API 연동
    setIsEmailVerified(true);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsEmailVerified(false);
  };

  return (
    <Col css={css`
      height: 100%;
      width: 100%;
      max-width: 400px;
      position: fixed;
      padding: 0 20px;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background: white;
    `}>
      <BackHeader title="회원가입" />
      <div css={css`padding: 0 20px;`}>
        <div css={css`
          margin-top: 30px;
          display: inline-flex;
          align-items: center;
          gap: 200px;
          white-space: nowrap;
        `}>
          <span css={css`
            color: var(--Text, #3D3D3D);
            font-family: Pretendard;
            font-size: 16px;
            font-weight: 600;
            letter-spacing: -0.08px;
          `}>회원가입</span>
          <div
            onClick={!isEmailVerified ? handleEmailCheck : undefined}
            css={css`
              display: flex;
              padding: 4px 10px;
              justify-content: center;
              align-items: center;
              gap: 10px;
              border-radius: 20px;
              background: ${isEmailVerified ? '#E1E1E1' : '#F66'};
              cursor: ${isEmailVerified ? 'default' : 'pointer'};
            `}>
            <span css={css`
              color: #FFF;
              text-align: center;
              font-family: Pretendard;
              font-size: 14px;
              font-weight: 400;
              letter-spacing: -0.07px;
            `}>중복확인</span>
          </div>
        </div>
        <span css={css`
          margin-top: 8px;
          ${inputContainerStyle}
        `}>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="이메일"
            css={inputStyle}
          />
        </span>
        {isEmailVerified && (
          <div css={css`
            margin-top: 4px;
            color: var(--Gray, #878787);
            font-family: Pretendard;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
          `}>
            사용 가능한 이메일입니다.
          </div>
        )}
        <div css={css`
          margin-top: 40px;
          color: var(--Text, #3D3D3D);
          font-family: Pretendard;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: -0.08px;
        `}>비밀번호</div>
        <span css={inputContainerStyle}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            css={inputStyle}
          />
          {password && (
            <span css={css`
              margin-right: 20px;
              color: ${isPasswordValid ? '#3C3' : '#F33'};
              font-family: Pretendard;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 118%;
              white-space: nowrap;
            `}>
              {isPasswordValid ? '사용 가능' : '사용 불가'}
            </span>
          )}
        </span>
        <span css={css`
          margin-top: 15px;
          ${inputContainerStyle}
        `}>
          <input
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder="비밀번호 확인"
            css={inputStyle}
          />
        </span>
        {password && (
          <div css={css`
            margin-top: 4px;
            color: ${isPasswordValid ? 
              (passwordConfirm && password !== passwordConfirm ? '#F33' : 'var(--Gray, #878787)') 
              : '#F33'};
            font-family: Pretendard;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
          `}>
            {isPasswordValid 
              ? (passwordConfirm && password !== passwordConfirm 
                  ? '비밀번호가 일치하지 않습니다.'
                  : '사용 가능한 비밀번호입니다.')
              : '영문 대문자와 소문자, 숫자, 특수문자 중 2가지 이상을 조합하여\n6~20자로 입력해주세요.'}
          </div>
        )}
        <div css={css`
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 35px;
        `}>
          <Button
            onClick={() => {
              // TODO: 회원가입 API 연동
              navigate('/initial-settings');
            }}
            disabled={!isEmailVerified || !isPasswordValid || !passwordConfirm || password !== passwordConfirm}
          >
            가입하기
          </Button>
          <div css={css`
            margin-top: 15px;
            text-align: center;
            font-family: Pretendard;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 118%;
            letter-spacing: -0.08px;
            width: 100%;
          `}>
            <span css={css`
              color: var(--Gray, #878787);
            `}>이미 회원이신가요? </span>
            <span
              onClick={() => navigate('/login')}
              css={css`
                color: var(--Primary, #F66);
                text-decoration-line: underline;
                cursor: pointer;
              `}
            >
              로그인
            </span>
            <span css={css`
              color: var(--Gray, #878787);
            `}>하기</span>
            </div>
          </div>
        </div>      
    </Col>
  );
};

export default RegisterAccount;
