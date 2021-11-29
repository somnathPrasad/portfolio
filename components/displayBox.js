import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function DisplayBox({data}) {
  // const [dataset, setdataset] = useState(data[0])
  // var currentData = 0;
  // setInterval(() => {
  //   if(currentData === 3){
  //     currentData=0;
  //   }else{
  //   currentData++;
  //   }
  //   setdataset(data[currentData])
  // }, 3000);

  return (
    <div>
      <div>
        {/* <Image alt="website image" src={dataset.img}/> */}
      </div>
    </div>
  );
}
