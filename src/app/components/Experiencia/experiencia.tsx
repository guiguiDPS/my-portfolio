import Image from "next/image"
import { SectionTitle } from "../SectionTitle/section-title"
import "./experiencia.scss"
export function Experiencia(){
    return(
        <div className="experience">
        <SectionTitle text="Experiencia"/>
        <p>1 ano de Estágio em Programação na empresa Design Project Management LTDA</p>
        <div className="experience-time">
        <div className="experiencia-linguagem">
        <Image
          src="/react 2.png"
          alt="React Logo"
          width={40}
          height={40}
          priority
        /> 
        <div className="experiencia-unit">
            <div className="experiencia-measure measure-2">
            <span>1 Ano</span>
            </div>
        </div>
        </div>
        <div className="experiencia-linguagem">
        <Image
          src="/js 2.png"
          alt="JavaScript Logo"
          width={40}
          height={40}
          priority
        />
         <div className="experiencia-unit">
            <div className="experiencia-measure measure-1">
            <span>1 Ano</span>
            </div>
        </div>
        </div>
        <div className="experiencia-linguagem">
        <Image
          src="/ts 2.png"
          alt="TypeScript Logo"
          width={40}
          height={40}
          priority
        />
         <div className="experiencia-unit">
            <div className="experiencia-measure measure-3">
            <span>1 Ano</span>
            </div>
        </div>
    
        </div>
        </div>
        </div>
    )
}