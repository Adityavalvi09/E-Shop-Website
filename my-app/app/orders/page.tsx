import Container from "@/app/components/nav/Container";


import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";
import OrdersClient from "./OrdersClient"

import getOrders from "@/actions/getOrders";
import getOrdersByUserId from "@/actions/getOrdersByUserId";

const Orders= async () => {

 
    const currentUser = await getCurrentUser()

    if(!currentUser){
        return <NullData title="Access Denied"/>
    }
    const orders =await getOrdersByUserId(currentUser.id)

    if(!orders){
        return <NullData title="No Orders Yet"/>
    }
    return <div className="pt-8">
        <Container>
            <OrdersClient orders = {orders}/>

        </Container>
     
    </div>;
}
 
export default Orders;


