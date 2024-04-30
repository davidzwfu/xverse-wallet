import { Link } from 'react-router-dom'

function Results({ address, results }) {
  return (
    <div className="results">
        <p className="results__title">Results</p>
        {results.map(result => {
          return (
            <Link key={result.id} className="results-item"
              to={`address/${address}/ordinals/inscriptions/${result.id}`}>
              <p className="results-item__text">Inscription {result.id}</p>
              <svg width="9" height="16" viewBox="0 0 9 16">
                <path d="M1 1L8 8L1 15" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          )
        })}
      </div>
  )
}

export default Results
