# pau Readme

A Tree Language for Electronic Medical Records.

![Slides](slides.gif)

- [Pau on GitHub](https://github.com/treenotation/pau)
- [PauSynth](https://pau.treenotation.org/synth/)
- [Try it now](http://jtree.treenotation.org/designer/#grammar%0A%20pauNode%0A%20%20root%0A%20%20description%20Extends%20Pau%20gramamr%20with%20NIST%20smoking%20status.%0A%20%20inScope%20smokesNode%0A%20%20example%0A%20%20%20smokes%3F%20yes%0A%20%20%20%20packsPerDay%201.5%0A%20keywordCell%0A%20floatCell%0A%20intCell%0A%20smokingStatusCell%0A%20%20enum%20yes%20never%20previousSmoker%0A%20%20highlightScope%20constant.numeric%0A%20packsPerDayCell%0A%20%20description%20How%20many%20packs%20per%20day%20do%20they%20currently%20smoke%3F%0A%20%20extends%20floatCell%0A%20cigarettesPerDayCell%0A%20%20description%20How%20many%20cigarettes%20per%20day%20do%20they%20currently%20smoke%3F%0A%20%20extends%20intCell%0A%20packsPerDayNode%0A%20%20cells%20keywordCell%20packsPerDayCell%0A%20cigarettesPerDayNode%0A%20%20cells%20keywordCell%20cigarettesPerDayCell%0A%20smokesNode%0A%20%20match%20smokes%3F%0A%20%20cells%20keywordCell%20smokingStatusCell%0A%20%20inScope%20packsPerDayNode%20cigarettesPerDayNode%0Asample%0A%20smokes%3F%20yes%0A%20%20packsPerDay%201.5)

## Overview

Pau is **P**atient **A**ccessible and **U**nderstandable Medical Records.

Imagine if you could copy/paste your medical records in a simple email to change doctors. Imagine if you could copy/paste your relevant medical records to participate in a new medical research study you care deeply about. Imagine if you could audit and dive into explanations of every line in your medical records. These are the types of things that Pau will allow.

## Quick Example

    smokes yes
     packsPerDay 1.5
