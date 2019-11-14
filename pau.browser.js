{
  class abstractAddressNode extends jtree.GrammarBackedNode {
    createParser() {
      return new jtree.TreeNode.Parser(
        undefined,
        Object.assign(Object.assign({}, super.createParser()._getFirstWordMapAsObject()), {
          phone: phoneNode,
          firstName: firstNameNode,
          lastName: lastNameNode,
          middleName: middleNameNode,
          nickName: nickNameNode
        }),
        undefined
      )
    }
  }

  class emergencyContactNode extends abstractAddressNode {}

  class contactInfoNode extends abstractAddressNode {}

  class emailNode extends jtree.GrammarBackedNode {
    get keywordCell() {
      return this.getWord(0)
    }
    get emailCell() {
      return this.getWord(1)
    }
  }

  class phoneNode extends jtree.GrammarBackedNode {
    createParser() {
      return new jtree.TreeNode.Parser(
        undefined,
        Object.assign(Object.assign({}, super.createParser()._getFirstWordMapAsObject()), { number: phoneNumberNode, type: phoneTypeNode }),
        undefined
      )
    }
  }

  class phoneNumberNode extends jtree.GrammarBackedNode {}

  class phoneTypeNode extends jtree.GrammarBackedNode {
    get keywordCell() {
      return this.getWord(0)
    }
    get phoneTypeCell() {
      return this.getWord(1)
    }
  }

  class abstractNameNode extends jtree.GrammarBackedNode {
    get keywordCell() {
      return this.getWord(0)
    }
    get nameCell() {
      return this.getWord(1)
    }
  }

  class firstNameNode extends abstractNameNode {}

  class lastNameNode extends abstractNameNode {}

  class middleNameNode extends abstractNameNode {}

  class nickNameNode extends abstractNameNode {}

  class abstractDemographicConceptNode extends jtree.GrammarBackedNode {
    get keywordCell() {
      return this.getWord(0)
    }
  }

  class ethnicityNode extends abstractDemographicConceptNode {
    get ethnicityCell() {
      return this.getWordsFrom(0)
    }
  }

  class raceNode extends abstractDemographicConceptNode {
    get raceCell() {
      return this.getWordsFrom(0)
    }
  }

  class sexNode extends abstractDemographicConceptNode {
    get keywordCell() {
      return this.getWord(0)
    }
    get sexCell() {
      return this.getWord(1)
    }
  }

  class abstractEventNode extends jtree.GrammarBackedNode {
    createParser() {
      return new jtree.TreeNode.Parser(
        undefined,
        Object.assign(Object.assign({}, super.createParser()._getFirstWordMapAsObject()), {
          date: observationDateNode,
          time: observationTimeNode,
          location: locationNode
        }),
        undefined
      )
    }
  }

  class patientBornNode extends abstractEventNode {
    createParser() {
      return new jtree.TreeNode.Parser(
        undefined,
        Object.assign(Object.assign({}, super.createParser()._getFirstWordMapAsObject()), {
          firstName: firstNameNode,
          lastName: lastNameNode,
          middleName: middleNameNode,
          nickName: nickNameNode,
          ethnicity: ethnicityNode,
          race: raceNode,
          sex: sexNode
        }),
        undefined
      )
    }
    get keywordCell() {
      return this.getWord(0)
    }
  }

  class patientDiedNode extends abstractEventNode {
    get keywordCell() {
      return this.getWord(0)
    }
  }

  class allergyTestedNode extends abstractEventNode {}

  class conditionDiagnosedNode extends abstractEventNode {}

  class drugPrescribedNode extends abstractEventNode {}

  class abstractObservationNode extends abstractEventNode {
    createParser() {
      return new jtree.TreeNode.Parser(
        undefined,
        Object.assign(Object.assign({}, super.createParser()._getFirstWordMapAsObject()), {
          date: observationDateNode,
          time: observationTimeNode,
          provider: observationProviderNode,
          location: locationNode
        }),
        undefined
      )
    }
  }

  class smokingSurveyNode extends abstractObservationNode {
    createParser() {
      return new jtree.TreeNode.Parser(
        undefined,
        Object.assign(Object.assign({}, super.createParser()._getFirstWordMapAsObject()), {
          smokes: smokesNode,
          packsPerDay: packsPerDayNode,
          cigarettesPerDay: cigarettesPerDayNode
        }),
        undefined
      )
    }
    get keywordCell() {
      return this.getWord(0)
    }
  }

  class procedurePerformedNode extends abstractEventNode {}

  class nameChangedNode extends abstractEventNode {}

  class dateNode extends jtree.GrammarBackedNode {
    get keywordCell() {
      return this.getWord(0)
    }
    get monthCell() {
      return parseInt(this.getWord(1))
    }
    get dayCell() {
      return parseInt(this.getWord(2))
    }
    get yearCell() {
      return parseInt(this.getWord(3))
    }
  }

  class observationDateNode extends dateNode {}

  class timeNode extends jtree.GrammarBackedNode {
    get keywordCell() {
      return this.getWord(0)
    }
    get timeCell() {
      return this.getWord(1)
    }
  }

  class observationTimeNode extends timeNode {}

  class abstractProviderNode extends jtree.GrammarBackedNode {}

  class observationProviderNode extends abstractProviderNode {}

  class abstractLocationNode extends jtree.GrammarBackedNode {}

  class streetNode extends abstractLocationNode {
    get keywordCell() {
      return this.getWord(0)
    }
    get streetAddressCell() {
      return this.getWordsFrom(1)
    }
  }

  class cityNode extends abstractLocationNode {
    get keywordCell() {
      return this.getWord(0)
    }
    get cityCell() {
      return this.getWord(1)
    }
  }

  class countryNode extends abstractLocationNode {
    get keywordCell() {
      return this.getWord(0)
    }
    get countryCell() {
      return this.getWord(1)
    }
  }

  class stateNode extends abstractLocationNode {
    get keywordCell() {
      return this.getWord(0)
    }
    get stateCell() {
      return this.getWord(1)
    }
  }

  class zipCodeNode extends abstractLocationNode {
    get keywordCell() {
      return this.getWord(0)
    }
    get zipCell() {
      return this.getWord(1)
    }
  }

  class locationNode extends jtree.GrammarBackedNode {
    get locationKeywordCell() {
      return this.getWord(0)
    }
  }

  class pauNode extends jtree.GrammarBackedNode {
    createParser() {
      return new jtree.TreeNode.Parser(
        this._getBlobNodeCatchAllNodeType(),
        Object.assign(Object.assign({}, super.createParser()._getFirstWordMapAsObject()), {
          patientBorn: patientBornNode,
          patientDied: patientDiedNode,
          allergyTested: allergyTestedNode,
          conditionDiagnosed: conditionDiagnosedNode,
          drugPrescribed: drugPrescribedNode,
          smokingSurvey: smokingSurveyNode,
          procedurePerformed: procedurePerformedNode,
          nameChanged: nameChangedNode
        }),
        undefined
      )
    }
    getGrammarProgram() {
      if (!this._cachedGrammarProgramRoot)
        this._cachedGrammarProgramRoot = new jtree.GrammarProgram(`emailCell
phoneTypeCell
 enum mobile home office
nameCell
 extends locationCell
 examples Thomas John Earl Kai Lorne Ashley Kasey Sam Joe
sexCell
 enum Male Female
ethnicityCell
 highlightScope string
 enum Hawaiian Chinese Filipino Mexican Caucasian Portuguese Japanese Spanish Filipino Unknown Okinawan Marshallese PuertoRican Irish AmericanIndian Albanian Venezuela TrinidadandTobago German Scottish English Samoan
raceCell
 highlightScope keyword
 enum PacificIslander Asian Filipino Caucasian African NativeAmerican Unknown
locationCell
 extends stringCell
locationKeywordCell
 enum location
cityCell
 extends locationCell
 examples Tokyo Boston London Beijing Seattle
zipCell
 extends locationCell
 examples 90210 94110 02301
stateCell
 extends locationCell
 examples Hawaii Maine Montana California Florida Georgia
streetAddressCell
 extends locationCell
countryCell
 enum Canada USA China India Bolivia Egypt Japan Lebanon
keywordCell
floatCell
intCell
stringCell
 highlightScope string
smokingStatusCell
 enum yes never previousSmoker
 highlightScope constant.numeric
packsPerDayCell
 description How many packs per day do they currently smoke?
 extends floatCell
cigarettesPerDayCell
 description How many cigarettes per day do they currently smoke?
 extends intCell
yearCell
 extends intCell
dayCell
 extends intCell
monthCell
 extends intCell
timeCell
 highlightScope constant.numeric
 examples 2:41am 12:19pm 8:42pm 3:33am
abstractAddressNode
 abstract
 inScope abstractNameNode emailNode phoneNode
emergencyContactNode
 extends abstractAddressNode
 crux emergencyContact
contactInfoNode
 extends abstractAddressNode
 crux contactInfo
emailNode
 cells keywordCell emailCell
phoneNode
 crux phone
 inScope phoneNumberNode phoneTypeNode
phoneNumberNode
 crux number
phoneTypeNode
 cells keywordCell phoneTypeCell
 crux type
abstractNameNode
 abstract
 cells keywordCell nameCell
firstNameNode
 extends abstractNameNode
 crux firstName
lastNameNode
 extends abstractNameNode
 crux lastName
middleNameNode
 extends abstractNameNode
 crux middleName
nickNameNode
 extends abstractNameNode
 crux nickName
abstractDemographicConceptNode
 cells keywordCell
ethnicityNode
 crux ethnicity
 description A foreign key that refers to the standard concept identifier in the Standardized Vocabularies for the ethnicity of the person, belonging to the 'Ethnicity' vocabulary.
 extends abstractDemographicConceptNode
 catchAllCellType ethnicityCell
raceNode
 crux race
 extends abstractDemographicConceptNode
 catchAllCellType raceCell
 description A foreign key that refers to an identifier in the CONCEPT table for the unique race of the person, belonging to the 'Race' vocabulary.
sexNode
 crux sex
 extends abstractDemographicConceptNode
 cells keywordCell sexCell
abstractEventNode
 abstract
 inScope dateNode timeNode locationNode
patientBornNode
 extends abstractEventNode
 cells keywordCell
 crux patientBorn
 inScope abstractDemographicConceptNode abstractNameNode
patientDiedNode
 extends abstractEventNode
 cells keywordCell
 crux patientDied
allergyTestedNode
 extends abstractEventNode
 crux allergyTested
conditionDiagnosedNode
 extends abstractEventNode
 crux conditionDiagnosed
drugPrescribedNode
 extends abstractEventNode
 crux drugPrescribed
abstractObservationNode
 abstract 
 extends abstractEventNode
 inScope observationDateNode observationTimeNode observationProviderNode locationNode
smokingSurveyNode
 extends abstractObservationNode
 crux smokingSurvey
 cells keywordCell
 inScope smokesNode packsPerDayNode cigarettesPerDayNode
 example
  smokingSurvey
   smokes yes
   packsPerDay 1.5
procedurePerformedNode
 extends abstractEventNode
 crux procedurePerformed
nameChangedNode
 extends abstractEventNode
 crux nameChanged
dateNode
 cells keywordCell monthCell dayCell yearCell
 crux date
observationDateNode
 extends dateNode
 crux date
timeNode
 cells keywordCell timeCell
 crux time
observationTimeNode
 extends timeNode
 crux time
abstractProviderNode
 abstract
observationProviderNode
 extends abstractProviderNode
 crux provider
abstractLocationNode
 abstract
streetNode
 cells keywordCell
 extends abstractLocationNode
 catchAllCellType streetAddressCell
cityNode
 extends abstractLocationNode
 cells keywordCell cityCell
countryNode
 extends abstractLocationNode
 cells keywordCell countryCell
stateNode
 extends abstractLocationNode
 cells keywordCell stateCell
zipCodeNode
 extends abstractLocationNode
 cells keywordCell zipCell
locationNode
 inScope abstractLocationNode
 crux location
 cells locationKeywordCell
pauNode
 root
 description Medical Records for Planet Earth.
 inScope abstractEventNode
smokesNode
 cells keywordCell smokingStatusCell
 crux smokes
packsPerDayNode
 cells keywordCell packsPerDayCell
 crux packsPerDay
cigarettesPerDayNode
 cells keywordCell cigarettesPerDayCell
 crux cigarettesPerDay`)
      return this._cachedGrammarProgramRoot
    }
    static getNodeTypeMap() {
      return {
        abstractAddressNode: abstractAddressNode,
        emergencyContactNode: emergencyContactNode,
        contactInfoNode: contactInfoNode,
        emailNode: emailNode,
        phoneNode: phoneNode,
        phoneNumberNode: phoneNumberNode,
        phoneTypeNode: phoneTypeNode,
        abstractNameNode: abstractNameNode,
        firstNameNode: firstNameNode,
        lastNameNode: lastNameNode,
        middleNameNode: middleNameNode,
        nickNameNode: nickNameNode,
        abstractDemographicConceptNode: abstractDemographicConceptNode,
        ethnicityNode: ethnicityNode,
        raceNode: raceNode,
        sexNode: sexNode,
        abstractEventNode: abstractEventNode,
        patientBornNode: patientBornNode,
        patientDiedNode: patientDiedNode,
        allergyTestedNode: allergyTestedNode,
        conditionDiagnosedNode: conditionDiagnosedNode,
        drugPrescribedNode: drugPrescribedNode,
        abstractObservationNode: abstractObservationNode,
        smokingSurveyNode: smokingSurveyNode,
        procedurePerformedNode: procedurePerformedNode,
        nameChangedNode: nameChangedNode,
        dateNode: dateNode,
        observationDateNode: observationDateNode,
        timeNode: timeNode,
        observationTimeNode: observationTimeNode,
        abstractProviderNode: abstractProviderNode,
        observationProviderNode: observationProviderNode,
        abstractLocationNode: abstractLocationNode,
        streetNode: streetNode,
        cityNode: cityNode,
        countryNode: countryNode,
        stateNode: stateNode,
        zipCodeNode: zipCodeNode,
        locationNode: locationNode,
        pauNode: pauNode,
        smokesNode: smokesNode,
        packsPerDayNode: packsPerDayNode,
        cigarettesPerDayNode: cigarettesPerDayNode
      }
    }
  }

  class smokesNode extends jtree.GrammarBackedNode {
    get keywordCell() {
      return this.getWord(0)
    }
    get smokingStatusCell() {
      return this.getWord(1)
    }
  }

  class packsPerDayNode extends jtree.GrammarBackedNode {
    get keywordCell() {
      return this.getWord(0)
    }
    get packsPerDayCell() {
      return parseFloat(this.getWord(1))
    }
  }

  class cigarettesPerDayNode extends jtree.GrammarBackedNode {
    get keywordCell() {
      return this.getWord(0)
    }
    get cigarettesPerDayCell() {
      return parseInt(this.getWord(1))
    }
  }

  window.pauNode = pauNode
}
