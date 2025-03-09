import { serverFetch } from "@/config/services/http";
import Cards from "../elements/Cards";

async function Tours({ tours }) {
  if (!tours.length) return <p className="flex items-center mr-10">نتیجه ای یافت نشد</p>;

  return (
    <div className="">
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
