# Icons

## SVG

To add a new SVG icon to the package, place it in the `icons/svg` dirirectory

`npm run build` > will be run from the pipeline  

`npm run build` sequence  
`npm run build` > icons will be optimized, moved into an optimized folder and available for single reference    
`npm run build` > optimized icons will be combined into a symbols sprite and their   
`npm run build` > fill color will be stripped from bring hard coded to use currentColor  
 
*Note: `npm run npm-join` requires the directory to be present and will not create it if it is missed.  Therefor, please do no remove the _compiled_ dir, even though it appears empty. 

Note: To resolve some icons with edges cut off, it may be necessary to remove the clip path from the svg file.