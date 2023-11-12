function getNumber(val){
    document.getElementById('output').value+=val
}


function clearField(){
    document.getElementById('output').value=""
}

function getSum(){
    var inVal=document.getElementById('output').value
    var nums=eval(inVal)
    document.getElementById('output').value=nums
}