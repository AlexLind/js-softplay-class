// TODO: Create a class in this file to contain all of the logic for this exercise

class Softplay {
  constructor(numAdults, numChildren) {
    this.numAdults = numAdults
    this.numChildren = numChildren
  }

  enter(numAdults, numChildren) {
    const shouldAdd = numAdults >= numChildren
    if (shouldAdd) {
      this.numAdults = this.numAdults + numAdults
      this.numChildren = this.numChildren + numChildren
      return true
    }
    return false
  }

  leave(numAdults, numChildren) {
    const childAlone = numChildren > 0 && numAdults === 0
    const notEnoughAdultsInCenter =
      this.numAdults - numAdults < this.numChildren - numChildren
    const childAccompaniedByAtleastOneAdult = numAdults >= numChildren
    const canLeave =
      this.numAdults + this.numChildren >= numAdults + numChildren

    if (
      childAlone ||
      notEnoughAdultsInCenter ||
      !childAccompaniedByAtleastOneAdult ||
      !canLeave
    ) {
      return false
    }
    this.numAdults = this.numAdults - numAdults
    this.numChildren = this.numChildren - numChildren
    return true
  }

  occupancy() {
    return {
      adults: this.numAdults,
      children: this.numChildren
    }
  }
}

// TODO: Change the undefined value below to the name of your class
module.exports = Softplay
