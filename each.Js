const panels = document.querySelectorAll('.panel')

//adding a class of "active" to the class panel
panels.forEach(panel => {
   panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList. add('active')
   })
})
// prevents the photos from staying expanded
function removeActiveClasses(){
    panels.forEach(panel => {
    panel.classList.remove('active')
    })
}

