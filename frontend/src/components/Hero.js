import { Container, Row, Col, Button } from 'react-bootstrap';
import '../App.css'

const Hero = () => {
  return (
    <Container fluid>
        <Row className='hero-image vh-100'>
        <Col>
            <div className='d-flex flex-column hero-text'>
                <h6 className='text-uppercase text-sm'>Welcome to</h6>
                <h1 className='heading'>Matumi Corporate Advisers</h1>
                <p className='lead'>Matumi is a boutique M&A advisory firm specializing in end-to-end merger and acquisition services across various sectors, including healthcare, logistics, and technology.</p>
                <div>
                    <Button className='mt-2' variant="light" size="lg">
                        Learn More
                    </Button>
                </div>
            </div>

        </Col>
        </Row>
        <Row className='bg-primary'>
            <Col>
                <div className='d-flex flex-column mt-8 px-7'>
                    <h2 className='text-uppercase text-sm'>Our Services</h2>
                    <h1>What we do</h1>
                    <p className='lead'>We provide a full suite of M&A services to our clients, including:</p>
                    <ul>
                        <li>Buy-side advisory</li>
                        <li>Sell-side advisory</li>
                        <li>Capital raising</li>
                        <li>Valuations</li>
                        <li>Financial modelling</li>
                        <li>Due diligence</li>
                    </ul>
                </div>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

            </Col>
        </Row>
    </Container>
  )
}

export default Hero