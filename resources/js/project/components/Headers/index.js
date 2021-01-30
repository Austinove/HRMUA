import React from "react";
import { Button, Container, Col, Row } from "reactstrap";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
function PageHeader() {
    let pageHeader = React.createRef();
    React.useEffect(() => {
        if (window.innerWidth < 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });
    const slides = [
        {
            image: "../../../images/slides/1.jpeg",
            title: "Some title",
            desc: "Cras sit amet nibh libero, in gravida nulla"
        },
        {
            image: "../../../images/slides/2.jpeg",
            title: "Some title",
            desc: "Cras sit amet nibh libero, in gravida nulla"
        },
        {
            image: "../../../images/slides/3.jpeg",
            title: "Some title",
            desc: "Cras sit amet nibh libero, in gravida nulla"
        },
        {
            image: "../../../images/slides/4.jpeg",
            title: "Some title",
            desc: "Cras sit amet nibh libero, in gravida nulla"
        },
        {
            image: "../../../images/slides/5.jpeg",
            title: "Some title",
            desc: "Cras sit amet nibh libero, in gravida nulla"
        }
    ];

    return (
        <Slider autoplay={true} duration={5000} infinite={true}>
            {slides.map((slide, index) => (
                <div
                    style={{
                        backgroundImage: `url(${slide.image})`
                    }}
                    className="page-header home-header"
                    data-parallax={true}
                    ref={pageHeader}
                >
                    <div className="filter" />
                    <Container>
                        <Row>
                            <Col md={7} sm={12} className=" mt-2 ml-auto">
                                <div className="motto text-center">
                                    <h1 className="font-weight-bold">
                                        Human Resource Association of Uganda
                                    </h1>
                                    <h3>Start with us</h3>
                                    <br />
                                    <Button
                                        className="btn-round"
                                        color="neutral"
                                        type="button"
                                        outline
                                    >
                                        Click to Register
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            ))}
        </Slider>
    );
}

export default PageHeader;

// import React from "react";
// import Carousel from "react-elastic-carousel";

// const PageHeader = () => {
//     const items = [
//         { id: 1, title: "item #1" },
//         { id: 2, title: "item #2" },
//         { id: 3, title: "item #3" },
//         { id: 4, title: "item #4" },
//         { id: 5, title: "item #5" }
//     ];
//     return (
//         <Carousel
//             onNextEnd={false}
//             itemsToShow={2}
//             enableAutoPlay={true}
//             autoPlaySpeed={500}
//         >
//             {items.map(item => (
//                 <div
//                     style={{
//                         backgroundImage: "url(/assets/img/logo/home-img.jpg)"
//                     }}
//                     className="page-header home-header"
//                     data-parallax={true}
//                 >
//                     <div className="filter" />
//                     <Container>
//                         <Row>
//                             <Col md={7} sm={12} className=" mt-2 ml-auto">
//                                 <div className="motto text-center">
//                                     <h1 className="font-weight-bold">
//                                         Human Resource Association of Uganda
//                                     </h1>
//                                     <h3>Start with us</h3>
//                                     <br />
//                                     <Button
//                                         className="btn-round"
//                                         color="neutral"
//                                         type="button"
//                                         outline
//                                     >
//                                         Click to Register
//                                     </Button>
//                                 </div>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </div>
//             ))}
//         </Carousel>
//     );
// };
// export default PageHeader;

// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";
// const PageHeader = () => {
//     const slides = [
//         { title: "First item", description: "Lorem ipsum" },
//         { title: "Second item", description: "Lorem ipsum" },
//         { title: "First item1", description: "Lorem ipsum" },
//         { title: "Second item1", description: "Lorem ipsum" }
//     ];
//     return (
//         <Slider autoplay={true} duration={5000} infinite={true}>
//             {slides.map((slide, index) => (
//                 <div key={index}>
//                     <div
//                         style={{
//                             backgroundImage:
//                                 "url(/assets/img/logo/home-img.jpg)"
//                         }}
//                         className="page-header home-header"
//                         data-parallax={true}
//                     >
//                         <div className="filter" />
//                         <Container>
//                             <Row>
//                                 <Col md={7} sm={12} className=" mt-2 ml-auto">
//                                     <div className="motto text-center">
//                                         <h1 className="font-weight-bold">
//                                             {slide.description}
//                                         </h1>
//                                         <h3>{slide.title}</h3>
//                                         <br />
//                                         <Button
//                                             className="btn-round"
//                                             color="neutral"
//                                             type="button"
//                                             outline
//                                         >
//                                             Click to Register
//                                         </Button>
//                                     </div>
//                                 </Col>
//                             </Row>
//                         </Container>
//                     </div>
//                 </div>
//             ))}
//         </Slider>
//     );
// };
// export default PageHeader;
