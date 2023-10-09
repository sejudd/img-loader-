import { Icon } from "@aranda/aranda.icons";
import {ContentHeader, ContentHeaderInfo, ContentHeaderActions} from "./HeaderImgLoader.style"


export default function HeaderImgLoader() {
  return (
    <>
      <ContentHeader>
        <ContentHeaderInfo>
          <h2>Cambiar Imagen</h2>
          <p>Suba una imagen que va a usar en toda la aplicación.</p>
        </ContentHeaderInfo>
        <ContentHeaderActions>
          <div className="icon save">-</div>
          <div className="icon close">x</div>
        </ContentHeaderActions>
      </ContentHeader>
    </>
  );
}
