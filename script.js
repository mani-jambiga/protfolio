const toggleIcon=document.querySelector(".toggle-icon")

toggleIcon.addEventListener("click",()=>{
    toggleIcon.classList.toggle("fa-solid")
    toggleIcon.classList.toggle("fa-regular")
    document.body.classList.toggle("dark-mode")
});