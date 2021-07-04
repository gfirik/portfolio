import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link 
                href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Montserrat&display=swap" 
                rel="stylesheet" 
            />
        </Head>
        <body className="bg-gradient-to-r from-steel-200 to-gray-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument