import { Landingpage } from "./Landingpage/Landingpage"

export const GridLayout = () => {
    return (
        <>
            <section className="body-layout">
                <Landingpage/>
                <div className="div2">two</div>
                <div className="div3">three</div>
                <div className="div4">four</div>
                <div className="div5">five</div>

            </section>
        </>
    )
}