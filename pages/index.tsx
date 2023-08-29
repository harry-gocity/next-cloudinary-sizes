import {CldImage} from "next-cloudinary";

const src = "gc-v1/bangkok/Bangkok_Fireworks.jpeg"

export default function Home() {
  return (
    <div>
      <CldImage layout={"fill"} sizes="10px" src={src} alt={''}/>
    </div>
  )
}
