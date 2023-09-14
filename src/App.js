import React from 'react'
import GlobalStyle from './global'
import {
  Header,
  Logo,
  DivMaster,
  Link,
  BoxMain,
  Image,
  Titles,
  Text,
  BoxRecords,
  Name,
  Item,
  List,
  SubName,
  BoxRetirement,
  Group,
  BoxList,
  ImageRetirement,
  GroupRetirement
} from './styles'
import LogoImage from './img/logoimage.png'
import ImageMain from './img/RONNIE_COLEMAN.jpg'
import Photo from './img/aposento.jpg'

function App () {
  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <Header>
          <DivMaster>
            <Logo src={LogoImage} alt='Logo imagem' />
            <Link href='/' isFirstLink>
              HISTÓRIA
            </Link>
            <Link href='#records'>TÍTULOS</Link>
            <Link href='#retirement'>APOSENTADORIA</Link>
          </DivMaster>

          <BoxMain>
            <Image src={ImageMain} />
            <Name>ROONIE COLEMAN</Name>

            <Group>
              <Titles>HISTÓRIA</Titles>
              <Text>
                Ronnie Coleman é um renomado fisiculturista norte-americano,
                conhecido por conquistar oito títulos consecutivos do Mr.
                Olympia, compartilhando esse recorde com Lee Haney. Ele começou
                sua jornada no fisiculturismo enquanto era policial, com tempo
                livre para treinar. Sua carreira decolou quando treinou na
                academia Metroflex, cujo dono, Brian Dobson, o ajudou a se
                preparar para competições. Em 1990, Coleman venceu o Mr. Texas e
                o National Physique Committee Texas Championships. Ele passou a
                ganhar prestígio no cenário profissional, vencendo o Pro Canada
                Cup em 1995. Ronnie Coleman também produziu vídeos de
                treinamento e promoveu a musculação de forma segura. Ele
                preferia pesos livres para maximizar flexibilidade e amplitude
                de movimento. Coleman também apoiou causas sociais e foi
                homenageado por suas realizações no fisiculturismo. Ele é
                conhecido por quebrar o recorde de mais vitórias IFBB como
                profissional, com 26 vitórias, e seu sucesso inspirou muitos na
                comunidade de musculação. Coleman enfrentou desafios de saúde ao
                longo de sua carreira, incluindo uma cirurgia de substituição da
                articulação do quadril em 2015. Resumindo, Roonie Coleman, o
                homem com a genética dos deuses, o insuperável, o maior que
                existiu
              </Text>
            </Group>
          </BoxMain>

          <BoxRecords>
            <Titles isTitleName id='records'>
              TÍTULOS
            </Titles>
            <Group isGroup>
              <BoxList id='firstbox'>
                <SubName>Década de 1990:</SubName>
                <List>
                  <Item>1990: Mr. Texas - Heavyweight & Overall</Item>
                  <Item>1991: NPC Nationals - Heavyweight</Item>
                  <Item>
                    1991: IFBB World Amateur Championships - Heavyweight
                  </Item>
                  <Item>1993: IFBB Chicago Pro Invitational</Item>
                  <Item>1993: IFBB Grand Prix France</Item>
                  <Item>1993: IFBB Grand Prix Germany</Item>
                  <Item>1993: IFBB Niagara Falls Pro Invitational</Item>
                  <Item>1994: IFBB Mr. Olympia</Item>
                  <Item>1995: IFBB Grand Prix France</Item>
                  <Item>1995: IFBB Grand Prix Russia</Item>
                  <Item>1995: IFBB Grand Prix Ukraine</Item>
                </List>
              </BoxList>

              <BoxList id='seccondbox'>
                <List>
                  <Item>1995: IFBB Night of Champions</Item>
                  <Item>1995: IFBB Mr. Olympia</Item>
                  <Item>1996: IFBB Grand Prix England</Item>
                  <Item>1996: IFBB Grand Prix Germany</Item>
                  <Item>1996: IFBB Grand Prix Spain</Item>
                  <Item>1996: IFBB Night of Champions</Item>
                  <Item>1996: IFBB Mr. Olympia</Item>
                  <Item>1997: IFBB Arnold Classic</Item>
                  <Item>1997: IFBB Grand Prix Czech Republic</Item>
                  <Item>1997: IFBB Grand Prix Finland</Item>
                  <Item>1997: IFBB Grand Prix England</Item>
                </List>
              </BoxList>
              <BoxList id='thirdbox'>
                <List>
                  <Item>1997: IFBB Grand Prix Germany</Item>
                  <Item>1997: IFBB Grand Prix Hungary</Item>
                  <Item>1997: IFBB Grand Prix Russia</Item>
                  <Item>1997: IFBB Grand Prix Spain</Item>
                  <Item>1997: IFBB Ironman Pro Invitational</Item>
                  <Item>1997: IFBB Mr. Olympia</Item>
                  <Item>1997: IFBB San Jose Pro Invitational</Item>
                  <Item>1998: IFBB Mr. Olympia</Item>
                  <Item>1999: IFBB Grand Prix England</Item>
                  <Item>1999: IFBB Joe Weiders Pro World</Item>
                  <Item>1999: IFBB Mr. Olympia</Item>
                </List>
              </BoxList>

              <BoxList id='fourbox'>
                <List>
                  <SubName>Década de 2000:</SubName>
                  <Item>2000: JOE WEIDER’S WORLD PRO CUP</Item>
                  <Item>2000: Grand Prix England</Item>
                  <Item>2000: IFBB Mr. Olympia</Item>
                  <Item>2001: New Zealand Grand Prix</Item>
                  <Item>2001: Mr. Olympia</Item>
                  <Item>2001: Arnold Classic</Item>
                  <Item>2002: Grand Prix Holland</Item>
                  <Item>2002: Mr. Olympia</Item>
                  <Item>2003: Mr. Olympia</Item>
                  <Item>2004: Mr. Olympia</Item>
                  <Item>2005: Mr. Olympia</Item>
                  <Item>2006: Mr. Olympia</Item>
                  <Item>2007: Mr. Olympia</Item>
                </List>
              </BoxList>
            </Group>
          </BoxRecords>

          <BoxRetirement>
            <ImageRetirement src={Photo} />
            <GroupRetirement>
              <Titles isTitleName2 id='retirement'>
                APOSENTADORIA
              </Titles>

              <Text isTextRetirement>
                Ronnie Coleman, aos 54 anos, enfrentou uma série de desafios de
                saúde devido às lesões que acumulou ao longo de sua carreira no
                fisiculturismo. Ele passou por 10 intervenções cirúrgicas em
                várias partes do corpo, incluindo a coluna, pescoço e quadril.
                Algumas cirurgias foram necessárias para substituir parafusos
                quebrados em sua coluna. As dores intensas na coluna e no
                pescoço o levaram a abandonar o esporte profissionalmente,
                apesar de suas conquistas impressionantes, como levantar
                quantidades extraordinárias de peso, como meia tonelada em
                agachamentos e 2300 libras (uma tonelada) no Leg Press. Ronnie
                Coleman reflete sobre sua carreira com gratidão, afirmando que
                "valeu a pena". Hoje, Ronnie Coleman atua como administrador e
                aproveita mais tempo para sua família e uma vida simples. Ele
                mantém uma atitude positiva em relação ao futuro, destacando sua
                fé como um elemento fundamental em sua vida. Ronnie Coleman é
                reverenciado como um dos maiores campeões do fisiculturismo
                mundial, carinhosamente chamado de "Big Ron". Sua história é a
                de um vencedor eterno, mesmo diante dos desafios de saúde que
                enfrentou.
              </Text>
            </GroupRetirement>
          </BoxRetirement>
        </Header>
      </div>
    </>
  )
}

export default App
