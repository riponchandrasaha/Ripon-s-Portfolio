
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.jpg';
import profileImage1 from '../../assets/profile3.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-500 mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-2xl sm:text-5xl md:text-2xl font-bold text-red-700 mb-4 leading-tight">
            Ripon Chandra Saha
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Software Engineer',
                'Fullstack Developer',


                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
           {/*  <ReactTypingEffect
              text={[

                'I am a passionate full-stack web developer with strong foundational knowledge in building modern and responsive web applications.',
' Proficient in the MERN stack (MongoDB, Express.js, React, Node.js)',

'I have completed several full-stack projects that demonstrate my ability to develop both client-side and server-side applications.',
'I’m eager to contribute to real-world development teams and grow as a software engineer by solving meaningful problems with clean, efficient code.'



              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            /> */}
            I am a passionate full-stack web developer with strong foundational knowledge in building modern and responsive web applications.
            Proficient in the MERN stack (MongoDB, Express.js, React, Node.js), I have completed several full-stack projects that demonstrate my ability to develop both client-side and server-side applications. I’m eager to contribute to real-world development teams and grow as a software engineer by solving meaningful problems with clean, efficient code.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1WEoyupQXmZrv7PI1s36l_PkIYwmq6r2S/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dash btn-secondary bg-center "
          /* style={{
            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
          }} */
          >
            Download Resume
          </a>

        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Ripon Chandra Saha"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>

      <div className='sm: mt-16'>

        <Tilt
          className=" border-4 border-purple-700 rounded-lg"
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.5}
          transitionSpeed={1000}
          gyroscope={true}
        >
          <img className=' mt-5 rounded-lg' src={profileImage1} alt="" />
          <h3 className=' text-purple-700 text-2xl text-center'>Convocation 2025</h3>
        </Tilt>
        {/*   <button href="https://leetcode.com/problems/implement-stack-using-queues/description/" rel="noopener noreferrer" className="btn btn-dash btn-secondary">Download CV</button> */}

      </div>


      {/*  */}


    </section>
  );
};

export default About;
