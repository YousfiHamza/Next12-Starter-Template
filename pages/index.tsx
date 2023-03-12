import Head from 'next/head';
import Image from 'next/image';

import Card from '@/components/Elements/Card';

import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS 12 Starter Template</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div data-testid="vercel-link">
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
            data-testid="next-logo"
          />
        </div>

        <div className={styles.grid}>
          <Card
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            title="Docs"
            content="Find in-depth information about Next.js features and API."
          />
          <Card
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            title="Learn"
            content="Learn about Next.js in an interactive course with quizzes!"
          />
          <Card
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            title="Templates"
            content="Discover and deploy boilerplate example Next.js projects."
            variant="secondary"
          />
          <Card
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            title="Deploy"
            content="Instantly deploy your Next.js site to a shareable URL with Vercel."
          />
        </div>
      </main>
    </>
  );
}
