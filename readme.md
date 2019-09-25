# pau Readme

A Tree Language for Electronic Medical Records.

![Slides](slides.gif)

[Try it now](http://jtree.treenotation.org/designer/#grammar%0A%20pauNode%0A%20%20root%0A%20%20description%20Extends%20Pau%20gramamr%20with%20NIST%20smoking%20status.%0A%20%20inScope%20smokesNode%0A%20%20example%0A%20%20%20smokes%3F%20yes%0A%20%20%20%20packsPerDay%201.5%0A%20keywordCell%0A%20floatCell%0A%20intCell%0A%20smokingStatusCell%0A%20%20enum%20yes%20never%20previousSmoker%0A%20%20highlightScope%20constant.numeric%0A%20packsPerDayCell%0A%20%20description%20How%20many%20packs%20per%20day%20do%20they%20currently%20smoke%3F%0A%20%20extends%20floatCell%0A%20cigarettesPerDayCell%0A%20%20description%20How%20many%20cigarettes%20per%20day%20do%20they%20currently%20smoke%3F%0A%20%20extends%20intCell%0A%20packsPerDayNode%0A%20%20cells%20keywordCell%20packsPerDayCell%0A%20cigarettesPerDayNode%0A%20%20cells%20keywordCell%20cigarettesPerDayCell%0A%20smokesNode%0A%20%20match%20smokes%3F%0A%20%20cells%20keywordCell%20smokingStatusCell%0A%20%20inScope%20packsPerDayNode%20cigarettesPerDayNode%0Asample%0A%20smokes%3F%20yes%0A%20%20packsPerDay%201.5)

## Quick Example

    smokes? yes
     packsPerDay 1.5

## Quick facts about pau

-   pau has 3 node types.
-   pau has 6 cell types
-   The source code for pau is 27 lines long.

## Installing

    npm install .

## Testing

    node test.js

## Node Types

    pauNode
    packsPerDayNode
    cigarettesPerDayNode
    smokesNode

## Cell Types

    keywordCell
    floatCell
    intCell
    smokingStatusCell
    packsPerDayCell
    cigarettesPerDayCell

This readme was auto-generated using the [JTree library](https://github.com/treenotation/jtree).
