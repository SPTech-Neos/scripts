# Blume
### Front-End Web

<br>


## Tutorial
### Premissas de Desenvolvimento:
Para o desenvolvimento, é necessário a instalação do NodeJS.

https://nodejs.org/en

### Instalação:
Com isso feito, faça uma clonagem do repositório na sua máquina com o seguinte comando:
```Shell
git clone https://github.com/SPTech-Neos/web-blume.git
```

Após isso, entre no diretório clonado e execute os comandos para a instalação dos pacotes:
```Shell
# Instalação do Yarn
npm i --global yarn

# Usar o Yarn para instalar os pacotes
yarn

# Iniciar o projeto
yarn dev
```

<br> 

## Sobre
Este repositório serve para o trabalho do sistema Client-Side de front-end do sistema Blume, feito para a matéria de Pesquisa e Inovação do 3º e 4º semestre do curso de Análise e Desenvolvimento de Sistemas feito na São Paulo Tech School.

<br>

## Tecnologias
- React
- TypeScript
- Vite
- Shoelace
- styled-components

<br> <br>

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
