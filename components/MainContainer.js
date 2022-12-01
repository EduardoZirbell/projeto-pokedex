import Navbar from "./Navbar"
import Footer from '../components/Footer'

export default function MainContainer( {children} ) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </>
    )
}