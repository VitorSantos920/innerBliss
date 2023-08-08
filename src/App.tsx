import { Button } from './components/Button';
import { Header } from './components/Header';
import { SectionSubtitle } from './components/SectionSubtitle';
import { SectionTitle } from './components/SectionTitle';
import { About } from './styles/About';
import { Container } from './styles/Container';
import { Hero } from './styles/Hero';
import { Service } from './styles/Service';

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
                <Button className="hero__btn" text="Explore More" />
              </a>
            </div>

            <div className="hero__img">
              <img src="hero__img.png" alt="Yoga Illustration" />
            </div>
          </Hero>

          <About className="about flex">
            <div className="about__img">
              <img src="about__img.png" alt="Yoga Illustration" />
            </div>

            <div className="about__content">
              <SectionTitle title="About Us" className="about__title" />

              <SectionSubtitle
                className="about__subtitle"
                title="Unlock your potential, embrace self-discovery"
              />

              <p className="about__description">
                Ignite your inner light, nurture your well-being, and embark on
                a soulful voyage of self-discovery.we are dedicated to creating
                a nurturing space where you can explore the transformative
                practice of yoga, embrace mindfulness, and cultivate a
                harmonious connection between mind, body, and spirit. Join us on
                this extraordinary journey towards inner peace, strength, and
                holistic wellness.
              </p>
              <a href="#">
                <Button className="about__btn" text="Contact Now" />
              </a>
            </div>
          </About>

          <Service className="service flex">
            <SectionTitle title="What We Do" className="service__title" />

            <SectionSubtitle
              className="service__subtitle"
              title="Positive Outcomes of Yoga"
            />
          </Service>
        </main>
      </Container>
    </>
  );
}

export default App;
