'use client'
import { CartProductType} from "@/app/product/[productId]/ProductDetails";
interface SetQtyProps{
    cardCounter?: boolean;
    cardProduct : CartProductType;
    handleQtyIncrease: () => void;
    handleQtyDecrease: () => void;

    
}
  const btnStyles ='border-[1.2px] border-slate-300 px-2 rounded';


const SetQuatity: React.FC<SetQtyProps> = ({
    cardCounter,
    cardProduct,
    handleQtyIncrease,
    handleQtyDecrease,
}) => {
    return  <div className="flex gap-8 items-center">
        {cardCounter ? null : <div className="font-semibold">QUANTITY:</div>}
        <div className="flex gap-4 items-center text-base">
            <button onClick={handleQtyDecrease}className={btnStyles}>-</button>

            <div>{cardProduct.quantity}</div>
            <button onClick={handleQtyIncrease}className={btnStyles}>+</button>
        </div>

    </div>;
}
 
export default SetQuatity;