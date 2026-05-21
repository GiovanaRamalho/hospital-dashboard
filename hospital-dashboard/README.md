# Dashboard Hospitalar - Grupo IT Quality

Este projeto é um sistema de dashboard hospitalar desenvolvido com **Next.js**, com foco em visualização e gestão de procedimentos médicos, incluindo métricas de execução, valores financeiros e status de aprovação.

---

## 📌 Visão geral

O sistema permite:

- Visualizar procedimentos hospitalares
- Acompanhar total de execuções
- Separar procedimentos aprovados e rejeitados
- Ver top 5 procedimentos mais executados
- Editar perfil do usuário com validações de negócio
- Alterar senha com validação de segurança

---

## 🧠 Abordagem utilizada

O projeto foi construído com foco em:

- A abordagem adotada foi dividir o desafio em duas etapas principais. Na primeira, foquei na implementação das funcionalidades básicas exigidas, garantindo que todos os requisitos iniciais fossem atendidos de forma funcional.

Na segunda etapa, realizei uma revisão completa do sistema com foco em testes e análise de consistência das regras de negócio. Durante esse processo, identifiquei algumas inconsistências na lógica implementada e trabalhei na correção desses pontos.

Além disso, busquei melhorar a experiência do usuário, refinando interações, validações e feedbacks visuais, tornando a interface mais intuitiva e coerente com o fluxo de uso.

Os dados são atualmente simulados via **mock API**, permitindo foco na lógica e interface sem dependência de backend.

---

## 🧩 Tecnologias utilizadas

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Componentes reutilizáveis (UI system)
- Dados mockados

---

## 🚀 Como executar o projeto

1. Clone o projeto.

https://github.com/GiovanaRamalho/hospital-dashboard

2. Instale as dependências:

npm install

3. Execute o projeto em ambiente de desenvolvimento com o comando:

npm run dev


4. Acesse no navegador:

Após iniciar o servidor, abra:

http://localhost:3000

## OBS importante: dados mockados do usuário logado, para teste:

  nome: joao silva,
  email: joao@email.com,
  senha: senha123,