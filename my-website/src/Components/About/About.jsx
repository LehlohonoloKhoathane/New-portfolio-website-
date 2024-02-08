import React from 'react';
import './About.css'
import './VerticalLine.css'; // Import CSS file for styling
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'




const VerticalLine = ({ height }) => {
  return (
    <div className='vertical-line' style={{ height: height }}></div>
  );
}

const About = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <section className='about-container'>
            <h4>The Person behind the work</h4>
            <hr />
            <h6>Lehlohonolo Khoathane</h6>
            <div className='about-content'>
                <p>Aspiring Full Stack Software Developer <VerticalLine height='1em' /> Aspiring Data Scientist</p>
                <div className='about'>
                    <img className='profile-picture' src='./assets/images/lehlohonolo.jpg' alt='my profile' />
                    <div className="about-info">
                        <p>I'm a versatile aspiring full-stack software developer with a solid background in <span className='degree'>BSc Computer Science and
                            Statistics.</span> Equipped with a degree in these fields, I bring a unique blend of analytical thinking and technical
                            prowess to projects. Proficient in diverse programming languages and technologies, I excel in crafting end-to-
                            end solutions, seamlessly integrating front-end and back-end development. My passion lies in delivering
                            products that not only meet but exceed client expectations.</p>
                    </div>
                </div>
            </div>
            <div className='skills-container'>
                <h1>Tech Expertise</h1>
                <hr />
                <p>I bring dynamic set of skills to propel projects forward. Dive deeper into my <span>technological prowess.</span></p>
                <div className='skills-development'>
                    <h2>Development</h2>
                    
                </div>
                <div className='skills-data'>
                    <h2>Data Analysis</h2>
                    <div className="skills-development">
                <div className="service-content-items">
                    <Slider {...settings}>
                    {dataD.map((d) => (
                        <div className="service-item">
                            <div className="service-image">
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

const dataD = [
    {
        name: `MongoDb`,
        img: `./assets/images/mongodb.png`
    },
    {
        name: `R`,
        img: `./asstes/Images/r-learn.png`
    },
    {
        name: `SPSS`,
        img: `./Assets/Images/SPSS.png`
    },
    {
        name: `Excel`,
        img: `./Assets/Images/excel.png`
    },
    {
        name: `Power BI`,
        img: `./Assets/Images/powerBI.png`
    },
    {
        name: `Scikit-Learn`,
        img: `./Assets/Images/scikit-learn.png`
    },
    {
        name: `SQL/NoSql`,
        img: `./Assets/Images/sql.png`
    },
    {
        name:`Python`,
        img: `./Assets/Images/python.png`
    }
]


export default About;
