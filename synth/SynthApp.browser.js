//onsave jtree build produceSynth
class SynthCommander extends AbstractCommander {
  constructor(app) {
    super(app)
    this._app = app
  }
  synthesizeCommand() {
    document.getElementById("output").value = new pauNode()
      .getGrammarProgram()
      .synthesizeNode()
      .join("\n")
  }
}
class SynthApp extends AbstractTreeComponent {
  constructor() {
    super(...arguments)
    this._commander = new SynthCommander(this)
  }
  createParser() {
    return new jtree.TreeNode.Parser(undefined, {
      githubTriangleComponent: githubTriangleComponent,
      navBarComponent: navBarComponent,
      headerComponent: headerComponent,
      controlsComponent: controlsComponent,
      advancedControlsComponent: advancedControlsComponent,
      outputComponent: outputComponent,
      TreeComponentFrameworkDebuggerComponent: TreeComponentFrameworkDebuggerComponent
    })
  }
  static getDefaultStartState() {
    return `navBarComponent
headerComponent
controlsComponent
advancedControlsComponent
outputComponent
githubTriangleComponent`
  }
  toHakonCode() {
    return `body
 font-family Roboto,sans-serif
 font-weight 100
 width 1000px
 margin auto
 padding-top 10px
h1
 font-weight 300`
  }
}
class navBarComponent extends AbstractTreeComponent {
  toHakonCode() {
    return `.logo
 padding-right 10px
 color black
 text-decoration none
 font-weight 500`
  }
  toStumpCode() {
    return `div
 a PAU
  href https://pau.treenotation.org/
  class logo
 span medical records you can copy & paste`
  }
}
class controlsComponent extends AbstractTreeComponent {
  toStumpCode() {
    return `div
 label Sex
 select
  option Female
  option Male
 label BirthYear
 input
  type number
  value 1919
  min 1900
  max 2019
 label BirthCountry
 select
  option Canada
  option China
  option India
  option United States
 button Synthesize
 ${WillowConstants.DataShadowEvents.onClickCommand} synthesizeCommand`
  }
}
class advancedControlsComponent extends AbstractTreeComponent {
  toStumpCode() {
    return "div"
    return `div
 input
  type number
  value 1
 label Number of records`
  }
}
class outputComponent extends AbstractTreeComponent {
  toHakonCode() {
    return `textarea
 border 0
 width 100%
 height 400px
 margin-top 20px
 background #eee`
  }
  toStumpCode() {
    return `textarea
 id output`
  }
}
class headerComponent extends AbstractTreeComponent {
  toStumpCode() {
    return `h1 PauSynth: Synthesize <strong>real</strong> medical records for <strong>fake</strong> people`
  }
}
class githubTriangleComponent extends AbstractGithubTriangleComponent {
  constructor() {
    super(...arguments)
    this.githubLink = `https://github.com/treenotation/pau/tree/master/synth`
  }
  toHakonCode() {
    return `.AbstractGithubTriangleComponent
 display block
 position absolute
 top 0
 right 0`
  }
  toStumpCode() {
    return `a
 class AbstractGithubTriangleComponent
 href ${this.githubLink}
 img
  src github-fork.svg`
  }
}
window.SynthApp = SynthApp
