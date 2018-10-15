# What is?

Lemmet is a indentable Emmet.

# Example

## Emmet example (from Wikipedia)
```
div#page>div.logo+ul#navigation>li*5>a
```

## Lemmet example
```
div#page
  div.logo
  ul#navigation
    li*5>a
```
* Use 2 space or TAB (also accept single "ZENKAKU" space) for indent.

# Usage

## Web converter
Go to this site and paste Lemmet strings and push "Convert to Emmet".

http://hwakimoto.github.io/lemmet

## Extension for Visual Studio Code. 

Clone or download source code and copy vscode-extension folder into your .vscode/extensions directory.

You can not find using Marketplace currently.

## Other

Or, You can include lemmet.js or lemmet.ext.js into your project and call lemmet2emmet() function to convert from Lemmet to Emmet.


