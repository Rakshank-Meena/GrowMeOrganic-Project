import { Suspense } from "react"
import Navbar from "./Navbar"

const Layout = ({ children }: any) => {
    return (
        <div className="content ">
            <Suspense fallback={<></>}>
                <Navbar />
            </Suspense>
            {children}
        </div>
    )
}

export default Layout