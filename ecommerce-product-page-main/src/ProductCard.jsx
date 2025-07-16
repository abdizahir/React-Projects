import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";
export default function ProductCard({count, cart, onAddCart, onAddCount, onSubCount, onOverlay}) {
    return (
        <div className="sm:flex sm:gap-10 sm:mt-10 sm:px-10">
            <ProductImage cart={cart} count={count} onOverlay={onOverlay} />
            <ProductDescription onAddCart={onAddCart} onAddCount={onAddCount} onSubCount={onSubCount} count={count} />
        </div>
    );
}