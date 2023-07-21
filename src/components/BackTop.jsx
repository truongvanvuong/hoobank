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
            } fixed bottom-[40px] right-[40px] z-[100] fadein`}>
            <div
                className='w-[65px] h-[65px] rounded-full flex justify-center items-center bg-slate-600 shadow-2xl'
                onClick={backToTop}>
                <img
                    src={arrowUpToTop}
                    alt='BackToTop'
                    className='w-[40px] h-[40px] cursor-pointer'
                />
            </div>
        </div>
    );
};
export default BackTop;
