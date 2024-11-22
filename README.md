# Fix Money
 
- Link para Home Page: https://fixmoney.vercel.app/


# ANOTAÇÕES
Uma visão geral das ferramentas e tecnologias que usei:
Backend

    Node.js + Fastify

        Criei rotas para reportar, buscar, resolver e listar problemas reportados.

    Drizzle ORM + PostgreSQL

        Gerenciei as Tabelas e resoluções dos problemas reportados com o Drizzle, que por sua vez também gerou as migrações.

    Docker e NEON para Banco de Dados

        Usei o Docker localmente para criar e gerenciar instâncias PostgreSQL durante o desenvolvimento.
        O Neon por ser uma das muitas soluções PostgreSQL (com plano gratuito), optei para usar em produção.

Frontend

    Reactjs
    Clerk (para autenticação)

        Usei uma funcionalidade do Clerk que me permitiu criar restrições de usuários a partir do email, podendo assim dar acesso para Cadastro apenas aos estudantes do "meu" Dormitório.

    Cloudinary

        Enviei para o Cloudinary as imagens reportadas pelos usuários, para me retornar URL públicas e salvar no Banco de Dados para serem exibidas no frontend.

    Google Translate API

        Tal como descrevi acima, uma das principais funcionalidades seria o App suportar multiplos idiomas. Então optei por traduzir as descrições dos problemas para Russo ao serem exibidas na conta dos Técnicos.

    Todas as ferramentas e serviços que usei têm planos gratuitos.
    Fiz o deploy do Backend na Vercel e do Frontend na Netlify.