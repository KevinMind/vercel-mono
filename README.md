# Vercel mono-repo

This project allows me to easily create new projects in vercel using next.js and house all of the code in one repo.
There are several benefits to this.

1. maintainable/sharable code across multiple vercel projects
2. reduced number of repos to maintain
3. easier updates/codemods/dependency management

## how to create a new app in the repo

1. create a new package namespace using this template app-<index> e.g. "app-five"

`cd packages && yarn create next-app <namespace>`

2. add todo-lib dependency

`lerna add todo-lib --scope <namespace>`

3. add your css library or component library of choice.

4. build out your components, look to the other projects for inspiration. They are following a consistent structure for easier maintainability.

- components
- - AddTodo.ts - used to create a todo input field, and toggle all todos complete on/off
- - Container.ts - contains the application
- - TodoController.ts - controls for toggling filter settings and clearing completed todos
- - TodoList.ts - list of todos
- pages
- - index.ts - where the app lives, its a SPA so we just need one page.
- - _app.ts - if needed to wrap app
- - _document.ts if needed to wrap document

see [next.js docs](https://nextjs.org/) for more info 

## how to deploy an app to vercel

1. navigate to [vercel](https://vercel.com/), create a new project
2. import a project from github integration\
3. select personal account (for free stuff)
4. select the root directory. (this is important because we use learna to build the projects, and it runs from the root dir)
5. override the build and output directory, and makesure to select next.js framework
- build `yarn build:ci <namespace>`
- output dir `dist/<namespace>`
6. deploy project.

