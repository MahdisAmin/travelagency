import Cards from "../elements/Cards";

export async function getTours() {
  const res = await fetch(`http://localhost:6500/tour`, { cache: "no-store" });
  const tours = await res.json();
  return tours;
}

async function Tours() {
  const tours = await getTours();
  return (
    <>
      <h1 className="mr-11 md:mr-36 text-[22px] font-semibold">همه تورها</h1>
      <div className=" m-4 flex flex-col justify-center  items-center md:flex-row  md:items-start md:flex-wrap">
        {tours.map((tourList) => (
          <ul key={tourList.id}>
            <li>
              <Cards tourList={tourList} />
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Tours;
