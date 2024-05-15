import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "./fireBaseConfig";
export const fileUpload = async (imageData: any) => {
  const imgRef = ref(storage, `images/${imageData.name + "" + v4()}`);
  const imageMetaData = {
    contentType: imageData.type,
  };
  const imageSnapshot = await uploadBytesResumable(
    imgRef,
    imageData,
    imageMetaData
  );
  const imageUrl = await getDownloadURL(imageSnapshot.ref);
  return imageUrl;
};
