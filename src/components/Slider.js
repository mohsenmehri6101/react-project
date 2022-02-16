import React from "react";
import {Carousel} from "react-bootstrap";
import image_one from './../images/1.jpg';
import image_two from './../images/2.jpg';
import image_three from './../images/3.jpg';
import image_four from './../images/4.jpg';
import image_five from './../images/5.jpg';
import image_six from './../images/6.jpg';
import image_sven from './../images/7.jpg';

export default class Header extends React.Component {
    state = {
        images: [
            {src: image_one, title: 'عنوان اول', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با است'},
            {src: image_two, title: 'عنوان دوم', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با است'},
            {src: image_three, title: 'عنوان سوم', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با است'},
            {src: image_four, title: 'عنوان چهارم', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با است'},
            {src: image_five, title: 'عنوان پنجم', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با است'},
            {src: image_six, title: 'عنوان ششم', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با است'},
            {src: image_sven, title: 'عنوان هفتم', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با است'},
        ]
    }

    /*constructor(props) {
        super(props);
    }*/

    render() {

        let list_image=this.prepare_carousel_item()
        let style_background={
            // 'background': 'rgb(255,255,255)',
            'background': 'linear-gradient(90deg, rgba(255,255,255,0) 25%, rgba(107,107,107,1) 50%, rgba(232,232,232,0) 75%)'
        }

        return (
            <>
                <section className="container-fluid mt-3 bg-light" style={style_background} >
                    <div className="row" style={style_background}>
                        <div className="col-12 text-center" style={style_background}>
                            <Carousel variant="dark">
                                {list_image}
                            </Carousel>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    prepare_carousel_item(){
        return this.state.images.map((image, key) => {
            return <Carousel.Item key={key}>
                <img
                    className="w-auto"
                    style={{'height':'400px'}}
                    src={image.src}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="text-white">{image.title}</h3>
                    <p className="text-white">{image.text}</p>
                </Carousel.Caption>
            </Carousel.Item>
        })
    }
}
