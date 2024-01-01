import Link from "next/link";
import Container from "../Container"; // Adjust the path if needed
import Footerlist from "./Footerlist";
import {MdFacebook} from "react-icons/md";
import {AiFillTwitterCircle , AiFillInstagram , AiFillYoutube} from "react-icons/ai";



const Footer = () =>{
    return <footer className="bg-slate-700
    text-slate-200 text-sm mt-16">

  <Container>
    <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
        <Footerlist>
            <h3 className="text-base font-bold mb-2">Shop Categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptos</Link>
            <Link href="#">Deskstops</Link>
            <Link href="#">Watches</Link>
            <Link href="#">TvS</Link>
            <Link href="#">Accessories</Link> 
            

        </Footerlist>

        <Footerlist>
            <h3 className="text-base font-bold mb-2">Customer Service</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Resumes & Exchanges</Link>
            <Link href="#">Watches</Link>
            <Link href="#">FAQs</Link>
            </Footerlist>
            <div className="w-full md:w-1/3 mb-6
            md:mb-0">
              <h3 className="text-base font-bold
              mb-2">About Us</h3>
              <p className="mb-2">
              At our electronics
              store,we are dedicated to providing the
              latest and greatest devices and accessories
              to our customers.with a wide selection of 
              phones,TVs,laptop,watches and accessories.</p>
              <p>&copy; {new Date().getFullYear()}* E-SHOP . All Rights Reserved .</p>
            </div>
            <Footerlist>
              <h3 className="text-base font-bold mb-2">Follow Us</h3>
              <div className="flex gap-2">
                <Link href = "#">
                  <MdFacebook size={24}/>

                </Link>
                <Link href = "#">
                  <AiFillTwitterCircle size={24}/>

                </Link>

                <Link href = "#">
                  <AiFillInstagram size={24}/>

                </Link>

                <Link href = "#">
                  <AiFillYoutube size={24}/>

                </Link>



                
              </div>

            </Footerlist>
    </div>
  </Container>


    </footer>;
}

export default Footer;