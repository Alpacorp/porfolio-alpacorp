import { useEffect, useState, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import emailJs from '@emailjs/browser'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm: any = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e: any) => {
    e.preventDefault()
    emailJs
      .sendForm(
        'service_747qk3j',
        'template_vmyt7k9',
        refForm.current,
        'CZCdoovEEjH7-jkIP'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload()
        },
        (err: any) => {
          alert('Send email failed!')
          console.log(err)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            molestiae totam? Aperiam doloribus est, sapiente earum magnam
            recusandae repudiandae reprehenderit explicabo blanditiis
            praesentium debitis dicta cum voluptatem voluptatum, ducimus nemo.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button-form"
                    value="SEND"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Colombia
          <br />
          Cundinamarca
          <br />
          Bogotá
          <br />
          <span>alejandro.palacios88@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[4.6640584, -74.0558897]}
            zoom={13}
            // scrollWheelZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[4.6640584, -74.0558897]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" active />
    </>
  )
}

export default Contact
