import { arrowUpToTop } from '../assets';
import { HandleScroll } from '../Handle';

const BackTop = () => {
    const isVisible = HandleScroll(400);
    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div
            className={` ${
                isVisible ? '' : 'hidden'
            } fixed bottom-[25px] right-[25px] sm:bottom-[30px] sm:right-[35px] z-[100] fadein user-select`}>
            <div
                className='sm:w-[65px] sm:h-[65px] w-[50px] h-[50px]  rounded-full flex justify-center items-center bg-slate-600 shadow-2xl'
                onClick={backToTop}>
                <img
                    src={arrowUpToTop}
                    alt='BackToTop'
                    className=' user-select w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] cursor-pointer'
                />
            </div>
        </div>
    );
};
export default BackTop;
