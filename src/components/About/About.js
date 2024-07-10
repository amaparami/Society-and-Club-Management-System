import React from 'react';
import "./About.css";
import images from '../../constants/images';

const About = () => {
  return (
    <section className='about section-p bg-dark' id = "about">
        <div className='container'>
            <div className='about-content grid text-center'>
                <div className = "content-left">
                    <img src = {images.about_main_img} alt = "" />
                </div>
                <div className='content-right'>
                    <div className='section-t'>
                        <h3>About Us</h3>
                    </div>
                    <p className = "text">Participating in these groups not only enhances one's academic journey but also promotes personal growth and leadership development. From academic societies that delve deeper into specific subjects to hobby-based clubs that provide a creative outlet, these organizations encourage collaboration, teamwork, and the sharing of knowledge. They often host workshops, events, competitions, and guest speaker sessions, offering members valuable exposure to real-world applications of their interests.</p>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default About