import product1 from '../images/image-product-1.jpg'
import product2 from '../images/image-product-2.jpg'
import product3 from '../images/image-product-3.jpg'
import product4 from '../images/image-product-4.jpg'
import previous from '../images/icon-previous.svg';
import next from '../images/icon-next.svg';
import close from '../images/icon-close.svg';
import { createPortal } from 'react-dom';
import { useState } from 'react';

export default function ImgOverlay({overLay, onClose}) {
    const products = [
        product1,
        product2,
        product3,
        product4
    ]
    const [index, setIndex] = useState(0);
    const [img, setImg] = useState(products[0]);
    function handleClick(e) {
        setImg(e.target.src)
    }
    const handlePrev = () => {
        const newIndex = index === 0 ? products.length - 1 : index - 1;
        setIndex(newIndex);
        setImg(products[newIndex]);
    };
    const handeleNext = () => {
        const newIndex = index === products.length - 1 ? 0 : index + 1;
        setIndex(newIndex);
        setImg(products[newIndex]);
    }
    return createPortal(
        <div>
            {overLay ?
                <>
                <div class="fixed inset-0 bg-black/50 z-40"></div>
                <div className='max-sm:hidden sm:p-5 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 mt-5 w-95'>
                    <button className='fixed right-6 -top-2 cursor-pointer'>
                        <img onClick={onClose} src={close} alt="colse" />
                    </button>
                    <div className='w-full h-80 relative'>
                        <img className='w-full h-full object-cover rounded-xl' src={img} alt="" />
                        <button>
                            <img onClick={handlePrev} src={previous} alt="" className='absolute top-45 -left-3 transform -translate-y-1/2 w-7 h-7 bg-white p-2 rounded-2xl cursor-pointer' />
                        </button>
                        <button>
                            <img onClick={handeleNext} src={next} alt="" className='absolute top-45 -right-3 transform -translate-y-1/2 w-7 h-7 bg-white p-2 rounded-2xl cursor-pointer' />
                        </button>
                    </div>
                    <ul className='flex justify-around items-center gap-1 ml-2 mt-4 w-80'>
                        <li>
                            <img onClick={handleClick} className='rounded-md hover:opacity-30 hover:outline-2 hover:outline-red-600 cursor-pointer w-15 h-15' src={product1} alt="" />
                        </li>
                        <li>
                            <img onClick={handleClick} className='rounded-md hover:opacity-30 hover:outline-2 hover:outline-red-600 cursor-pointer w-15 h-15' src={product2} alt="" />
                        </li>
                        <li>
                            <img onClick={handleClick} className='rounded-md hover:opacity-30 hover:outline-2 hover:outline-red-600 cursor-pointer w-15 h-15' src={product3} alt="" />
                        </li>
                        <li>
                            <img onClick={handleClick} className='rounded-md hover:opacity-30 hover:outline-2 hover:outline-red-600 cursor-pointer w-15 h-15' src={product4} alt="" />
                        </li>
                    </ul>
                </div>
                </>
                : null
            }
        </div>, document.getElementById('img-root')
    );
}