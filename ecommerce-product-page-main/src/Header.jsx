import menu from '../images/icon-menu.svg';
import avtar from '../images/image-avatar.png';
import cart from '../images/icon-cart.svg';
export default function Header({onClick, onCartClick, count, carts}) {
    return (
        <main className=''>
            <div className='py-4 px-2 flex items-center justify-between'>
                <section className='flex items-baseline gap-4'>
                    <button onClick={onClick}>
                        <img src={menu} alt="menu-icon" className='w-3 sm:w-12 h-3.5 sm:h-12 sm:hidden' />
                    </button>
                    <h1 className='font-bold sm:text-2xl'>sneakers</h1>
                    <ul className="max-sm:hidden ml-3 text-stone-400 text-sm flex gap-10">
                        <li className="cursor-pointer hover:text-stone-950 relative after:content-[''] hover:after:absolute after:top-9.5 after:left-0 after:w-full after:h-0.5 after:bg-orange-500">Collections</li>
                        <li className="cursor-pointer hover:text-stone-950 relative after:content-[''] hover:after:absolute after:top-9.5 after:left-0 after:w-full after:h-0.5 after:bg-orange-500">Men</li>
                        <li className="cursor-pointer hover:text-stone-950 relative after:content-[''] hover:after:absolute after:top-9.5 after:left-0 after:w-full after:h-0.5 after:bg-orange-500">Women</li>
                        <li className="cursor-pointer hover:text-stone-950 relative after:content-[''] hover:after:absolute after:top-9.5 after:left-0 after:w-full after:h-0.5 after:bg-orange-500">About</li>
                        <li className="cursor-pointer hover:text-stone-950 relative after:content-[''] hover:after:absolute after:top-9.5 after:left-0 after:w-full after:h-0.5 after:bg-orange-500">Contact</li>
                    </ul>
                </section>
                <section className='flex items-center gap-7'>
                    <button onClick={onCartClick} className='relative'>
                        <span className='absolute bottom-3 text-xs font-bold px-1.5 text-white py-0.2 bg-orange-500 rounded-md'>
                            {carts && count > 0 ? count : null}
                        </span>
                        <img className='w-4' src={cart} alt="avtar-img" />
                    </button>
                    <button>
                        <img className='w-8' src={avtar} alt="cart-img" />
                    </button>
                </section>
            </div>
            <hr className='ml-6 h-px bg-gray-200 border-0 block' />
        </main>
    );
}