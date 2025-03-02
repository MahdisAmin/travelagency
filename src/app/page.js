import Layout from "@/components/layout/Layout";
import Main from "@/components/templates/Main";
import { serverFetch } from "@/config/services/http";

export default async function Home({searchParams}) {
    const tours = await serverFetch("tour", searchParams, {
      cache: "no-store",
    });
    console.log("Search Params:", searchParams);

  return (
    
    <Main tours={tours} />
  );
}
