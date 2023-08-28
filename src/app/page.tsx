import { Experiencia } from './components/Experiencia/experiencia'
import { Header } from './components/Header/header'
import { EmailIcon } from './components/icons/email-icon'
import { Info } from './components/informacoes/info'
import { SocialBtns } from './components/social-btns/social-btns'
import "./style/home.scss"


export default function Home() {
  return (
    <main className='container'>
      <Header/>
      <Experiencia/>
      <Info/>
          <div className="buttons">
      <SocialBtns/>
            <a className='btn-primary' href='mailto:guilherme.diogo.po@gmail.com'>
              Entre em Contato 
              <EmailIcon/> 
              </a> 
          </div>  
    </main>
  )
}
