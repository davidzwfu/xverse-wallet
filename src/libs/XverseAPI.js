async function getInscriptions(address, pagination = {}) {
  const url = new URL(`https://api.xverse.app/v1/address/${address}/ordinal-utxo`)
  if (pagination)
    url.search = new URLSearchParams(pagination)
  const res = await fetch(url)
  try {
    const json = await res.json()
    return {
      ...json,
      inscriptions: json.results.flatMap(utxo => utxo.inscriptions),
    }
  }
  catch {
    return {
      results: [],
      inscriptions: [],
      total: 0,
    }
  }
}

export async function getInscription(address, inscriptionId) {
  const res = await fetch(`https://api.xverse.app/v1/address/${address}/ordinals/inscriptions/${inscriptionId}`)
  try {
    const json = await res.json()
    return json
  }
  catch {
    return {}
  }
}

const XverseAPI = {
  getInscriptions,
  getInscription,
}

export default XverseAPI