const target = document.querySelectorAll(".box");
const observer = new IntersectionObserver((entrise) => {
  entrise.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('on');
    } else{
      entry.target.classList.remove('on');
    }
  });
});


target.forEach((target)=>{
  observer.observe(target);
});

