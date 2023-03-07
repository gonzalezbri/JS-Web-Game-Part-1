function newImage(url, left, bottom) {

let element = document.createElement('img')
element.src = url
element.style.position = 'fixed'
element.style.left = `${left}px`
element.style.bottom = `${bottom}px`
document.body.append(element)

element.addEventListener('click', function(){
    element.remove()
})
}
function newItem(url, left, bottom){
    let object = newImage(url,left,bottom)

    object.addEventListener('dblclick',() => {
        object.remove()
    })
}

newImage('assets/pine-tree.png',450,200)
newImage('assets/green-Character.gif',200,200)
newImage('assets/tree.png',200,500)
newImage('assets/pillar.png',350,100)
newImage('assets/crate.png',150,200)
newImage('assets/well.png',500,425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)


