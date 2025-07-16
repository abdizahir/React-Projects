export default function Content({ProdType}) {
    return (
        <>
            <p className="font-bold uppercase text-stone-500 text-sm mb-2 sm:text-xs">Sneaker Company</p>
            <h1 className="text-2xl font-bold mt-3 mb-4 sm:text-4xl">{ProdType}</h1>
            <p className="text-base leading-5 text-gray-500 sm:text-sm sm:mt-6">These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        </>
    )
}