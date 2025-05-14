//************** Component
import Specialties from '../../components/specialties/specialties'; 
import Cursor from '../../components/cursor/cusorAnimtion';



//*************** css 
import '../home/home.scss'

// images
import profile from '../../assets/images/sagar-profile-img.jpg';
import Experience from '../../components/experience/experience';


const Home = () => {
  return (
    <>
  <section className="banner">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4 banner-port">
                    <div>
                        <img src={profile} alt="Sagar Ruhela" title="Sagar ruhela"/>
                        <h2>Sagar Ruhela</h2>
                        <p>Web Designer</p>
                    </div>
                </div>
                <div className="col-md-8 banner-text background-2nd">
                    <div className='cursor-in'>
                        <h2> <span className="bottom-line"> Designing </span> Dynamic Web Experiences 
                         
                        </h2>
                        <p>With 4 years of experience, I am a Creative Web Designer adept at converting UI/UX designs into responsive websites. I possess the skills to interpret clean, defined codes from visual designs. I constantly refine workflows and design solutions using AI tools and building my own basic functionalities. A self-motivated dynamic thinker, I hope to join a progressive development team to contribute my ideas and code.</p>
                        <Cursor />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Specialties/>
    <Experience/>
    </>
  );
}

export default Home;
