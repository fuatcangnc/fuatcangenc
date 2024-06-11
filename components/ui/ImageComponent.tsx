import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

const ImageComponent = ({ value }) => {
  const { asset, alt } = value;
  const imageUrl = urlForImage(asset)
  return (
    <div className="my-4">
      <Image
        src={imageUrl}
        alt={alt || "Image"}
        layout="responsive"
        width={800}
        height={600}
        objectFit="contain"
        className="rounded-lg"
      />
    </div>
  );
};

export default ImageComponent;
