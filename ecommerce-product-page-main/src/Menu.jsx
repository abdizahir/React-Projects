import { createPortal } from 'react-dom';
import close from '../images/icon-close.svg';
export default function Menu({overlay, onClose}) {
    return createPortal(
        <>
        {overlay ? <div class="fixed inset-0 bg-black/50 z-40"></div> : null}
        <div className="fixed top-0 left-0 h-screen bg-white w-55 z-50">
            <menu className='p-5'>
                <button className='mb-9' onClick={onClose}>
                    <img src={close} alt="" />
                </button>
                <ul className='font-bold flex flex-col gap-4'>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </menu>
        </div>
        </>,
        document.getElementById('menu-root')
    );
};
