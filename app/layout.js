import "@/node_modules/react-modal-video/css/modal-video.css"
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
    title: 'STB',
    description: 'Société de Transport du Burkina',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" >
        <body>{children}</body>
        </html>
    )
}
