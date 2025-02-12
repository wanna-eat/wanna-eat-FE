/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Col } from '../components/commons/Flex';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import InitialSettingsHeader from '../components/initialSettings/InitialSettingsHeader';
import SetNameCard from '../components/initialSettings/SetNameCard';
import SetGenderCard from '../components/initialSettings/SetGenderCard';
import Button from '../components/common/Button';
import SetDepartmentCard from '../components/initialSettings/SetDepartmentCard';
import SetRestaurantTypeCard from '../components/initialSettings/SetRestaurantTypeCard';
import SetRestaurantFeatureCard from '../components/initialSettings/SetRestaurantFeatureCard';
import SetCafeBrandCard from '../components/initialSettings/SetCafeBrandCard';
import SetDrinkFeatureCard from '../components/initialSettings/SetDrinkFeatureCard';

const InitialSettings = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [isCurrentStepValid, setIsCurrentStepValid] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const handleNextClick = () => {
    if (step === 7) {
      navigate('/setting-finished');
      return;
    }
    setDirection(1);
    setStep(prev => prev + 1);
    setIsCurrentStepValid(false);
  };

  const slideTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  };

  return (
    <Col
      css={css`
        position: relative;
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;

        ::-webkit-scrollbar {
          display: none;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
      `}
    >
      <div css={css`
        width: 100%;
        max-width: 390px;
        min-height: 100%;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
      `}>
        <InitialSettingsHeader 
          step={step}
          onBack={handleBack}
        />
        <div css={css`
          position: relative;
          flex: 1;
          margin-bottom: 40px;
          min-height: 600px;
        `}>
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            {step === 1 && (
              <motion.div
                key="name-card"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                css={css`
                  width: 100%;
                  position: absolute;
                  left: 0;
                  right: 0;
                  z-index: ${step === 1 ? 2 : 1};
                `}
              >
                <SetNameCard onValidationChange={setIsCurrentStepValid} />
              </motion.div>
            )}
            {step === 2 && (
              <motion.div
                key="gender-card"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                css={css`
                  width: 100%;
                  position: absolute;
                  left: 0;
                  right: 0;
                  z-index: ${step === 2 ? 2 : 1};
                `}
              >
                <SetGenderCard onValidationChange={setIsCurrentStepValid} />
              </motion.div>
            )}
            {step === 3 && (
              <motion.div
                key="department-card"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                css={css`
                  width: 100%;
                  position: absolute;
                  left: 0;
                  right: 0;
                  z-index: ${step === 3 ? 2 : 1};
                `}
              >
                <SetDepartmentCard onValidationChange={setIsCurrentStepValid} />
              </motion.div>
            )}
            {step === 4 && (
              <motion.div
                key="restaurant-type-card"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                css={css`
                  width: 100%;
                  position: absolute;
                  left: 0;
                  right: 0;
                  z-index: ${step === 4 ? 2 : 1};
                `}
              >
                <SetRestaurantTypeCard onValidationChange={setIsCurrentStepValid} />
              </motion.div>
            )}
            {step === 5 && (
              <motion.div
                key="restaurant-feature-card"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                css={css`
                  width: 100%;
                  position: absolute;
                  left: 0;
                  right: 0;
                  z-index: ${step === 5 ? 2 : 1};
                `}
              >
                <SetRestaurantFeatureCard onValidationChange={setIsCurrentStepValid} />
              </motion.div>
            )}
            {step === 6 && (
              <motion.div
                key="cafe-brand-card"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                css={css`
                  width: 100%;
                  position: absolute;
                  left: 0;
                  right: 0;
                  z-index: ${step === 6 ? 2 : 1};
                `}
              >
                <SetCafeBrandCard onValidationChange={setIsCurrentStepValid} />
              </motion.div>
            )}
            {step === 7 && (
              <motion.div
                key="drink-feature-card"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                css={css`
                  width: 100%;
                  position: absolute;
                  left: 0;
                  right: 0;
                  z-index: ${step === 7 ? 2 : 1};
                `}
              >
                <SetDrinkFeatureCard onValidationChange={setIsCurrentStepValid} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div css={css`
          width: 100%;
          max-width: 360px;
          margin: 0 auto;
          padding-bottom: 40px;
        `}>
          <Button
            onClick={handleNextClick}
            disabled={!isCurrentStepValid}
          >
            {step === 7 ? '완료' : '다음'}
          </Button>
        </div>
      </div>
    </Col>
  )
}

export default InitialSettings;