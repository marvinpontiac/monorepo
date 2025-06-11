# Frontend-Web

## Src > Sites

Each site should have its own folder, and will include the following

### Data
This folder to auto generated during the build tokens process

### Entry
Mandatory: each site should have an `/entry` folder.  
This will server as a starting point for the build process to pull each sites CSS

### Public
Anything specific assets for the site  
This is the static directory for the storybook sites  
Content in this folder is not included in the NPM build files  

### Stories
Stories represent components and any variations of that component.  

#### Components and Story Scaffolding with Plop

We use Plop.js to maintain consistency and speed up the development process by generating boilerplate code for new story components.

To create a new component, follow these steps:

##### Components
1. Run the component generator script from the root of the project:
   ```bash
   npm run plop
   ```
2. Select _component_ from the menu
4. Enter the name of you component, e.g. _Button_
5. Navigate to the sites/components/story/Button folder and update the JSX to reflect that component
6. Add any variations of that component
7. To style the component view the plopped scss file under sites > styles > components 

##### Documentation
- Files can be MDX or TSX file types  
- Add information related to the documentation of the project

1. Run the component generator script from the root of the project:
   ```bash
   npm run plop
   ```
2. Select _documentation_ from the menu
4. Enter the name of you document, e.g. _Colors_
5. Navigate to the sites/stories/information/Colors folder to see the scaffolded files

### Styles
`index.scss` included in site entry for `build` for npm package  
`abstracts/_tokens.scss` auto generated during the build tokens process  
`elements/_root.scss` auto generated during the build tokens process
`components/_<name>.scss` auto generate with plop template

## To add a new site & storybook theme

`<site>` name should be lowercase

### package.json > scripts
**ADD** `"build:<site>": "tsc && vite build"`  
**ADD** `"dev:<site>": "cross-env STORYBOOK_SITE=<site> storybook dev -p <6001>"` -- change port number so there are no conflicts    
**MODIFY** `"build": "npm run build:acs-test && build:<site>"`  

### .storybook > themes > <site>
If the new theme has been built in the tokens build already, there should be a theme folder and a `tokens.es6.js` file available 
You need to add an `index.ts` and update the tokens to align with to the new theme

### .storybook > manager.ts
Import the new theme and add it to the themeMap object  
The key in the object should be lowercase


## Learn More

Take a look at the following resources:

- [Vite](https://vitejs.dev/) - Build tool.
- [Storybook](https://storybook.js.org/) - FED tool for component development. 
- [PlopJS](https://plopjs.com/) - dev tool for scaffolding code.
- [Handlebars](https://handlebarsjs.com/) - build semantic templates, used with Plop scaffolding.
