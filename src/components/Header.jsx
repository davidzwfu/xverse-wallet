import { useNavigate } from 'react-router-dom'

function Header({ text, showBack }) {
  const navigate = useNavigate()

  return (
    <div className="header">
      {showBack &&
        <button onClick={() => navigate(-1)} className="header__back">
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 1L1.5 8L8.5 15" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      }
      <h1 className="header__title">{text}</h1>
    </div>
  )
}

export default Header
