import { Hero } from "./hero";
import { Services } from "../utils/coreServices";
import { ImageSlider } from "../utils/imageSlider";
import { CTASection } from "../utils/CTAsection";
import { WhyChooseUs } from "../utils/whyChooseUs";


export default function Home(){
    return(
        <>
            <Hero/>
            <ImageSlider/>
            <Services/>
            <WhyChooseUs/>
            <CTASection/>
        </>
    )
}