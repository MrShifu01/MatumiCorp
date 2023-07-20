import { Carousel, Image } from 'react-bootstrap';

const TransactionCarousel = () => {

  return (
    <Carousel pause='hover' className='bg-primary mb-4'>
        <Carousel.Item>
            <Image className='carousel-image' style={{height: '350px'}} src='heroImg.jpeg' alt='first image' fluid />
        </Carousel.Item>
        <Carousel.Item>
            <Image className='carousel-image' style={{height: '350px'}} src='heroImg2.jpeg' alt='second image' fluid />
        </Carousel.Item>
        <Carousel.Item>
            <Image className='carousel-image' style={{height: '350px'}} src='heroImg3.jpeg' alt='third image' fluid />
        </Carousel.Item>
    </Carousel>
  );
};

export default TransactionCarousel