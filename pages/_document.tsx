import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link 
                href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Montserrat&display=swap" 
                rel="stylesheet" 
            />
        </Head>
        <body className="mb-4 text-black bg-fixed bg-gradient-to-r from-white2 to-white font-montserrat dark:from-black dark:to-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument