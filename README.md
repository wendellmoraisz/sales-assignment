# Sales Assignment



# Tecnologias utilizadas
- [Next.js](https://nextjs.org/)
- [ReactJS](https://reactjs.org/)
- [Styled-Components](https://styled-components.com/)
- [Firebase](https://firebase.google.com/?hl=pt)

# Regras de Negócio
- Somente o vendedor pode ter acesso às páginas de lançamento e controle de vendas
- A página de aprovação de venda só é visível para o usuário cadastrado como admin
- Cada venda lançada pelo vendedor deve ser aprovada pelo Manager
- Qualquer alteração na venda deve ser aprovada pelo Manager
- O vendedor só consegue vizualizar o valor da comissão depois que a venda for aprovada
## Regras da comissão
- Vendas de até 400 reais: comissão de 1%
- Vendas de 400 a 800 reais: comissão de 2%
- Vendas de 800 a 1200 reais: comissão de 3% com bonus de 50 reais para a primeira do mês.
- Vendas de 1200 a 1600 reais: comissão de 4% com bonus de 100 reais para a primeira do mês.
- Se as vendas totais do mês passarem de 10.000 reais, cada venda após bater esse valor terá um bonus de 1%.

# Usuários cadastrados

### admin
email: admin@email.com

senha: admin123

### vendedor
email: vendedor@teste.com

senha: vendedor123

# Como rodar o projeto

```bash
# clone o repositório
git clone https://github.com/wendellmoraisz/sales-assignment
#entre no diretório do projeto e execute os seguintes comandos no seu terminal:
yarn install
yarn dev
