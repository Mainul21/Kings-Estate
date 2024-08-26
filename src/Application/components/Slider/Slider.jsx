// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className=''
    >
      <SwiperSlide><img className='w-3/4 mx-auto rounded' src="https://i.postimg.cc/XJjQZwdf/dillon-kydd-2ke-CPb73a-QY-unsplash.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-3/4 mx-auto rounded' src="https://i.postimg.cc/7LyB4vLQ/francesca-tosolini-6jap-TIj-UQo-I-unsplash.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-3/4 mx-auto rounded' src="https://i.postimg.cc/9ML1yrYv/francesca-tosolini-Xc-Vm8mn7-NUM-unsplash.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-3/4 mx-auto rounded' src="https://i.postimg.cc/nr5kwg52/lotus-design-n-print-w-Rz-Barqn3hs-unsplash.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-3/4 mx-auto rounded' src="https://i.postimg.cc/zDP0BHBh/ronnie-george-9g-Gv-NWBe-Oq4-unsplash.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-3/4 mx-auto rounded' src="https://i.postimg.cc/1XYC1fgp/aaron-huber-G7s-E2-S4-Lab4-unsplash.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-3/4 mx-auto rounded' src="https://i.postimg.cc/J7TdkdTG/aaron-huber-o-MOx-w-V6m-LQ-unsplash.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-3/4 mx-auto rounded' src="https://i.postimg.cc/ZK27fvzm/bailey-anselme-Bkp3g-Lygye-A-unsplash.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-3/4 mx-auto rounded' src="https://i.postimg.cc/3JdfCC69/brian-babb-Xbw-Hrt87m-Q0-unsplash.jpg" alt="" /></SwiperSlide>
      ...
    </Swiper>
  );
};