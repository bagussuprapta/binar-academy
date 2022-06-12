import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Contoh.module.css";

export default function Contoh({ firmness, item, growth_time, id, flavors }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{firmness.name}</title>
        <meta name="description" content={item.name} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{firmness.name}</h1>

        <p>{item.name}</p>
        <p>{growth_time}</p>
        <p>{id}</p>
        {flavors.map((value) => {
          //console.log(value);
          return (<p>{value.flavor.name}</p>);
        })}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://pokeapi.co/api/v2/berry");

  const posts = await response.json();
  const arr = [{ posts }];
  //const paths = [];
  const test = arr[0].posts.results;
  console.log(test);
  const paths = test.map((id, index) => ({
    params: {
      id: index.toString(),
    },
  }));
  console.log(paths);

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch("https://pokeapi.co/api/v2/berry/" + params.id);
  const post = await response.json();

  return {
    props: {
      ...post,
    },
  };
}
