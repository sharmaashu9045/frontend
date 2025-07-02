import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi"; 

const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p> The only thing we're serious about is food.</p>
                </div>
                <p className="mid">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quisquam voluptas velit aspernatur ipsa facilis eligendi corporis numquam.
                     Omnis molestias, officiis eaque quo tenetur, impedit similique cupiditate, debitis provident magnam vel! Doloremque vel rem nihil, quidem 
                     nesciunt quaerat! Quasi, sed atque quam reiciendis praesentium placeat.
                </p>
                <Link to={"/"}>
                Explore Menu{" "}
                 <span>
                    <HiOutlineArrowNarrowRight className="icon" />
                    </span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About;