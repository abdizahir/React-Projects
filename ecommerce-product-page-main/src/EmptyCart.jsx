export default function EmmptyCart({emptyCarts}) {
    return (
        <>
            {emptyCarts ? 
                <div className="bg-white rounded-md absolute left-2.5 top-20 w-79 h-56 z-30 flex flex-col sm:fixed sm:left-230 sm:top-16">
                    <h3 className="mb-2 font-bold px-4 py-2">Cart</h3>
                    <hr className="h-0.5 border-0 bg-stone-100" />          
                    <p className="text-center m-auto">Your cart is empty.</p> 
                </div>
            : null }
        </>
        
    );
}