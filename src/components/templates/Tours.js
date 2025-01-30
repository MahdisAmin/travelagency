import Cards from "../elements/Cards";

export async function getTours() {
  const res = await fetch(`http://localhost:6500/tour`, { cache: "no-store" });
  const tours = await res.json();
  return tours;
}

async function Tours() {
  const tours = await getTours();
  return (
    <div className="container mx-auto">
      <h1 className="mr-11 md:mr-30 text-[22px] font-semibold">همه تورها</h1>
      <div className="m-4 flex flex-col justify-center items-center md:flex-row md:items-start md:flex-wrap">
        {tours &&
          tours.map((tourList) => (
            <div key={tourList.id}>
              <Cards tourList={tourList} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Tours;
