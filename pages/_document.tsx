import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
          <meta name="description" content="Joki Coding | Joki Pemrograman | Joki Tugas | Tugas Umum. 💻 Expert in Coding & IT Solutions. 🚀 Custom Projects | General Tasks Made Easy. 📄 Real-time Quiz Assistance. 📞 +62 851‑7442‑4245" />
          <meta name="robots" content="index, follow" />
          <meta name="tags" content="joki coding, joki pemrograman, joki tugas, tugas umum, coding, IT solutions, custom projects, quiz assistance, expert, jasa pemrograman" />
        <link
          rel="shortcut icon"
          href="/icon.png"
          type="image/x-icon"
        />
      </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

export default Document
