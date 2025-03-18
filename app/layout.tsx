// import "@/node_modules/react-modal-video/css/modal-video.css"
import "@/public/assets/css/style.css"
import "@/public/assets/css/second/style.css"
import 'swiper/css'
import "@/public/assets/css/second/aos.css";
import "@/public/assets/css/second/slick.min.css";
import 'rc-slider/assets/index.css';
import './globals.css'
import '@/public/assets/css/spacing.scss'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';

export const metadata = {
  title: 'PMUGO',
  description: 'Projet de Mobilité Urbaine du Grand Ouaga(PMUGO)',
  // icons: {
  //     icon: [
  //         {
  //             url: "/assets/images/logo.png",
  //         },
  //     ],
  // },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" >
      {/*<head>*/}
      {/*    <link rel="icon" href="/assets/images/logo.png" type="image/png" sizes="32x32" />*/}
      {/*</head>*/}
      <body>{children}</body>
      </html>
  )
}
