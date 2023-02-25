const dropdownBtn = document.querySelector('.toggle-icon')
const dropdownMenu = document.querySelector('.dropdown')


const toggleDropdown = function () {
    dropdownMenu.classList.toggle('dropdown--show')
    dropdownBtn.classList.toggle('toggle-icon--rotate')
}


dropdownBtn.addEventListener('click', function(e) {
    e.stopPropagation()
    toggleDropdown()
})


// document.addEventListener('click', function () {
//     if (dropdownMenu.classList.contains('dropdown--show')) {
//         toggleDropdown()
//     }
// })
