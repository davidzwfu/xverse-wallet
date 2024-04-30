import { useLoaderData } from 'react-router-dom'
import './Inscription.css'
import Header from '@/components/Header'
import Details from '@/components/Details'
import Attributes from '@/components/Attributes'
import XverseAPI from '@/libs/XverseAPI'

export async function loader({ params }) {
  return await XverseAPI.getInscription(params.address, params.inscriptionId)
}

function Inscription() {
  const inscription = useLoaderData()

  return (
    <>
      <Header text={'Details'} showBack={true} />
      <iframe className="content" src={`https://ord.xverse.app/content/${inscription.id}`}></iframe>
      <Details inscription={inscription} />
      <Attributes inscription={inscription} />
    </>
  )
}

export default Inscription
