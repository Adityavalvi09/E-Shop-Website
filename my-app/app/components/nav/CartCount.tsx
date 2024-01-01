"use client";

import { useCart } from "@/app/hooks/useCart";
import { useRouter } from "next/navigation";
import { FaCartShopping } from "react-icons/fa6";

const  CartCount= () => {
    const{cartTotalQty}= useCart();
    const router = useRouter();
    return( 
    <div 
    className="relative cursor-pointer"
    onClick={()=>router.push("/cart")}
    >

        <div className="text-3x1">
        <FaCartShopping />
        </div>
        <span className="absolute
        top-[-10px]
        right-[-10px]
        bg-slate-900
        text-white
        h-4
        w-4
        rounded-full
        flex
        items-center
        justify-center
        text-sm"
        >
            {cartTotalQty}

        </span>



    </div> 
    );
}
 
export default CartCount;