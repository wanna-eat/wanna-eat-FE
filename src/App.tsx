import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Onboarding from './pages/Onboarding';
import MyPage from './pages/MyPage';
import Register from './pages/Register';
import { requestForToken, onMessageListener } from './firebase/firebase';
import Home from './pages/Home';
import RestaurantList from './pages/RestaurantList';
import CafeList from './pages/CafeList';
import Login from './pages/Login';
import FindEmailAndPassword from './pages/FindEmailAndPassword';
import Splash from './pages/Splash';
import ServiceTerms from './pages/terms/ServiceTerms';
import PrivacyPolicy from './pages/terms/PrivacyPolicy';
import ThirdPartyPolicy from './pages/terms/ThirdPartyPolicy';
import RegisterAccount from './pages/register/RegisterAccount';
import InitialSettings from './pages/InitialSettings';
import SettingFinished from './pages/SettingFinished';


function App() {

  const [showSplash, setShowSplash] = useState(() => {
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    return !hasSeenSplash;
  })

  useEffect(() => {
    // 알림 권한 요청
    if ('Notification' in window) {
      console.log('Current notification permission:', Notification.permission);
      Notification.requestPermission().then((permission) => {
        console.log('알림 허용이 되어있나요 :', permission);
        if (permission === 'granted') {
          // FCM 토큰 요청
          requestForToken().then((token) => {
            if (token) {
              console.log('requestForToken 성공!');
            }
          });
        }
        if (permission === 'denied') {
          console.log('알림이 거부되었어요');
        }
      });
    } else {
      console.log('알림이 되지 않아요!');
    }

    // Foreground 메시지 수신 처리
    onMessageListener()
      .then((payload: any) => {
        // Foreground에서 알림 표시
        if (Notification.permission === 'granted') {
          new Notification(payload.notification.title, {
            body: payload.notification.body,
            icon: '/logo.png',
          });
        }
        if (Notification.permission === 'denied') {
          console.log('알림이 거부되었어요!');
        }
      })
      .catch((err) => console.log('메시지 수신 에러:', err));

    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem('hasSeenSplash', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  return (
    <BrowserRouter>
      <Routes>        
        {showSplash ? (
          <Route path="*" element={<Splash />} />
        ) : (
          <>
        <Route path='/onboarding' element={<Onboarding />} />
        <Route path='/login' element={<Login />} />
        <Route path='/findEmailAndPassword' element={<FindEmailAndPassword />} />
        <Route path='/myPage' element={<MyPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/account" element={<RegisterAccount />} />
        <Route path="/terms/service" element={<ServiceTerms />} />
        <Route path="/terms/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms/third-party" element={<ThirdPartyPolicy />} />
        <Route path="/initial-settings" element={<InitialSettings />} />
        <Route path="/setting-finished" element={<SettingFinished />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/restaurant' element={<RestaurantList />} />
        <Route path='/home/cafe' element={<CafeList />} />
        <Route path='/' element={<Navigate to='/onboarding' replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
