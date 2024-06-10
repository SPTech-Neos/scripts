import React, { SyntheticEvent, useState } from "react";

import * as S from "./inputImage.styled";
import { SecondaryTitle } from "../../Texts/Title/Title";
import Subtitle from "../../Texts/Subtitle/Subtitle";

const inputImage: React.FC<S.InputImageProps> = ({ theme }) => {
  const [currentImage, setCurrentImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>("");
  const [imageName, setImageName] = useState<string>("");

  interface ChangeEvent<T = Element> extends SyntheticEvent<T> {
    target: EventTarget & T;
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files as FileList;

    setCurrentImage(selectedFiles?.[0]);
    setPreviewImage(URL.createObjectURL(selectedFiles?.[0]));
    setImageName(selectedFiles?.[0].name);
  };

  // function handleChange(event: any) {
  //   setFile(event.target.files[0])
  // }

  return (
    <S.Row>
      <S.ColumnCenter>
        <Subtitle weight={700} size="lg">
          Foto de Perfil
        </Subtitle>
        {previewImage != "" ? (
          <S.ImagePreview src={previewImage} alt="Pré-Vizualização da Imagem" />
        ) : (
          <S.Round />
        )}
        {/* {previewImage != '' && <S.Round />} */}
      </S.ColumnCenter>
      <S.Column>
        <S.InputImage onChange={(e: any) => handleChange(e)} id="input-image" />
        <Subtitle weight={600} size="md">
          {imageName == "" ? "Nenhum arquivo encontrado" : imageName}
        </Subtitle>
        <S.InputLabel htmlFor="input-image">
          <S.Icon src="/upload.svg" alt="Ícone de Upload" />
          <S.IconText>Subir arquivo</S.IconText>
        </S.InputLabel>
      </S.Column>
    </S.Row>
  );
};

export default inputImage;
