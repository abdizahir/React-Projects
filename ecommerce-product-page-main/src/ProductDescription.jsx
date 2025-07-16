import Content from "./Content";
import ProductPrice from "./ProductPrice";

export default function ProductDescription({onAddCart, onAddCount, onSubCount, count}) {
    return (
        <div className="p-5 sm:p-5 mt-5 sm:w-1/2">
            <Content ProdType="Fall Limited Edition Sneakers" />
            <ProductPrice onAddCart={onAddCart} onAddCount={onAddCount} onSubCount={onSubCount} count={count} />
        </div>
    )
}