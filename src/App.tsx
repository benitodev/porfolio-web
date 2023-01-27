import { Contact, Home, Projects } from './pages';
import { Container, Main } from './styled-components/App.styled';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';
import { Header } from './components/Header';
import Skills from './pages/Skills/Skills';
import Footer from './components/Footer/Footer';
import { Line } from './styled-components/Hr.styled';
const App = () => {
  return (
    <Container>
      <LanguageProvider>
        <Header />
        <Main>
          <Home />
          <Projects />
          <Skills />
          <Contact />
        </Main>
        <Line />
        <Footer />
      </LanguageProvider>
    </Container>
  );
};
export default App;
