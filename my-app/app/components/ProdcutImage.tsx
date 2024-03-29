'use client';

import { CartProductType, SelectedImgType } from "../product/[productId]/ProductDetails";
import Images from "next/image";
import Image from "next/image";


interface ProductImageProps{
    cardProduct: CartProductType,
    product: any,
    handleColorSelect: (value: SelectedImgType)=> void;
}

const ProductImage: React.FC<ProductImageProps> = ({
    cardProduct,
    product,
    handleColorSelect,
}) => {
    return <div className="grid
    grid-cols-6
    gap-2
    h-full
    max-h-[500px]
    min-h-[300px]
    sm:min-h-[400]
    ">

    <div className="flex
    flex-col
    items-center
    justify-center
    gap-4
    cursor-pointer
    border
    h-full
    max-h-[500px]
    min-h-[300px]
    sm:min-h-[400]
    ">
        {product.images.map((image: SelectedImgType)=>{
            return (
            <div key={image.color} onClick={()=>
            handleColorSelect(image)} className={`relative w-[80%] aspect-square rounded border-teal-300 ${cardProduct.selectedImg.color === image.color ? 'border-[1.5px]': 'border-none'} `}>
                <Images
                src={image.image} 
                alt={image.color}
                fill 
                className="object-contain"
                />

            </div>
            );

        })}
    
    </div>
    <div className="col-span-5 relative aspect-square">
       <Image
        fill
        src={cardProduct.selectedImg.image}
        alt={cardProduct.name}
        className="w-full
        h-full
        object-contain
        max-h-[500px]
        min-h-[300px]
        sm:min-h-[400px]"
        />

    </div>


    </div>
}
 
export default ProductImage;