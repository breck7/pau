# pau Readme

A Tree Language for Electronic Medical Records.

[Try it now](http://treenotation.org/designer/#grammar%0A%20pauNode%0A%20%20root%0A%20%20description%20A%20Tree%20Language%20for%20Electronic%20Medical%20Records.%0A%20%20inScope%20abstractTopLevelNode%0A%20anyCell%0A%20nameCell%0A%20%20highlightScope%20string%0A%20titleCell%0A%20%20highlightScope%20string%0A%20medicationIdCell%0A%20%20description%20ID%20number%20from%20some%20official%20source.%0A%20%20highlightScope%20constant.numeric.integer%0A%20keywordCell%0A%20%20highlightScope%20keyword%0A%20abstractKeywordNode%0A%20%20abstract%0A%20%20firstCellType%20keywordCell%0A%20abstractTopLevelNode%0A%20%20extends%20abstractKeywordNode%0A%20%20abstract%0A%20medicationNode%0A%20%20inScope%20idNode%20nameNode%0A%20%20extends%20abstractTopLevelNode%0A%20idNode%0A%20%20cells%20medicationIdCell%0A%20%20extends%20abstractKeywordNode%0A%20nameNode%0A%20%20cells%20titleCell%0A%20%20extends%20abstractKeywordNode%0A%20appointmentNode%0A%20%20inScope%20titleNode%0A%20%20extends%20abstractTopLevelNode%0A%20titleNode%0A%20%20extends%20abstractKeywordNode%0A%20%20catchAllCellType%20titleCell%0A%20patientNode%0A%20%20inScope%20displayNameNode%0A%20%20extends%20abstractTopLevelNode%0A%20displayNameNode%0A%20%20extends%20abstractKeywordNode%0A%20%20catchAllCellType%20nameCell%0Asample%0A%20medication%0A%20%20id%20med0313%0A%20%20name%20Lorazepam%0A%20appointment%0A%20%20title%20Brian%20MRI%20results%20discussion%0A%20patient%0A%20%20displayName%20Peter%20James%20Chalmers)

## Quick Example

    medication
     id med0313
     name Lorazepam
    appointment
     title Brian MRI results discussion
    patient
     displayName Peter James Chalmers

## Quick facts about pau

- pau has 10 node types.
- pau has 5 cell types
- The source code for pau is 41 lines long.

## Installing

    npm install .

## Testing

    node test.js

## Node Types


    pauNode
    abstractKeywordNode
     abstractTopLevelNode
      medicationNode
      appointmentNode
      patientNode
     idNode
     nameNode
     titleNode
     displayNameNode

## Cell Types


    anyCell
    nameCell
    titleCell
    medicationIdCell
    keywordCell

This readme was auto-generated using the [JTree library](https://github.com/treenotation/jtree).
