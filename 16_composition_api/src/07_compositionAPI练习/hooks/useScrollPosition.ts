import {ref} from 'vue'

export default function(){
    const scrollX=ref(0)
    const scrollY=ref(0)

    document.addEventListener("scroll",()=>{
        scrollX.value=window.scrollX;
        scrollY.value=window.scrollY;
        console.log(scrollY.value);
    })

    return {
        scrollX,
        scrollY
    }
}