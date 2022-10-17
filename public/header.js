import Image from 'next/image'
import Document, { Html, Head, Main, NextScript} from 'next/document'
import { useState, useEffect } from 'react';

import photo1 from './photo1.jpg';
import photo2 from './photo2.jpg';
import photo3 from './photo3.jpg';
import photo4 from './photo4.jpg';
import photo5 from './photo5.jpg';
import photo6 from './photo6.jpg';
import photo7 from './photo7.jpg';
import photo8 from './photo8.jpg';
import photo9 from './photo9.jpg';
import photo10 from './photo10.jpg';
import photo11 from './photo11.jpg';
import photo12 from './photo12.jpg';
import photo13 from './photo13.jpg';
import photo14 from './photo14.jpg';
import photo15 from './photo15.jpg';
import photo16 from './photo16.jpg';
import photo17 from './photo17.jpg';
import photo18 from './photo18.jpg';
import photo19 from './photo19.jpg';
import photo20 from './photo20.jpg';
import photo21 from './photo21.jpg';
import photo22 from './photo22.jpg';
import photo27 from './photo27.jpg';
import photo28 from './photo28.jpg';
import photo29 from './photo29.jpg';
import photo30 from './photo30.jpg';
import photo31 from './photo31.jpg';
import photo32 from './photo32.jpg';
import photo33 from './photo33.jpg';
import photo34 from './photo34.jpg';

let images = [photo12, photo12]
let landscapes = [photo12, photo11, photo5, photo11, photo5]
let hero = [photo8, photo8, photo8]

function Header() {
   const [currentImage, setCurrentImage] = useState(0);
   var counter = 0;
   var timer = [50, 1000]

   useEffect(() => {
        const intervalId = setInterval(() => {
           if (counter == 0){
             counter++;
             setCurrentImage(images[Math.floor(Math.random() * images.length)]);
           } else if (counter == 1) {
             counter++;
             setCurrentImage(landscapes[Math.floor(Math.random() * landscapes.length)]);
           } else {
              counter = 0;
              setCurrentImage(hero[Math.floor(Math.random() * hero.length)]);
           } 
        }, timer[0])
        
        return () => clearInterval(intervalId);
    }, [])
   
   return<Image 
         src={currentImage}
         height={700}
         width={500}
         />
}

export default Header
