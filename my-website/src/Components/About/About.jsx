import React from 'react';
import './About.css'
import './VerticalLine.css'; // Import CSS file for styling
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


//Component for a vertical line
const VerticalLine = ({ height }) => {
  return (
    <div className='vertical-line' style={{ height: height }}></div>
  );
}

//Component for the About section
const About = () => {

    // Settings for the slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,   //Display 3 items on a tables
        slidesToScroll: 2, //Scroll 2 items at a time

        responsive: [
            {
                breakpoint: 768, 
                seettings: {
                    slidesToShow: 3, // Display 3 items on tablets
                    slidesToScroll: 3, // Scroll 3 items at a time
                }
            },
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 2, // Display 2 items on mobile devices
                    slidesToScroll: 2, // Scroll 2 items at a time
                }
            }
        ]
    };

    return (
        <section className='about-container' id='about-container'>
            <h4>The Person behind the work</h4>
            <hr />
            <h6>Lehlohonolo Khoathane</h6>
            <div className='about-content'>
                <p className='about-heading'>Aspiring Full Stack Software Developer <VerticalLine height='1em' /> Aspiring Data Scientist</p>
                <div className='about'>
                    <img className='profile-picture' src='./assets/images/lehlohonolo.jpg' alt='my profile' />
                    <div className="about-info">
                        <p className='about-description'>I'm a versatile aspiring full-stack software developer with a solid background in <span className='degree'>BSc Computer Science and
                            Statistics.</span> Equipped with a degree in these fields and <span>one year of experience</span> in software development, I bring a unique blend of analytical thinking and technical
                            prowess to projects. Proficient in diverse programming languages and technologies, I excel in crafting end-to-end solutions, seamlessly integrating front-end and back-end 
                            development. My passion lies in delivering products that not only meet but exceed client expectations.</p>
                    </div>
                </div>
            </div>
            <div className='skills-container'>
                <h1>Tech Expertise</h1>
                <hr className='horizontal-line'/>
                <div className='skills-subheading'>
                    <p>I bring dynamic set of skills to propel projects forward. Dive deeper into my <span>technological prowess.</span></p>
                </div>
                <div className='skills-development'>
                    <h2>Development</h2>
                    <div className="skills-dev">
                        <div className="skills-content-items">
                            <Slider {...settings}>
                            {/* Map through the data and create slider items */}
                            {dataT.map((d) => (
                                <div className="skils-item">
                                    <div className="skills-image">
                                        <img src={d.img} alt="" />
                                    </div>
                                    <div>
                                        <h4>{d.name}</h4>
                                    </div>
                                </div>
                            ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className='skills-data'>
                    <h2>Data Analysis</h2>
                    <div className="skills-data-analysis">
                        <div className="skills-content-items">
                            <Slider {...settings}>
                            {/* Map through the data and create slider items */}
                            {dataD.map((d) => (
                                <div className="skils-item">
                                    <div className="skills-image">
                                        <img src={d.img} alt="" />
                                    </div>
                                    <div>
                                        <h4>{d.name}</h4>
                                    </div>
                                </div>
                            ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


// Data for technology expertise
const dataT = [
    {
        name: `Node.Js`,
        img: `./Assets/Images/nodejs.png`
    },
    {
        name: `Git`,
        img: `./Assets/Images/git.png`
    },
    {
        name: `Vs Code`,
        img: `./Assets/Images/vscode.png`
    },
    {
        name: `Flutter`,
        img: `./Assets/Images/flutter.png`
    },
    {
        name: `TailWind`,
        img: `./Assets/Images/tailwind.png`
    },
    {
        name: `React.Js`,
        img: `./Assets/Images/react.png`
    },
    {
        name: `Django`,
        img: `./Assets/Images/django-py.png`
    },
    {
        name: `Figma`,
        img: `./Assets/Images/figma.png`
    },
    {
        name: `JavaScript`,
        img: `./Assets/Images/Java.png`
    },
    {
        name: `Java`,
        img: `./Assets/Images/javas.png`
    },
    {
        name: `Html & CSS`,
        img: `./Assets/Images/html.png`
    },
    {
        name: `C++`,
        img: `./Assets/Images/C++.png`
    }
]

// Data for data analysis expertise
const dataD = [
    {
        name: `MongoDb`,
        img: `./assets/images/mongodb.png`
    },
    {
        name: `R`,
        img: `./asstes/images/r-learn.png`
    },
    {
        name: `SPSS`,
        img: `./assets/images/SPSS.webp`
    },
    {
        name: `Excel`,
        img: `./assets/images/excel.png`
    },
    {
        name: `Power BI`,
        img: `./assets/images/powerBI.png`
    },
    {
        name: `Scikit-Learn`,
        img: `./assets/images/scikit-learn.png`
    },
    {
        name: `SQL/NoSql`,
        img: `./assets/images/sql.png`
    },
    {
        name:`Python`,
        img: `./assets/images/python-logo.png`
    }
]


export default About;
