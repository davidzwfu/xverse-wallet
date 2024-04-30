function Attributes({ inscription }) {
  const showAttributes = [
    { label: 'Output Value', text: inscription.value },
    { label: 'Content Type', text: inscription.content_type },
    { label: 'Content Length', text: `${inscription.content_length} bytes` },
    { label: 'Location', text: inscription.location },
    { label: 'Genesis Transaction', text: inscription.genesis_tx_id },
  ]

  return (
    <div className="attributes">
      <h2 className="attributes__title">Attributes</h2>
      {showAttributes.map(attribute => {
        return (
          <div className="attributes__row" key={attribute.label}>
            <p className="attributes__label">{attribute.label}</p>
            <div className="attributes__textbox">
              <p className="attributes__text" title={attribute.text}>{attribute.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Attributes
