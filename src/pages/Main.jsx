import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './Main.css'
import Header from '@/components/Header'
import Results from '@/components/Results'
import Spinner from '@/components/Spinner'
import XverseAPI from '@/libs/XverseAPI'

function Main() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [results, setResults] = useState([])
  const [address, setAddress] = useState(searchParams.get('address') ?? '')
  const [pagination, setPagination] = useState({ offset: 0, total: 0 })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getOrdinals(address)
  }, [])

  async function getOrdinals() {
    if (!address) return

    setIsLoading(true)
    setSearchParams({ address })
    const res = await XverseAPI.getInscriptions(address)
    setPagination({
      offset: res.results.length,
      total: res.total,
    })
    setResults(res.inscriptions)
    setIsLoading(false)
  }

  async function loadMore() {
    setIsLoading(true)
    const res = await XverseAPI.getInscriptions(searchParams.get('address'), pagination)
    setPagination({
      offset: pagination.offset + res.results.length,
      total: res.total,
    })
    setResults([...results, ...res.inscriptions])
    setIsLoading(false)
  }

  return (
    <>
      <Header text={'Ordinal Inscription Lookup'} />
      <div className="lookup">
        <p className="lookup__label">Owner Bitcoin Address:</p>
        <input type="text" className="lookup__input" value={address} onChange={e => setAddress(e.target.value)} />
        <button className="lookup__btn" onClick={() => getOrdinals()}>
          {isLoading && <Spinner size={18} />}
          <span>Look up</span>
        </button>
      </div>
      <Results address={address} results={results} />
      <div className="footer">
        {pagination.total > pagination.offset &&
          <button className="footer__btn" onClick={() => loadMore()}>
            {isLoading && <Spinner size={18} />}
            <span>Load more</span>
          </button>
        }
      </div>
    </>
  )
}

export default Main
