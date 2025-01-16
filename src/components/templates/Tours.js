import Cards from "../elements/Cards";

export async function getTours() {
  const res = await fetch(`http://localhost:6500/tour`, { cache: "no-store" });
  const tours = await res.json();
  return tours;
}

async function Tours() {
  const tours = await getTours();
    return <div>{tours.map(tourList => (<ul>
        <li key={tourList.id}><Cards tourList={tourList} /></li>
    </ul>)) }</div>;
}

export default Tours;
