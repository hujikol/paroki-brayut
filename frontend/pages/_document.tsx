import Document, { Html, Head, Main, NextScript } from "next/document";
import { cn } from "@/lib/utils";

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='description'
            content='Website Resmi Paroki Brayut - Santo Yohanes Paulus II'
          />
        </Head>
        <body
          className={cn("min-h-screen font-sans antialiased", "bg-[#FBF8F4]")}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
