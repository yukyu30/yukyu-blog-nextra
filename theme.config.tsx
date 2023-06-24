const config = {
  footer: <p>MIT 2023 © Nextra.</p>,
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  siteName: 'yukyu net',
  readMore: 'Read More →',
  postFooter: null,
  darkMode: false,
  navs: [],
};

export default config;
