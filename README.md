### Init the project

`npm init private`

### Init git

`git init`

`curl -o .gitignore https://raw.githubusercontent.com/vdelacou/iblis-gatsby-starter/master/.gatsby_gitignore`

### Add eslint

Follow here `https://gist.github.com/vdelacou/58484f1c11af70aaa457f4e5c289e893#file-readme-md`

### Add the `tsconfig.json` for gastsby

`curl -o tsconfig.json https://raw.githubusercontent.com/vdelacou/iblis-gatsby-starter/master/tsconfig.json`

### Add the `gatsby-config.js`

`curl -o gatsby-config.js https://raw.githubusercontent.com/vdelacou/iblis-gatsby-starter/master/gatsby-config.js`

### Add the library

`npm install @material-ui/core gatsby gatsby-image gatsby-plugin-intl react@16 react-dom@16 react-helmet`

### Add the dependency

`npm install --save-dev @types/node @types/react @types/react-dom @types/react-helmet gatsby-plugin-manifest gatsby-plugin-nprogress gatsby-plugin-offline gatsby-plugin-react-helmet gatsby-plugin-robots-txt gatsby-plugin-sharp gatsby-plugin-sitemap gatsby-source-filesystem gatsby-theme-material-ui gatsby-transformer-sharp typescript@4.0.5 eslint-loader`

### Add the scripts to `package.json`

```json
  "scripts": {
    "start": "gatsby develop",
    "build": "gatsby build --prefix-paths",
    "serve": "gatsby serve",
    "clean": "gatsby clean",
    "lint": "eslint ./src --ext .js,.jsx,.ts,.tsx"
  },
```
