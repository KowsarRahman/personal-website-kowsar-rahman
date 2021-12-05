import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Avatar from '@mui/material/Avatar';
import Skills from './components/Skills';
import Education from './components/Education';



export default function Home() {
  return (
    <>
    <NavBar></NavBar><br></br>
    <div className={styles.container}>
      <Head>
        <title>Kowsar Rahman SWE | Your Friendly Software Engineer</title>
        <meta name="description" content="For software enginerring tips and tutorials, you have come over the right place. Learn and don't forget to ask me any questions." />
      </Head>
      <center><h1><Avatar className={styles.avatar} alt="Kowsar Rahman" src="/Avatar.jpg" />Kowsar Rahman</h1></center>
      <center><h3><a href="https://github.com/saditrahman" target="_blank">🐈Github</a>, <a href='mailto:saditsnigdho@gmail.com' target="_blank">📧Email</a>, <a href='https://www.linkedin.com/in/kowsar-rahman-sadit-856470148/' target="_blank">🕴️LinkedIn</a></h3></center>
    <Skills/>
    <Education/>
    <Footer/>
    </div>
    </>
  )
}
