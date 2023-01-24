import { Contact, Home, Projects } from './pages';
import { Container, Main } from './styled-components/App.styled';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import { Header } from './components/Header';
import Skills from './pages/Skills/Skills';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <Container>
      <ThemeProvider>
        <Header />
        <Main>
          <Home />
          <Projects />
          <Skills />
          <Contact />
        </Main>
        <Footer />
      </ThemeProvider>
    </Container>
  );
};
export default App;
