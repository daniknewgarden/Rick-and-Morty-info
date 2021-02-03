# Rick and Morty info app 🔍

![Video](https://i.imgur.com/Zs8plxk.gif) <br/>
[**See demo**](https://rick-and-morty-search.web.app/) <br/>

## Tools 🔧

### Environment 👩‍💻

**For this project i'm using [create-react-app](https://create-react-app.dev/)**

### Technologies 🐾

    React (Typescript)
    React router (history API)
    React testing library
    GraphQL (Apollo client 3)
    Styled Components
    Storybook

## How to run 🏃‍♀️

**After you cloned project install dependencies running `npm i`**

### `npm start`

Runs the app in the development mode. 🛠<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode. 🧪<br />
I'm using react-testing-library, [see docs](https://testing-library.com/docs/)

### `npm build`

Builds the app for production to the `build` folder. 🏗<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run storybook`

Runs storybook 🎨 on [http://localhost:6006/](http://localhost:6006/).

### `npm build-storybook`

Builds static storybook docs 📚 for production to the `storybook-static` folder.

## Components guide 🧩

**All components docs you can see on the [Storybook](https://daniknewgarden.github.io/rick-and-morty-info/).**

### Custom styles 🎨

You can add custom styles for components using `className` prop.

Example:

```JSX
import React, { useState } from "react";
import Subtitle from "../Components/Subtitle";
import Title from "../Components/Title";

const HomePage: React.FC<HomePageTypes> = () => (
    <div className="home-page">
      <Title
        text="Search for characters"
        className="home-page__title"
        big={true}
      />
      <Subtitle
        text='Search for all the characters from "Rick and Morty" and get information about them'
        className="home-page__subtitle"
      />
    </div>
);

export default HomePage;
```

css:

```css
.home-page .home-page__title {
  margin-bottom: 16px;
}

.home-page .home-page__subtitle {
  margin-bottom: 64px;
}
```

## GraphQL API interaction 🚀

I'm using Apollo Client React for GraphQL interaction ([see docs](https://www.apollographql.com/docs/react/)). There is the public [API on GitHub](https://github.com/arthurdenner/rick-and-morty-graphql-api) and [playground](https://rickandmortyapi.com/graphql).

### Requests

#### getCharacters.ts

Using for searching character on the home page.

Arguments:

| Name |  type  |    description |
| ---- | :----: | -------------: |
| name | string | character name |

#### getCharacterInfo.ts

Using on the info page. Returns info about selected character.

Arguments:

| Name    |       type       |   description |
| ------- | :--------------: | ------------: |
| id      | number or string |  character id |
| image   |     boolean      |    load image |
| episode |     boolean      | load episodes |

## Deployment

On this project is configured CI with deployment to [Firebase hosting](https://firebase.google.com/docs/hosting) for main app, and deployment to GitHub Pages for storybook docs.

