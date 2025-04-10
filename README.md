# To-do List 📝

## 📌 Sobre o projeto

Este é um sistema de to-do list (lista de tarefas) desenvolvido com **React Native** e **TypeScript**, contendo as seguintes funcionalidades:

- Adicionar uma nova tarefa
- Marcar e desmarcar uma tarefa como concluída
- Remover uma tarefa da listagem
- Mostrar o progresso de conclusão das tarefas

Esse sistema utiliza conceitos como:
- **Estados**: Para controlar o estado das tarefas (como se estão concluídas ou não).
- **Imutabilidade do estado**: Para garantir que o estado do aplicativo seja manipulado de forma segura e eficiente.
- **Listas e chaves no React Native**: Para renderizar as tarefas de maneira eficiente e garantir a atualização correta dos itens da lista.
- **Propriedades**: Para passar dados entre componentes de forma eficiente.
- **Componentização**: Para tornar o código modular, reutilizável e mais fácil de manter.

## 🚀 Rodando o Projeto
Para rodar o projeto localmente, siga os passos abaixo.

1. Instalar as dependências

```
npm install 
```
Se preferir usar o Yarn, você pode rodar:
```
yarn install
```
2. Iniciar o Expo

Após instalar as dependências, inicie o servidor do Expo com o comando:

```
npx expo start
```
Esse comando vai:

- Abrir o Metro Bundler no navegador.
- Gerar um QR Code para você escanear com o app Expo Go e rodar o projeto no seu dispositivo físico.
- Oferecer opções para rodar no emulador Android ou simulador iOS diretamente.

3. Rodando em um Emulador ou Simulador

Se você preferir rodar o projeto diretamente em um emulador Android ou simulador iOS, use os comandos abaixo:

**Para Android**:

```
npx expo start --android
```
**Para iOS** (somente no macOS com Xcode instalado):

```
npx expo start --ios
```
4. Escaneando o QR Code

Caso prefira rodar o aplicativo em um dispositivo físico, baixe o aplicativo Expo Go na Play Store (Android) ou na App Store (iOS) e escaneie o QR Code gerado pelo Metro Bundler no seu navegador.