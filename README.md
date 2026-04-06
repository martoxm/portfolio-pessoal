# Portfólio Pessoal

Este projeto é uma página estática feita com HTML e CSS para apresentar minha trajetória como desenvolvedor em formação, meus estudos e alguns projetos de destaque.

## Objetivo do projeto

O objetivo foi criar uma landing page simples, organizada e profissional, com foco em:

- apresentar quem sou e em que estágio estou na minha formação;
- reunir links para projetos e perfis profissionais;
- praticar estrutura semântica em HTML;
- treinar estilização com CSS puro, sem depender de frameworks.

## Estrutura geral

O site foi organizado em blocos claros para facilitar leitura e manutenção:

- `header`: apresenta nome e descrição curta;
- `section.sobre`: resumo sobre mim e meus estudos;
- `section.projetos`: cards com projetos em destaque;
- `section.contato`: formas de contato e redes sociais;
- `footer`: rodapé com assinatura do portfólio.

## O que foi feito no HTML

O arquivo `index.html` foi montado com uma estrutura semântica simples e fácil de expandir.

### 1. Cabeçalho

O cabeçalho traz o nome principal e uma frase de apresentação. Ele serve como a primeira leitura da página e ajuda a contextualizar o visitante rapidamente.

### 2. Seção “Sobre mim”

Essa parte resume a fase atual dos estudos, citando tecnologias que estou aprendendo e o objetivo de buscar a primeira oportunidade na área.

### 3. Seção “Projetos em destaque”

Aqui foram adicionados cards com projetos relevantes. Cada card contém:

- título do projeto;
- descrição curta;
- link externo para o repositório ou aplicação.

Essa estrutura é útil porque você pode repetir o padrão para adicionar novos projetos sem mudar a lógica da página.

### 4. Seção “Contato”

Foi criada para centralizar os principais canais de contato, deixando o currículo mais funcional e fácil de consultar.

### 5. Rodapé

O footer fecha a página com uma assinatura simples e reforça a identidade do portfólio.

## O que foi feito no CSS

O arquivo `style.css` foi pensado para deixar a página limpa, legível e com aparência mais profissional.

### Reset básico

Foi aplicado um reset simples em todos os elementos para remover margens e paddings padrão e facilitar o controle do layout.

### Paleta de cores

O visual usa tons escuros com contraste suave para texto e elementos de destaque.

- fundo principal escuro;
- cards com contraste ligeiramente diferente;
- links em azul para destacar ações;
- texto secundário em cinza para hierarquia visual.

### Tipografia

Foi usada uma fonte sans-serif padrão para manter boa leitura e simplicidade. Isso ajuda na clareza da interface e evita distrações visuais.

### Layout responsivo

O conteúdo principal usa uma `.container` com largura controlada e centralizada. Isso mantém a leitura confortável em telas maiores e evita que o conteúdo fique espalhado demais.

O bloco de projetos usa grid responsivo com `repeat(auto-fit, minmax(...))`, o que permite que os cards se reorganizem automaticamente conforme o tamanho da tela.

### Cards de projeto

Os cards receberam:

- fundo levemente destacado;
- borda discreta;
- espaçamento interno;
- cantos arredondados;
- links com feedback visual no hover.

Isso melhora a leitura e separa melhor cada projeto.

## Tecnologias utilizadas

- HTML5
- CSS3

## Como reaproveitar este modelo nos estudos

Você pode usar esta estrutura como base para outros projetos seguindo este raciocínio:

- trocar o conteúdo da seção “Sobre mim” para o momento atual dos estudos;
- adicionar novos cards em “Projetos em destaque”;
- atualizar links para repositórios, deploys e perfis profissionais;
- ajustar cores, fontes e espaçamentos para testar novos estilos visuais;
- incluir novas seções, como habilidades, certificados ou experiência.

## Aprendizados principais

Este projeto ajuda a fixar fundamentos importantes, como:

- organização de conteúdo em blocos;
- uso de HTML semântico;
- criação de layout com CSS puro;
- uso de grid para responsividade;
- padronização visual com cores, bordas e espaçamento;
- construção de um portfólio fácil de atualizar.

## Possíveis melhorias futuras

Se quiser evoluir o projeto depois, algumas melhorias naturais são:

- adicionar ícones nas redes sociais;
- incluir animações leves;
- criar uma seção de habilidades;
- deixar o layout mais interativo com JavaScript;
- melhorar acessibilidade com descrições e foco visual;
- trocar a tipografia por uma fonte mais personalizada.

## Resumo rápido

Este portfólio foi feito para funcionar como uma apresentação simples, profissional e reutilizável. A estrutura foi pensada para ser fácil de entender, fácil de editar e útil como material de estudo para futuros projetos.
