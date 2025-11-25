import HeroSection from './HeroSection'
import Navbar from './Navbar'

const Section1 = ({users}) => {
  return (
    <div className=' w-full h-screen'>
        <Navbar/>
        <HeroSection users={users}/>
    </div>
  )
}

export default Section1