# React Boilerplate 👋⚛️

## 👨‍💻 How to use
```bash
git clone https://github.com/9gustin/react-boilerplate.git
cd react-boilerplate
npm install && npm start
```
Now you could delete .git folder and rename the folder "react-boilerplate" to "your-project-name" and it's all ;)

## 📦 Contains

#### Typescript
[Reference](https://create-react-app.dev/docs/adding-typescript/)

#### Scss
[Reference](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)

#### react-i18next
[Reference](https://react.i18next.com/getting-started)

#### ESLint
[Reference](https://www.andrewmin.info/blog/react-setup/) <br/>
Airbnb Config

#### Stylelint
[Reference](https://stylelint.io/user-guide/get-started) <br />
Has the default config with 4 added rules:
 - Css properties must be ordered alphabetically
 - Accept max 3 classes selected together
 - Classnames must be in kebab case
 - Must use variables to font-size, colors, z-index and font-weight

#### Husky
[Reference](https://github.com/typicode/husky) <br/>
Validate ESLint and Stylelint on pre-commit

#### Deploy
The app contains the "deploy" command. That deploy the React App to Firebase. 
You must have installed [Firebase Cli](https://firebase.google.com/docs/cli?hl=es) and logged with your user.
For that you have to replace "PROJECT_ID" for you project id into .firebaserc. Like that: 

```JSON
{
  "projects": {
    "default": "my-random-project123"
  }
}

```

#### Upgrades / TO DO:
 - Generic app router
