require("dotenv").config();
import Head from "next/head";

import Response from "../Response";
import Header from "../components/Header";
import { useRouter } from "next/router";

import SearchResults from "../components/SearchResults";

function Search({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = true;
  const { term } = context.query;
  const startIndex = Number(context.query.start) || "0";
  //   console.log(process.env.API_KEY, process.env.CONTEXT_KEY);
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${term}&start=${startIndex}`
      ).then((res) => res.json());
  return {
    props: { results: data },
  };
}
