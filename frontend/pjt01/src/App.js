import { Route, Routes } from 'react-router-dom';
import CommunityPage from './communityPage';
import KakaoRedirectHandler from './components/main/KakaoRedirectHandeler';
import LoginPage from './loginPage';
import MainPage from "./mainPage";
import RecipePage from './recipePage';
import RefridgeratorPage from './refridgeratorPage';
import StudyPage from './studyPage';
import NavBar from './components/navBar';



function App() {
  return (
    <div className="App">
        <p>
          헤더이다
        </p>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/study" element={<StudyPage />} />
          <Route path="/refridgerator" element={<RefridgeratorPage />} />
          <Route path="/recipe" element={<RecipePage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/oauth/callback/kakao" element={<KakaoRedirectHandler/>} />

        </Routes>
        <NavBar></NavBar>
    </div>
  );
}

export default App;