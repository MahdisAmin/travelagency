import { serverFetch } from "@/config/services/http";
import Cards from "../elements/Cards";

async function Tours({ searchParams }) {
  const tours = await serverFetch("tour", searchParams, { cache: "no-store" });
   console.log("Search Params:", searchParams);

  if (!tours.length) return <p>نتیجه ای یافت نشد</p>;

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
