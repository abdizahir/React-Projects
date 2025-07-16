import minus from '../images/icon-minus.svg';
import plus from '../images/icon-plus.svg';
import cart from '../images/icon-cart.svg';
export default function ProductPrice({onAddCount, onSubCount, count, onAddCart}) {
    return (
        <div className="mb-3">
            <button className="w-full py-3.5 flex sm:flex-col justify-between rounded-lg">
                <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold sm:text-xl">$125.00</span>
                    <span className="px-2.5 py-0.5 rounded-md bg-stone-950 text-white font-bold sm:px-1.5 sm:text-xs">50%</span>
                </div>
                <section>
                    <span className="sm:flex line-through text-gray-500 font-bold sm:text-xs">$250.00</span>
                </section>
            </button>
            <div className="sm:flex sm:items-center sm:align-baseline sm:gap-5 w-full">
                <div className="sm:w-1/3 px-5 py-3.5 flex justify-between bg-stone-100 rounded-lg sm:m-0 mt-2 mb-4">
                    <button onClick={onSubCount}>
                        <img src={minus} alt="" />
                    </button>
                        {count}
                    <button onClick={onAddCount}>
                        <img src={plus} alt="" />
                    </button>
                </div>
                <button onClick={onAddCart} className="sm:w-2/3 w-full px-2 py-3.5 flex justify-center items-center gap-3 bg-orange-400 rounded-lg mt-2 sm:m-0">
                    <img src={cart} alt="cart" className='h-4' />
                    <span className=' text-stone-950 font-bold text-sm'>Add to cart</span>
                </button>
            </div>
        </div>
    );
}