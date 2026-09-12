import type {Metadata} from "next"; import "./globals.css"; import Navbar from "@/components/Navbar"; import Footer from "@/components/Footer"
export const metadata:Metadata={title:"VAYREN DIGITAL — AI-Powered Digital Agency",description:"We build websites, AI-powered creative experiences and digital marketing systems that help businesses grow.",metadataBase:new URL("https://vayren-digital.vercel.app")}
export default function RootLayout({children}:{children:React.ReactNode}){return <><Navbar/><main>{children}</main><Footer/></>}
