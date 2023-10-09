import {ContentBoddy, AreaImg, Line, Boddy, AreaAddImg, AddImg, InfoImg, ActionImg, ContainDataImg} from "./BoddyImhLoader.style"
import { useState } from "react";
export default function BoddyImgLoader() {

    interface DataImg {
      res: any
      name: any
      size: any
      type: any
    }

    const dataImgInitial = {
      res: "",
      name: "aaa",
      size: "",
      type: "",
    }

    const [img, setImg] = useState<DataImg | null>(null)

    const handleImg = (e: any) => {
        const reader = new FileReader()

        reader.readAsDataURL(e.target.files[0])
       // console.log(e.target.files[0])

      const dataImg: DataImg = {
          res: "",
          name: e.target.files[0].name,
          size: e.target.files[0].size,
          type: e.target.files[0].type,

      }

        reader.onload = (e) =>{
            e.preventDefault()
           // console.log(e.target)
            const result = e.target?.result
            if(typeof result === 'string'){
                dataImg.res = result
                setImg(dataImg)
                
            }

         
            
        }
    }

  
    

  return (
    <>
      <ContentBoddy>
        <Boddy>
          <AreaImg>
          {
            img?.size < 300000 ? <img className="fill" src={img?.res} alt="" /> :  <> <Line></Line><Line></Line>  </>
          }
          </AreaImg>

          <AreaAddImg>
            <p>Tamaño 150x150 pixeles png, jpg, peso máximo de 300 KB</p>
            <AddImg  className="add-img">
            <input className="input-file" type="file" accept="image/*" onChange={(e)=>{handleImg(e)}}/>
              
              <ContainDataImg>
              <InfoImg >
                <p>{img?.size > 300000 ? "El tamaño de la imagen debe ser de maximo 300KB" : img?.name }</p>
              </InfoImg>
              <ActionImg>Agregar imagen</ActionImg> 

              </ContainDataImg>
              
              
            </AddImg>
          </AreaAddImg>
        </Boddy>
      </ContentBoddy>

      
    </>
  );
}
