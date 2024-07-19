document.querySelector('.download-btn').addEventListener('click',(e)=>{
  e.preventDefault()
  window.open('https://drive.google.com/file/d/1hX-HBgmhDptxCDwxYs_VfJ5-NXFY5tA6/view')
})

setInterval(()=>{
  const carousels=document.querySelectorAll('.carousel-item')
  carousels.forEach((c)=>{
    c.style.transform= 'translateX(-150px)';
  })
  const bigone=document.querySelector('.bigone')
  bigone.classList.remove('bigone')
  const nextOne=bigone.previousElementSibling
  if (nextOne) {
    nextOne.classList.add('bigone')
  }
  else{
     const last=document.querySelector('.carousel-item:last-child');
     last.classList.add('bigone')
  }
  console.log(nextOne);
},1000)