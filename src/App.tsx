import { Header } from './components/Header';
import { Container } from './styles/Container';
import { Hero } from './styles/Hero';

function App() {
  return (
    <>
      <Container>
        <Header />
        <main className="main">
          <Hero className="hero flex">
            <div className="hero__content">
              <h1 className="hero__title">
                Let the threads of life get connected with yoga
              </h1>
              <p className="hero__description">
                Discover the transformative journey that awaits as you connect
                deeply with your true self, explore the sacred path of yoga, and
                unlock boundless potential for growth, healing, and inner bliss.
              </p>
              <a href="#">
                <button className="hero__btn">Explore More</button>
              </a>
            </div>

            <div className="hero__img">
              <img src="hero__img.png" alt="Yoga Illustration" />
            </div>
          </Hero>
        </main>
      </Container>
    </>
  );
}

export default App;
