{
"use strict";

const jtree = require("jtree")

class pauNode extends jtree.GrammarBackedRootNode {
      createParser() {
  return new jtree.TreeNode.Parser(this._getBlobNodeCatchAllNodeType(), Object.assign(Object.assign({}, super.createParser()._getFirstWordMap()), {"medication" : medicationNode,
"appointment" : appointmentNode,
"patient" : patientNode}), undefined)
  }
getGrammarProgramRoot() {
        if (!this._cachedGrammarProgramRoot)
          this._cachedGrammarProgramRoot = new jtree.GrammarProgram(`pauNode
 root
 description A Tree Language for Electronic Medical Records.
 inScope abstractTopLevelNode
anyCell
nameCell
 highlightScope string
titleCell
 highlightScope string
medicationIdCell
 description ID number from some official source.
 highlightScope constant.numeric.integer
keywordCell
 highlightScope keyword
abstractKeywordNode
 abstract
 firstCellType keywordCell
abstractTopLevelNode
 extends abstractKeywordNode
 abstract
medicationNode
 inScope idNode nameNode
 extends abstractTopLevelNode
idNode
 cells medicationIdCell
 extends abstractKeywordNode
nameNode
 cells titleCell
 extends abstractKeywordNode
appointmentNode
 inScope titleNode
 extends abstractTopLevelNode
titleNode
 extends abstractKeywordNode
 catchAllCellType titleCell
patientNode
 inScope displayNameNode
 extends abstractTopLevelNode
displayNameNode
 extends abstractKeywordNode
 catchAllCellType nameCell`)
        return this._cachedGrammarProgramRoot
      }
static getNodeTypeMap() { return {"pauNode": pauNode,
"abstractKeywordNode": abstractKeywordNode,
"abstractTopLevelNode": abstractTopLevelNode,
"medicationNode": medicationNode,
"idNode": idNode,
"nameNode": nameNode,
"appointmentNode": appointmentNode,
"titleNode": titleNode,
"patientNode": patientNode,
"displayNameNode": displayNameNode }}
    }

class abstractKeywordNode extends jtree.GrammarBackedNonRootNode {
      
    }

class abstractTopLevelNode extends abstractKeywordNode {
      
    }

class medicationNode extends abstractTopLevelNode {
      createParser() {
  return new jtree.TreeNode.Parser(undefined, Object.assign(Object.assign({}, super.createParser()._getFirstWordMap()), {"id" : idNode,
"name" : nameNode}), undefined)
  }
    }

class idNode extends abstractKeywordNode {
      get medicationIdCell() {
      return this.getWord(1)
    }
    }

class nameNode extends abstractKeywordNode {
      get titleCell() {
      return this.getWord(1)
    }
    }

class appointmentNode extends abstractTopLevelNode {
      createParser() {
  return new jtree.TreeNode.Parser(undefined, Object.assign(Object.assign({}, super.createParser()._getFirstWordMap()), {"title" : titleNode}), undefined)
  }
    }

class titleNode extends abstractKeywordNode {
      get titleCell() {
      return this.getWordsFrom(1)
    }
    }

class patientNode extends abstractTopLevelNode {
      createParser() {
  return new jtree.TreeNode.Parser(undefined, Object.assign(Object.assign({}, super.createParser()._getFirstWordMap()), {"displayName" : displayNameNode}), undefined)
  }
    }

class displayNameNode extends abstractKeywordNode {
      get nameCell() {
      return this.getWordsFrom(1)
    }
    }

module.exports = pauNode;
pauNode
}