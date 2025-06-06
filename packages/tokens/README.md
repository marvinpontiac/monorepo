# Design Tokens, via Style Dictionary 

> A Style Dictionary is a system that allows you to define styles once, in a way for any platform or language to consume. A single place to create and edit your styles, and a single command exports these rules to all the places you need them - iOS, Android, CSS, JS, HTML, sketch files, style documentation, etc.

[Documentation](https://amzn.github.io/style-dictionary/#/)  

## Build.JS

- Configuration file to compiled tokens
- First iterates through platforms and then brands


## Implicit classification of tokens 

category > type > item > sub-item > state

e.g.

color.background.button.primary.active

Certian token transforms rely on the category. If you need to convert `px` to `rem` for example, the category must be _size_

## Token name format

_singular_.tokens.json

e.g. 

✅ height.tokens.json  
❌ heights.tokens.json

## Location

1. Tokens should be organized under the brand folder. 
2. If a token will only be used on a specific platform then you should add the token to that platforms folder
    - example: we are using css shorthand value for web based font property, so it belongs under the _web_ platform folder