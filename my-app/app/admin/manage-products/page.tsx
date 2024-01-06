import Container from "@/app/components/nav/Container";
import ManageProductsClient from "./ManageProductsClient";
import getProducts from "@/actions/getProducts";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/components/NullData";

const ManageProducts = async () => {

    const products = await getProducts ({category: null})
    const currentUser = await getCurrentUser()

    if(!currentUser || currentUser.role !== "ADMIN"){
        return <NullData title="Access denied"/>
    }
    
    return <div className="pt-8">
        <Container>
            <ManageProductsClient products = {products}/>

        </Container>
     
    </div>;
}
 
export default ManageProducts;