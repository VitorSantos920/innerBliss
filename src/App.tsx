import { Button } from './components/Button';
import { Header } from './components/Header';
import { AnxietyIcon } from './components/Icons/AnxietyIcon';
import { FlexibleIcon } from './components/Icons/FlexibleIcon';
import { HealthIcon } from './components/Icons/HealthIcon';
import { LifeIcon } from './components/Icons/LifeIcon';
import { StressIcon } from './components/Icons/StressIcon';
import { YogaIcon } from './components/Icons/YogaIcon';
import { SectionSubtitle } from './components/SectionSubtitle';
import { SectionTitle } from './components/SectionTitle';
import { Service } from './components/Service';
import { About } from './styles/About';
import { Container } from './styles/Container';
import { Description } from './styles/Description';
import { Hero } from './styles/Hero';
import { Services } from './styles/Services';

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
              <Description className="hero__description">
                Discover the transformative journey that awaits as you connect
                deeply with your true self, explore the sacred path of yoga, and
                unlock boundless potential for growth, healing, and inner bliss.
              </Description>
              <a href="#">
                <Button className="hero__btn" text="Explore More" />
              </a>
            </div>

            <div className="hero__img">
              <img src="/hero/hero__img.png" alt="Yoga Illustration" />
            </div>
          </Hero>

          <About className="about flex">
            <div className="about__img">
              <img src="/about/about__img.png" alt="Yoga Illustration" />
            </div>

            <div className="about__content">
              <SectionTitle title="About Us" className="about__title" />

              <SectionSubtitle
                className="about__subtitle"
                title="Unlock your potential, embrace self-discovery"
              />

              <Description className="about__description">
                Ignite your inner light, nurture your well-being, and embark on
                a soulful voyage of self-discovery.we are dedicated to creating
                a nurturing space where you can explore the transformative
                practice of yoga, embrace mindfulness, and cultivate a
                harmonious connection between mind, body, and spirit. Join us on
                this extraordinary journey towards inner peace, strength, and
                holistic wellness.
              </Description>
              <a href="#">
                <Button className="about__btn" text="Contact Now" />
              </a>
            </div>
          </About>

          <Services className="services flex">
            <SectionTitle title="What We Do" className="services__title" />

            <SectionSubtitle
              className="services__subtitle"
              title="Positive Outcomes of Yoga"
            />

            <div className="services__service-items flex">
              <Service
                icon={StressIcon}
                title="Reduce Stress"
                description="Harness the transformative power of yoga to cultivate inner peace, find solace amidst chaos, and embark on a holistic journey that reduces stress."
              />

              <Service
                icon={FlexibleIcon}
                title="Flexible Time"
                description="Experience the freedom and convenience of yoga on your terms with flexible time options that empower you to create a practice that seamlessly integrates into your busy lifestyle."
              />

              <Service
                icon={HealthIcon}
                title="Health Tips"
                description="From mindful eating practices that nourish your body from within to breathwork techniques that calm the mind and reduce stress."
              />

              <Service
                icon={LifeIcon}
                title="Life Consultation"
                description="Embark on a profound journey of self-discovery and personal growth through our life consultation services, where ancient wisdom meets modern guidance."
              />

              <Service
                icon={YogaIcon}
                title="Many Yoga Styles"
                description=" Whether you seek the invigorating flow of Vinyasa, the mindful precision of Iyengar, the meditative stillness of Yin, or any other myriad of styles"
              />

              <Service
                icon={AnxietyIcon}
                title="Anxiety Relief"
                description="Find solace in the nurturing embrace of yoga as it becomes your ally in the journey towards anxiety relief, empowering you to cultivate inner calm, resilience."
              />
            </div>
          </Services>
        </main>
      </Container>
    </>
  );
}

export default App;
