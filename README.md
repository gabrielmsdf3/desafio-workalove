# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

*******

Resumo: Trata-se de um formulário multi-parte,com várias partes no formulário, agregando informações e no final os dados são encaminhados via axios e utilizados pelo mockapi

Inicialmente começou só com um componente, o componente formulário, depois foi criado os demais componentes ali que são subformulários que estão sendo chamados, que também podem ser reutilizados.
 Foi criado contextos, para ter um contexto de validação, onde por padrão não tenho validação nenhuma nesses campos, mas na hora que crio um provider dele no app.js, por exemplo,  temos o provider desse contexto, esse provider pode mudar as informações que meu contexto vai passar para baixo, ele tem que definir quais validações serão utilizadas.

 Com o auxilio do formulário de cadastro, e também por  causa do contexto, o (context provider), ele não precisa saber de informações que ele não quer, por exemplo, o que vai ser validado e como vai ser validado, porque para ele não interessa esse formulário de cadastro, é só um componente que faz o gerenciamento de renderização. Ele é como se fosse uma máquina de estados para o nosso formulário. Ele vai definir o que está sendo renderizado e quando está sendo renderizado, a partir de um estado dele que é uma (etapa atual).

 Além disso, ele vai coletando os dados e vai juntando, agregando eles para no final quando  estiver pronto para enviar esses dados chamar a propriedade de ao enviar que quem passou  foi meu app.js e esse app.js, ou quem quer que crie esse formulário pode decidir o que vai fazer com os dados que ele mesmo coletou e que no caso foi direcionado para o mockAPI via axios.


Tecnologias utilizadas:
reactJs
material UI
axios



