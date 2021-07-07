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
        <body className="grid w-screen h-full text-black bg-gradient-to-r from-white2 to-white3 place-items-center font-montserrat">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument