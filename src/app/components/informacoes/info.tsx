
import "./info.scss"
import { SectionTitle } from "../SectionTitle/section-title"
export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Linguagens"/>
        <div className="linguagens-info">
          <span>PT-BR - Nativo</span>
        </div>
        <SectionTitle text="Educação"/>
        <div className="educacao-info">
        <span>Análise e Desenvolvimento de Sistemas - Faculdade Impacta</span>
        </div>
        </div>
    )
}