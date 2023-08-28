import Image from 'next/image'
import "./header.scss"
interface HeaderProps {
}
export function Header(){
    return(
        <div className="header">
        <div>
          <h1>Prazer, sou Guilherme</h1>
          <h2>Estudante de Programação</h2>
        </div>
        <Image
          src="/me.jpg"
          alt="Next.js Logo"
          width={350}
          height={325}
          priority
        />
      </div>
    )
}