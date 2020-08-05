export default {
  async index(numOfResults = 12) {
    const res = await fetch(`https://randomuser.me/api/?results=${numOfResults}`)

    return await res.json()
  }
}
