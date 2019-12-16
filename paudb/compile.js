#! /usr/local/bin/node

const { Disk } = require("jtree/products/Disk.node.js")
const { TreeBaseFolder } = require("jtree/products/treeBase.node.js")

const base = new TreeBaseFolder(undefined, __dirname + "/database")
base.loadFolder()
const errors = base._getAsProgram().getAllErrors()
if (errors.length) {
  console.log(errors.map(err => err.toString()))
  process.exit()
}
Disk.write(__dirname + "/systems.csv", base.toCsv())
