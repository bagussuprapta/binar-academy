import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Contoh.module.css";

export default function Contoh({ title, body }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={body} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.description}>{body}</p>
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

/*
  Kedua method di bawah biasa digunakan ketika data yang kamu tampilkan jarang mengalami
  perubahan. Sangat disarankan untuk menggunakan metode ini misalnya jika kamu ingin
  membuat 1 halaman static. Karena dengan menggunakan metode ini, halaman static mu bisa
  jadi dinamis di background, jadi secara performa lebih kenceng

  Buat pakai method ini, kamu hanya perlu membuat fungsi yang namanya getStaticProps, kalo misal
  paths dari halaman yang ingin dibuat itu digenerate secara terprogram, kamu bisa nambahin metode getStaticPaths
*/

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const paths = posts.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + params.id
  );
  const post = await response.json();

  return {
    props: {
      ...post,
    },
  };
}
