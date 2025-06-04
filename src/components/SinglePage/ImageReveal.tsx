'use client'

import React from 'react'

import { useEffect } from 'react'

const ImageReveal = () => {

    useEffect(() => {


let scroll = 0;
const conponent = document.querySelector('.container');
const windowHeight = window.innerHeight;
document.addEventListener('scroll',()=>{
    scroll = window.pageYOffset;
    if(scroll >= 0 && scroll < windowHeight){
        //to remove all classes sauf .container
        conponent?.setAttribute('class','container');
        conponent?.classList.add('slide1')
    }
    else if(scroll >= windowHeight && scroll < 2*windowHeight){
        //to remove all classes sauf .container
        conponent?.setAttribute('class','container');
        conponent?.classList.add('slide2');
    }
    else if(scroll >= 2*windowHeight && scroll < 3*windowHeight){
        //to remove all classes sauf .container
        conponent?.setAttribute('class','container');
        conponent?.classList.add('slide3');
    }
    else if(scroll >= 3*windowHeight && scroll < 4*windowHeight){
        //to remove all classes sauf .container
        conponent?.setAttribute('class','container');
        conponent?.classList.add('slide4');
    }
})
    }, [])
  return (
    <div className="container">
    <section><h1>Section 1</h1></section>
    <section><h1>Section 2</h1></section>
    <section><h1>Section 3</h1></section>
    
</div>
  )
}

export default ImageReveal