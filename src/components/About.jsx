import React from 'react'
import '../stylesheets/about.css'

const About = () => {
  return (
   <div className='about'>
    <h2 className='about_heading'>About Me</h2>
    <p>
        <ul>
            <li>
            Hey there! I'm <b>Aditya Raj</b>, a passionate <b>MERN Stack Developer</b> and <b>UI Designer</b> with a strong eye for detail and a love for building scalable, high-performance web applications.
            </li>
            <li>
            With expertise in <b>HTML, CSS, JavaScript, TypeScript, Tailwind CSS, MongoDB, PostgreSQL, Prisma ORM, Express, Node.js, and Next.js</b>, I create seamless digital experiences that blend functionality with aesthetics.
            </li>
            <li>
            Beyond development, I have a deep understanding of <b>UI/UX design</b>, ensuring that the applications I build are not just efficient but also visually compelling and user-friendly. I believe in the power of clean code, minimal design, and innovative solutions to enhance user experience.
            </li>
            <li>
            Have an idea, want to collaborate, or have an internship opportunity? Feel free to message me! I'm always excited to connect and work on great projects. Contact me
            </li>
        </ul>
    </p>
   </div>
  )
}

export default About
