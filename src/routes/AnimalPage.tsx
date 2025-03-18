
import { useParams } from 'react-router-dom'

export default function AnimalPage() {
  const Params = useParams();
  return (
    <div>
      <h1>AnimalPage</h1>
      <p>Animals: {Params.animalsid}</p>
    </div>
  )
}
