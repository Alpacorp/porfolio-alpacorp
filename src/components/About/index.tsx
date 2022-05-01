import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGit,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I consider myself a very dedicated and committed person not only
            with my family, but also with my professional, work and academic
            obligations day by day. I give the best of myself in each task so
            that it is evidenced in facts and not only in these written words.
          </p>
          <p>
            I am currently a Frontend developer working with technologies such
            as{' '}
            <strong>
              React, TypeScript, Javascript, Node, HTML, CSS and Wordpress,
            </strong>{' '}
            as well as with technologies that have to do with the consumption of
            <strong> REST APIS, REDUX </strong>and design frameworks such as{' '}
            <strong>
              Bootstrap, Styled Components and UI libraries. as MaterialUI.
            </strong>{' '}
            Also work with version controller how <strong>GIT.</strong>
          </p>
          <p>
            Also added to the above, I have knowledge in digital marketing,
            advertising in different social networks such as{' '}
            <strong>
              Facebook, Twitter, LinkedIn, Snapchat and Instagram, as well as
              Google ADS
            </strong>{' '}
            where I control and execute budgets based on the fulfillment of the
            objectives of the companies. brands.
          </p>
        </div>
        <div className="stage-cub-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#28A4D9" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGit} color="#DD0031" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" active />
    </>
  )
}

export default About
