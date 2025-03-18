import {Link, Outlet} from "react-router-dom"

export default function ListPage() {
  const animals = ["Lion", "hamster", "Tiger","Cat"]
  return (
    <div>
      <h1>ListPage</h1>
      <Link to="/">Home</Link> 
      <ul>
        {animals.map((animal) => (
          <li key={animal}>
            <Link to={animal.toString()}>{animal}</Link>
          </li>
        ))}
      </ul>
        <Outlet/>
    </div>
  )
}
