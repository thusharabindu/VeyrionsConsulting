const menu=document.querySelector('.menu'), nav=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.flexDirection='column';nav.style.position='absolute';nav.style.top='70px';nav.style.left='0';nav.style.right='0';nav.style.background='#fff';nav.style.padding='22px 5%';nav.style.borderBottom='1px solid #ddd'});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{if(window.innerWidth<901)nav.style.display='none'}));
