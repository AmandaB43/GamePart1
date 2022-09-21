let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)


let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)

let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})
function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}
function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('click', function(){
        item.remove()
     let inventoryItem = document.createElement('img')
        inventoryItem.src = url
        inventory.append(inventoryItem)
        })
     }
newImage('assets/tree.png', 200, 450)
newImage('assets/pillar.png', 350, 250)
newImage('assets/crate.png', 150, 350)
newImage('assets/well.png', 500, 575)

newItem('assets/shield.png', 165, 335)
newItem('assets/staff.png', 600, 250)