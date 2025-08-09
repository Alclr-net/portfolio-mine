import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Grid from './Grid';
import Projects from './Projects';
import UserForm from './UserForm';

export const Home = () => {
  return (
    <>
      <Hero />
      <Grid/>
      <About />
      <Skills />
      <Projects />
      <UserForm/>
    </>
  )
}