import product1 from '../images/image-product-1.jpg'
import product1Thumbnail from '../images/image-product-1-thumbnail.jpg';
import product2 from '../images/image-product-2.jpg'
import product2Thumbnail from '../images/image-product-2-thumbnail.jpg';
import product3 from '../images/image-product-3.jpg'
import product3Thumbnail from '../images/image-product-3-thumbnail.jpg';
import product4 from '../images/image-product-4.jpg'
import product4Thumbnail from '../images/image-product-4-thumbnail.jpg';
import previous from '../images/icon-previous.svg';
import next from '../images/icon-next.svg';
import { useState } from 'react';

export default function ProductImage({cart, count, onOverlay}) {
    const [img, setImg] = useState(product1);
    function handleClick(e) {
        const src = e.target.src;
        switch(true) {
            case src.includes('images/image-product-1-thumbnail.jpg'):
                setImg(product1)
                break;
            case src.includes('images/image-product-2-thumbnail.jpg'):
                setImg(product2)
                break;
            case src.includes('images/image-product-3-thumbnail.jpg'):
                setImg(product3)
                break;
            case src.includes('images/image-product-4-thumbnail.jpg'):
                setImg(product4)
                break;
            default:
                setImg(product1)
        }
    }
    return (
        <div className='sm:w-1/2'>
            <div className='relative object-cover sm:hidden'>
                <img src={product1} className='w-full object-cover h-65' />
                {!cart && count < 0 ? 
                    <>
                        <img src={previous} alt="" className='absolute top-29 left-2 w-7 h-7 bg-white p-2 rounded-2xl' />
                        <img src={next} alt="" className='absolute top-29 right-2 w-7 h-7 bg-white p-2 rounded-2xl' />
                    </>
                : null}
            </div>
            <div className='max-sm:hidden sm:p-5'>
                    <img className='w-full rounded-xl h-70' src={img} alt="" />
                    <ul className='flex gap-3 mt-4 w-full'>
                        <li onClick={onOverlay}>
                            <img onClick={handleClick} className='rounded-sm hover:opacity-40 hover:outline-2 hover:outline-red-600 cursor-pointer' src={product1Thumbnail} alt="" />
                        </li>
                        <li onClick={onOverlay}>
                            <img onClick={handleClick} className='rounded-sm hover:opacity-40 hover:outline-2 hover:outline-red-600 cursor-pointer' src={product2Thumbnail} alt="" />
                        </li>
                        <li onClick={onOverlay}>
                            <img onClick={handleClick} className='rounded-sm hover:opacity-40 hover:outline-2 hover:outline-red-600 cursor-pointer' src={product3Thumbnail} alt="" />
                        </li>
                        <li onClick={onOverlay}>
                            <img onClick={handleClick} className='rounded-sm hover:opacity-40 hover:outline-2 hover:outline-red-600 cursor-pointer' src={product4Thumbnail} alt="" />
                        </li>
                    </ul>
            </div>
        </div>
    );
}