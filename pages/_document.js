import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="/vendor/font-awesome-pro-v6-6.2.0/css/all.min.css"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        /> */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400;600;700&display=swap"
          rel="stylesheet"
        ></link> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        ></link>
        <meta charset="utf-8" />
        <title>The Golf House</title>
        <meta
          name="description"
          content="Tại The Golf House Vietnam, tạo nên môi trường giúp học viên trải nghiệm việc học và chơi Golf dễ dàng và hiệu quả nhất là ưu tiên hàng đầu của chúng tôi"
        />
        <meta
          property="zalo-platform-site-verification"
          content="NlFW6QhNR28knTmYxiS92XNKfJtvfNvbD38"
        ></meta>
        <meta name="theme-color" content="#000000"></meta>
        <meta name="image" content="/images/Logo/Logo12.png"></meta>
        <meta
          name="description"
          content="Tại The Golf House Vietnam, tạo nên môi trường giúp học viên trải nghiệm việc học và chơi Golf dễ dàng và hiệu quả nhất là ưu tiên hàng đầu của chúng tôi"
        ></meta>
        <meta name="og:image" content="/images/Logo/Logo12.png"></meta>
        <meta name="og:title" content="The Golf House"></meta>
        <meta
          name="og:description"
          content="Tại The Golf House Vietnam, tạo nên môi trường giúp học viên trải nghiệm việc học và chơi Golf dễ dàng và hiệu quả nhất là ưu tiên hàng đầu của chúng tôi"
        />
        <link href="/images/Logo/Logo12.png" rel="icon" />
        <link href="/images/Logo/Logo12.png" rel="apple-touch-icon"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
