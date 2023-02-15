import Image from "next/image";
import banner from "../public/banner.png";

function Banner() {
  return (
    <div>
      <Image src={banner} width={100} height={100} alt="Banner" />
    </div>
  );
}

export default function App() {
  return <Banner />;
}
