import React from "react";

import GlobalStyles from "@mui/material/GlobalStyles";

import {
  Container,
  Banner,
  Title,
  TextAreaAtuacao,
  Line,
} from "../styles/Areas";

import PhotoAbout from "../images/photoAbout.png";
import LineTitle from "../images/LineTitle.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Areas() {
  return (
    <Container>
      <GlobalStyles
        styles={(theme) => ({
          body: { fontFamily: "Poppins" },
        })}
      />
      <Navbar />
      <Banner>
        <img src={PhotoAbout} />
        <Title>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={LineTitle} height="60rem" />
            <div style={{ marginLeft: "1rem" }}>
              <h3>Áreas de atuação</h3>
              <h5>Conheça mais sobre onde atuamos</h5>
            </div>
          </div>
          <h6>
            Hoje atendemos a diversas áreas do direito, com uma equipe que
            possui diversas especialidades, porém cada profissional com seu foco
            bem definido, para trazer as melhores e mais eficazes soluções aos
            clientes.
          </h6>
        </Title>
      </Banner>

      <TextAreaAtuacao>
        <h3>Trabalhista</h3>
        <h6>
          O Storino Advogados, em conformidade com a Constituição Federal e as
          leis que regem os Direitos Trabalhistas, atua em processos que
          envolvam as relações trabalhistas que ocorrem, tanto no setor público
          quanto no setor privado, sendo de forma preventiva e consultiva, com a
          emissão de pareceres e orientações, ou ainda, de forma litigiosa,
          através de reclamações trabalhistas, elaboração de defesa e atuação em
          fases recursais. Com colaboradores representando de forma primorosa os
          interesses de nossos clientes, sendo ele empregado ou empresa em
          conflitos ligados ao trabalho. Atuamos em diversas faces das áreas
          trabalhistas, dentre elas: <br />
          <br />
          <b>1.1 Empregado Trabalhador</b> <br />
          Pactuado o contrato de trabalho, gera-se o vínculo empregatício e com
          ele determinadas obrigações. O escritório Storino Advogados, atua para
          que os direitos empregatícios sejam cumpridos, tais como:
          <br />
          Registro em carteira de trabalho; Jornada de trabalho; Descanso
          semanal remunerado; Vale-transporte; Horas Extras; Adicional Noturno;
          Adicional de Periculosidade; Adicional de Insalubridade; 13º salário;
          Férias; Pagamento de Comissões; Gorjetas; Concessão de Férias;
          Acidente de trabalho; Licença médica; Estabilidade Gestante; Licença
          Maternidade; Licença Paternidade; Desvio de função; Dispensa sem justa
          causa; Cálculo de Rescisão Trabalhista Rescisão indireta; Cálculo de
          liquidação Fundo de Garantia por Tempo de Serviço (FGTS); Aviso
          prévio; Seguro-desemprego; Convenções e acordos coletivos de Trabalho;{" "}
          <br />
          Todos os trabalhadores, sejam eles urbanos, autônomos, rurais,
          domésticos, avulsos, temporários, merecem ter seus direitos garantido,
          e nós do Storino Advogados, de forma exclusiva e individualizada,
          resolveremos o conflito de forma assertiva, gerando satisfação aos
          nossos clientes.
          <br />
          <br />
          <b>1.2 Empresa</b>
          <br />
          As empresas, cada dia mais, necessitam do suporte jurídico, a fim de
          defender seus interesses em ações trabalhistas de maneira contenciosa,
          ou para evitar processos judiciais, através de medidas preventivas.
          Pensando nisso, o escritório Storino Advogados, oferta as seguintes
          soluções: <br />
          <br />
          <b>1.2.1 Advocacia Consultiva/Preventiva</b>
          <br />
          Na advocacia consultiva/preventiva, também conhecida como Consultoria
          Jurídica Continuada, ofereceremos todo o suporte de análise e
          orientação para maior segurança jurídica à empresa, de forma a
          minimizar os riscos de demandas trabalhistas. Dentre os diversos
          serviços, destacam-se: <br />
          Consultoria e auditoria jurídica; Medidas preventivas para adequação
          às normas trabalhistas; Contratos trabalhistas elaborados, analisados
          e alterados; Solução extrajudicial de conflitos; Participação em
          negociação coletiva para mediar conflitos.
          <br />
          <br />
          <b>1.2.2 Advocacia Contenciosa</b>
          <br />
          Quando não for possível prevenir ou solucionar o problema, possuímos
          advogados que atuarão junto a nossos clientes nos conflitos judiciais,
          tais como: Rescisão do contrato de trabalho; Ações indenizatórias;
          Ações Judiciais; Execução Trabalhista; Dissídios Coletivos.
        </h6>
      </TextAreaAtuacao>
      <Line />
      <TextAreaAtuacao>
        <h3>Cível</h3>
        <h6>
          O Direito Civil é o ramo que trata das matérias pertinentes ao direito
          público e privado, ou seja, trata do direito coletivo e individual
          pertinente a todo cidadão. <br />O Storino Advogados atua no direito
          das obrigações e seus atos jurídicos existentes, nas relações entre
          duas ou mais pessoas, gerando assim uma obrigação entre elas, ou seja,
          um contrato. Nessa esteira, nossa equipe tem um rol de profissionais
          aptos para lidar com todas as questões relacionadas a elaboração,
          modificação, conclusão e extinção de um contrato. Dentre os diversos
          assuntos discutidos, temos: Ações Ordinárias Reparação de Danos
          materiais; Reparação de Danos Morais; Revisão de Aluguel; Consignação
          em Pagamento; Imóveis; Usucapião.
        </h6>
      </TextAreaAtuacao>
      <Line />
      <TextAreaAtuacao>
        <h3>Consumidor</h3>
        <h6>
          As pessoas, diariamente, ao adquirirem um serviço ou produto, exercem
          uma relação de consumo e, muitas vezes, são lesadas por não terem seus
          direitos respeitados. Nosso escritório, atua diretamente e de forma
          personalizada na defesa dos interesses de nossos clientes, desde a
          oitiva do problema até o dano ocasionado ser reparado. A seguir,
          listaremos alguns direitos que a lei assegura ao consumidor e nós do
          Storino Advogados, trabalhamos para que sejam cumpridas: Direito à
          informação adequada; Cobrança indevida, devolvida em dobro; Direito ao
          arrependimento, em até 7 dias, de compras via internet; Viagem
          gratuita ao idoso acima de 60 anos com renda de até 02 salários
          mínimos; Direito em caso de atraso de voo.
        </h6>
      </TextAreaAtuacao>
      <Line />
      <TextAreaAtuacao>
        <h3>Previdenciário</h3>
        <h6>
          Todo cidadão brasileiro que trabalha, faz ou fará jus à Seguridade e
          Previdência Social. Os benefícios previdenciários visam garantir a
          renda do indivíduo que por algum motivo, tais como morte, doença,
          idade, maternidade, etc., não podem mais trabalhar. Os profissionais
          do Storino Advogados, são altamente capacitados para dirimir dúvidas
          referente ao benefício previdenciário, verificar se o cidadão preenche
          os requisitos legais para ser um segurado e, se a resposta for
          afirmativa, solicitar o pagamento do benefício junto ao INSS. Esses
          são alguns serviços que nosso escritório oferece: Cálculo
          previdenciário; Aposentadoria por idade; Aposentadoria por invalidez;
          Aposentadoria especial; Aposentadoria por tempo de contribuição;
          Auxílio-doença; Auxílio-acidente; Pensão por morte; Assistência Social
          BPC - LOAS; Salário-maternidade.
        </h6>
      </TextAreaAtuacao>
      <Line />
      <TextAreaAtuacao>
        <h3>Família e sucessões</h3>
        <h6>
          Nossos advogados possuem amplo conhecimento no que tange o Direito de
          Família e Sucessões, esse importante segmento abrange as relações
          familiares que estão intimamente ligadas pelo grau de afinidade que as
          cercam. Relações que, às vezes, estão sensíveis ou endurecidas por
          questões emocionais, financeiras, etc. Iremos escutar seu problema e
          de forma assertiva, ajudar a encontrar a solução para esse conflito.
          Abaixo algumas das muitas situações que resolvemos: Casamento; União
          civil; União Homoafetiva; Divórcio litigioso; Divórcio consensual;
          Paternidade; Adoção; Guarda; Alimentos; Inventário; Testamento.
        </h6>
      </TextAreaAtuacao>
      <Line />
      <TextAreaAtuacao>
        <h3>Empresarial</h3>
        <h6 style={{ marginBottom: "12rem" }}>
          Toda empresa precisa resolver questões jurídicas, sejam elas
          relacionadas a funcionários, impostos, fornecedores, relações de
          consumo, contratos, etc., ou seja, assuntos relacionados a todo o
          funcionamento interno e externo de uma empresa. Nossa Equipe de
          maneira ativa, trabalha com as questões judiciais e administrativas,
          acompanhando todas as etapas relacionadas a fundação da empresa,
          equipe societária, processos de recuperação, falência. garantindo
          assim que a empresa esteja em conformidade com o que exige a
          legislação. As demandas da área empresarial são várias, dentre elas:
          Cobranças; Execuções; Indenizações de menor complexidade; Ações
          trabalhistas de pequeno porte; Despejos; Elaboração de contratos
          simples, como contratos de locação, cessão de direitos, e outros;
          Revisão de contratos existentes e adaptação de documentos internos.
        </h6>
      </TextAreaAtuacao>

      <Footer />
    </Container>
  );
}

export default Areas;
