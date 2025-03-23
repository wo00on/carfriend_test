import HeroSection from '../components/HeroSection'
import FAQSection from '../components/FAQSection'
import RepairCases from '../components/RepairCases'
import NaverMap from '../components/NaverMap'
import EventSlider from '../components/EventSlider'
import CustomerReviews from '../components/CustomerReviews'
import SolutionCard from '../components/SolutionCard'
import ImageSlider from '../components/ImageSlider'
import FloatingButton from './FloatingButton'


const Main = () => {
    return(<>
        <HeroSection />
        <FAQSection />
        <SolutionCard/>
        <ImageSlider/>
        {/* <EventSlider/> */}
        <CustomerReviews/>
        <NaverMap />
        <FloatingButton/>
        {/*버튼*/}
        
      
     
        
        {/* <RepairCases /> */}
        </>)
}

export default Main;