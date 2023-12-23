/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";
const HomeInfo = ({ currentStage }) => {

    if (currentStage === 1)
        return (
            <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                Hi, I am
                <span className='font-semibold mx-2 text-white'>Ajay Singh</span>
                👋
                <br />
                A Software developer from Bharat
            </h1>
        );

    if (currentStage === 2) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    not worked with anyone company till yet <br /> but know how to work in team
                </p>

                <Link to='/about' className='neo-brutalism-white neo-btn'>
                    Learn more
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 3) {
        return (
            <div className='info-box'>
                <p className='font-medium text-center sm:text-xl'>
                    Done multiple project in hackathons,  <br /> collage clubs within Team
                </p>

                <Link to='/projects' className='neo-brutalism-white neo-btn'>
                    Visit my portfolio
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 4) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Need a project done or looking for a dev? <br /> I am just a few keystrokes away
                </p>

                <Link to='/contact' className='neo-brutalism-white neo-btn'>
                    Lets talk
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    return null;
};

export default HomeInfo;
