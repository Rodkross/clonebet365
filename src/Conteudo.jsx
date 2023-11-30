
import './Conteudo.css'

export default function Conteudo() {
    return (
        <div id="conteudo">
            <aside className="barraLateral">

                {/*Inicio da lista dos separadores dentro da barra lateral */}


                <div className='separadores'>

                    {/*Separador 1 */}
                    <h5 className='abaSeparadores'>POPULAR</h5>
                    <ul className='separadoresLista'>
                        <li className="separadoresItem"><img className='logoli' src="src\assets\seriea.svg" alt="Logo Série A" />Série A</li>
                        <li className="separadoresItem"><img className='logoli' src="src\assets\nbb.svg" alt="Logo NBB" />NBB</li>
                    </ul>


                    {/*Separador 2 */}
                    <h5 className='abaSeparadores'>FREQUENTEMENTE VISITADOS</h5>
                    <ul className='separadoresLista'>
                        <li className="separadoresItem"><img className='logoli' src="src\assets\futebol.svg" alt="Logo Futebol" />Futebol</li>

                        <li className="separadoresItem"><img className='logoli' src="src\assets\basquete.svg" alt="Logo Basquete" />Basquete</li>

                        <li className="separadoresItem"><img className='logoli' src="src\assets\tela.svg" alt="" />Mundo</li>

                        <li className="separadoresItem"><img className='logoli' src="src\assets\tela.svg" alt="" />Itália</li>
                    </ul>


                    {/*Separador 3 */}
                    <h5 className='abaSeparadores'>LISTA COMPLETA</h5>
                    <ul className='separadoresLista'>
                        <li className="separadoresItem"><img className='logoli' src="src\assets\basquete.svg" alt="Logo basquete" />Basquete</li>

                        <li className="separadoresItem"><img className='logoli' src="src\assets\baisebol.svg" />Beisebol</li>

                        <li className="separadoresItem"><img className='logoli' src="src\assets\bilhar.svg" alt="Logo Bilhar" />Bilhar</li>

                        <li className="separadoresItem"><img className='logoli' src="src\assets\boxe.svg" alt="Logo Boxe" />Boxe</li>

                        <li className="separadoresItem"><img className='logoli' src="src\assets\ciclismo.svg" alt="Logo Ciclismo" />Ciclismo</li>

                        <li className="separadoresItem"><img className='logoli' src="src\assets\criquete.svg" alt="Logo Críquete" />Críquete</li>

                        <li className="separadoresItem"><img className='logoli' src="src\assets\dardos.svg" alt="Logo Dardos" />Dardos</li>
                    </ul>

                </div>
            </aside>
            <main className="conteudoItens">

            </main>
        </div>
    );
}

<div style="background-image:url(/home/images/Home/imgs/LeagueLogo/brazilseriea.svg)" class="cis-PopularIconSmall "></div>