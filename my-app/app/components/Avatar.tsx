import Image from "next/image";
import { FaUserLarge} from "react-icons/fa6";

interface AvatarProps{
    src?: string | null | undefined;
}


const Avatar: React.FC<AvatarProps> = ({src}) => {
    if(src){
        return (
        <Image 
        src={src}
        alt="Avatar"
        className="rounded-full"
        height="35"
        width="35"
        />
        )
    }
   return <FaUserLarge size={20}/>
}
 
export default Avatar;