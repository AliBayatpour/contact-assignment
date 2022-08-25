# Tuum Assignment

First of all thank you for giving me this opportunity. I really enjoyed doing the task.

Some Notes:
1. This project is Dockerized so you can run it as a Docker container
2. I wrote some unit tests for the project for the purpose of demonstration for example input and checkbox components are covered with tests.
3. In case you need me to change anythign in the project please do not hesitate to ask me via my email aliglbayatpour@gmail.com

## Available Scripts

If you don't want to use Docker and in case you have the compatible node version > 16 you can run the project easily by:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `docker-compose up --build`

You can run the project as a container in interactive mode by this.


### `npm test`

Launches the test runner in the interactive watch mode.


# Reducing the bundle size
1. In order to have a smaller bundle size I used create react app command since it minifies the code automatically and it's efficient for production code as well.
2. In case the practice included multiple pages I'd use useMemo and lazy loading the pages to optimize the app
3. I tried to avoid using unnecessary libraries which are bigger than what I needed(like MUI) I only used react-select for select box since the design was using a custom selectbox
4. I tried to avoid any css duplication that's why I created media query mixins and only imported them in the components that needed media queries.
5. I also created a global grid system similar to bootstrap to avoid duplicate scss
6. I didn't use any big styling library like bootstrap or MUI for this project since I could build the project with few css rules and there wasn't any need for those full fledge libraries.
7. I Dockerized the project since it's much safer and relaile when we deploy and use the docker container