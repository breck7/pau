#!/usr/bin/env ts-node
const { jtree } = require("jtree")
const { Disk } = require("jtree/products/Disk.node.js")

const tree = jtree.TreeNode.fromDisk(__dirname + "/cdmTables.tree")

const grammars: any = {}

tree.forEach((node: any) => {
  const obj = node.toObject()
  const table = obj.table
  const nodeId = obj.field + "Node"
  if (!grammars[table]) {
    grammars[table] = new jtree.TreeNode(`${table}Node
 root`)
  }
  const grammar = grammars[table]
  const newNode = grammar.appendLineAndChildren(nodeId, { description: obj.description, cells: "keyword" })
  if (obj.required) newNode.appendLine("required")
})

Object.keys(grammars).forEach(key => {
  Disk.write(`${__dirname}/tables/${key}.grammar`, grammars[key].toString())
})
