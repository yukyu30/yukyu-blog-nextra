import Head from 'next/head';
import type { NextraThemeLayoutProps } from 'nextra';
import ContentsList from './components/ContentsList';

export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  const { title, frontMatter, headings } = pageOpts;
  //mdxを読み込んだ時のLayout
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="og:image" content={frontMatter.image} />
      </Head>
      <ContentsList headings={headings} />
      <div style={{ border: '1px solid' }}>{children}</div>
    </div>
  );
}
