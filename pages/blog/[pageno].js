import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: { pageno: curElem.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageno;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const pageno = ({ data }) => {
  const router = useRouter();
  const pageNumber = router.query.pageno;
  return (
    <div>
      <NavBar />
      <h1>Hello This is blog</h1>
      {/* {data.map((data) => {
        return ( */}
      <div key={data.id}>
        <h3>{data.id}</h3>
        <h4>{data.title}</h4>
        <p>{data.body}</p>
      </div>
      {/* );
      })} */}
    </div>
  );
};

export default pageno;
