import PrimaryHeroImg from '../images/hero_images/primaryHeroImg.png';
import PrimaryHeroImgMobile from '../images/hero_images/primaryHeroImgMobile.png';
import { useWindowSize } from '@uidotdev/usehooks';

export const PrimaryHero = () => {
    const {width} = useWindowSize();

    return (
        <div className="relative h-[843px] lg:h-[640px] bg-peach md:rounded-[15px] pt-20 md:pt-[60px] lg:pt-0 px-7 lg:px-16 xl:px-24 overflow-hidden">
            <div className="w-[640px] h-[640px] rounded-full absolute top-[50%] -translate-y-[50%] left-0 md:left-auto md:-right-32 xl:-translate-y-[0] xl:right-0 xl:top-0 xl:bottom-0 bg-gradient-to-t from-transparent to-[#5D0202]/50"></div>

            <div className="lg:flex h-full lg:items-center">
                <section className='relative z-10 flex flex-col items-center justify-center lg:block text-center lg:text-left'>
                    <h1 className='text-[32px] leading-9 md:text-5xl font-medium text-white max-w-[415px] md:max-w-full lg:w-[540px]'>Award-winning custom designs and digital branding solutions</h1>
                    <p className='text-[15px] leading-[25px] text-white mt-6 md:mt-8 lg:mt-8 mb-4 min-[375px]:mb-7 md:mb-5 lg:mb-10 max-w-[415px] md:max-w-full lg:w-[440px]'>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                    <button className='hover:text-white hover:bg-light-peach h-14 rounded-lg bg-white text-[15px] font-medium uppercase tracking-[1px] px-6'>Learn More</button>
                </section>
                {width >= 1024 
                ? 
                <img src={PrimaryHeroImg} alt="" className='absolute right-0 bottom-0' /> 
                :
                <img src={PrimaryHeroImgMobile} alt="" className='absolute left-[50%] -translate-x-[50%] bottom-0' />}
            </div>
        </div>
    )
}