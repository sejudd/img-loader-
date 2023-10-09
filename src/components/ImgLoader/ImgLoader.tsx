import { Icon } from "@aranda/aranda.icons";
import {ContentImgLoader} from "./ImgLoader.style"
import HeaderImgLoader from "./Header/HeaderImgLoader";
import BoddyImgLoader from "./Boddy/BoddyImgLoader"

export default function ImgLoader () {
    return(
        <>
            <ContentImgLoader>
                <HeaderImgLoader/>
                <BoddyImgLoader/>
            </ContentImgLoader>
        </>
    )
}