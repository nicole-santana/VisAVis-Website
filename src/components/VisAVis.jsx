import Logo from '../assets/logo.jfif'
import IMGprincipal from '../assets/visavis.webp'
import Macarena from "../assets/Maca.webp"
import Zu from '../assets/Zu.webp'
import Saray from '../assets/Saray.webp'
import Rizos from '../assets/Rizos.webp'

function VisAVis() {
  return (
    <section className='bg-black'> 
        <header><img src={Logo} alt="" /></header>
        
        <img src={IMGprincipal} alt="" />
        <p className='text-gray'>
        Vis a  (estilizado como VisAVis) é uma série de televisão criminal espanhola, originalmente produzida pelo estúdio espanhol Globomedia, e exibida entre 2015 e 2019 pelo canal Antena 3. Ambientada sobretudo numa prisão, a série foca numa jovem que tem de se adaptar à sua nova vida de presidiária.
        <br />
        
        A série estreou no dia 20 de abril de 2015, e a segunda temporada teve início um mês depois no dia 26 de maio. Em 6 de julho de 2017, a Antena 3 anunciou o cancelamento da série, porém a Fox Espanha adquiriu os direitos de transmissão e anunciou uma terceira temporada, que estreou em 23 de abril de 2018. Uma quarta e até então última temporada foi lançada em dezembro de 2018, sendo cancelada em seguida. A Netflix também comprou os direitos globais de streaming para o programa.
        <br />
        Após o cancelamento inicial do programa, vários membros do elenco seguiram para outros projetos, resultando em grandes mudanças de elenco nas temporadas 3 e 4. A produção também mudou para um local de filmagem diferente, já que o estúdio anterior se tornou o set de outra série de Álex Pina, La Casa de Papel. Maggie Civantos, que interpretou a personagem principal da série nas duas primeiras temporadas, teve seu papel reduzido devido ao seu compromisso com outro programa, Las Chicas del Cable. Najwa Nimri, Berta Vázquez, María Isabel Díaz Lago, Marta Aledo, Laura Buena e Alba Flores voltaram como membros do elenco principal.
        <br />
        Em maio de 2019, foi anunciada uma continuação da série, intitulada Vis a Vis: El Oasis, que mostra os acontecimentos das personagens centrais da trama — Macarena e Zulema — após saírem da prisão. A temporada estreou em 20 de abril de 2020 e foi finalizada em 8 de junho do mesmo ano na Fox Espanha, assim, marcando o encerramento das histórias das personagens de forma definitiva.
        </p>

        <h2 className='text-yellow text-4xl'>Enredo</h2>
        <p className='text-gray'>
        Macarena "Maca" Ferreiro é uma moça jovem e ingênua que se apaixona por seu chefe e, sob influência dele, comete vários delitos financeiros. Acusada de quatro crimes fiscais, é enviada provisoriamente à prisão feminina Cruz del Sur (Cruz do Sul) com uma fiança muito alta. Ela tem de lidar com o choque emocional que a prisão significa para ela, e viver relacionamentos complicados com as outras detentas, entre as quais Zulema, a mais perigosa de todas.
        <br />
        Macarena percebe que a chance de sobreviver seus sete anos de encarceramento (pelos quais ela provavelmente passará condenada) irão depender dela evoluir e se tornar uma pessoa bem diferente. Enquanto isso, para conseguir pagar a fiança caríssima, sua família precisa encontrar uma grande quantidade de dinheiro escondida em algum lugar, disputando com o namorado de Zulema, que leva os Ferreiros a uma situação terrível.
        <br />
        A série reflete o dia-a-dia de prisioneiras e um grupo de funcionários de uma penitenciária. A transformação de uma mulher inofensiva, aparentemente incapaz de causar danos, em uma sobrevivente que deixa seus escrúpulos de lado. A luta pela sobrevivência marca, assim, a convivência entre presidiários, caracterizada por alianças, traições e vinganças tanto entre presidiários quanto entre funcionários.
        <br />
        Macarena deixa de ser a protagonista a partir da terceira e quarta temporada.
        </p>

        <h2 className='text-yellow text-4xl'>Personagens</h2>
        <section>
          <img src={Macarena} alt="" width={300}/>
          <p className='text-gray'>Macarena Ferreiro</p>
        </section>

          
        <section>
          <img src={Zu} alt="" width={300}/>
          <p className='text-gray'>Zulema Zahir</p>
        </section>
          
        <section>
          <img src={Saray} alt="" width={300}/>
          <p className='text-gray'>Saray Vargas</p>
        </section>

          
        <section>
          <img src={Rizos} alt="" width={300}/>
          <p className='text-gray'>Estefanía Kabila</p>
        </section>
          
        
        


    </section>
    
  )
}

export default VisAVis