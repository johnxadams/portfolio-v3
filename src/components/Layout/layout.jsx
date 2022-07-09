// components
import { Landingpage } from "./Landingpage/Landingpage"
import GifPage from "./GifPage/GifPage"

export const Layout = () => {
    return (
        <>
            <section className="landing-page">
                <Landingpage/> 
            </section>
            <section className="div2">
                <GifPage/>
            </section>
            <section className="div3">three</section>
            <section className="div4">four</section>
            <section className="div5">five</section>

           
        </>
    )
}