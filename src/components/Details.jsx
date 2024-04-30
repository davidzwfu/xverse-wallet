function Details({ inscription }) {
  return (
    <div className="details">
      <h2 className="details__title">Inscription {inscription.number}</h2>
      <div className="details__row">
        <p className="details__label">Inscription ID</p>
        <p className="details__text">{inscription.id}</p>
      </div>
      <div className="details__row">
        <p className="details__label">Owner Address</p>
        <p className="details__text">{inscription.address}</p>
      </div>
    </div>
  )
}

export default Details
