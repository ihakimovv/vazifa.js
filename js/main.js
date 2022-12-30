var elForm=document.querySelector('.form')
var elName=document.querySelector('.inp1')
var elYear=document.querySelector('.inp2')
var elColor=document.querySelector('.inp3')
var elPosit=document.querySelector('.inp4')
var elSale=document.querySelector('.inp5')
var elBtn=document.querySelector('.btn')
 var arr=[]

elBtn.addEventListener('click', function(){
    var obj={
        name: elName.value,
        year: elYear.value,
        color:elColor.value,
        posit:elPosit.value,
        sale:elSale.value
    }
    arr.push(obj)
    console.log(arr);

})