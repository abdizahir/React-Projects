import cart from '../images/image-product-1-thumbnail.jpg';
import deleteIcon from '../images/icon-delete.svg';

export default function Cart({carts, count, intial}) {
    return (
        <>
            {carts ? 
                <div className="bg-white rounded-md absolute left-2.5 top-20 sm:fixed sm:left-230 sm:top-16 w-79 h-56 z-30 flex flex-col">
                    <h3 className="mb-2 font-bold px-4 py-2">Cart</h3>
                    <hr className="h-0.5 border-0 bg-stone-100" />          
                    <div className='p-4 mt-2'>
                        <div className='mb-5 flex items-center gap-3'>
                            <img className='w-12 h-11 rounded-sm' src={cart} alt="" />
                            <section>
                                <p className='text-sm text-stone-500'>Fall Limited Edition Sneakers</p>
                                <section className='flex gap-2'>
                                    <span className='text-sm text-stone-400'>{intial.toFixed(2)} x {count}</span>
                                    <span className='font-bold'>{(intial * count).toFixed(2)}</span>
                                </section>
                            </section>
                            <img className='' src={deleteIcon} alt="" />
                        </div>
                    <button className='p-3 w-full bg-orange-400 rounded-md font-bold'>Checkout</button>
                    </div>
                </div>
            : null}
        </>
    );
}