// function enter_values(){
//     let a = prompt('Enter the value to solve its calculation: ')
//     let x = document.getElementsByClassName('screen')
    
//     x.value = document.write(a)
    
// }



// let a = []
// function  select_value(){
//     let x = event.target;
//     let T = x.innerText;
//     console.log(T)
//     a.push(T)
//     console.log(a)
// }


let a = ''
let b = []
let c = []
let cI = []
let d = ['C','%','/','*','-','+']
function select_value(){
    let off = document.getElementById('onoff')
    if(off.innerText === 'ON'){
    let x = event.target;
    let y = x.innerText;
    if(y!="="){
        a+=y
        let z = document.getElementById('screen')
        z.innerText = a;
        
    }
    else{
        let j;
        if(a.includes('*')){
            j = (a.split('*'))
            let z = document.getElementById('screen')
            z.innerText = (Number(j[0])*Number(j[1]))
        }
        else if(a.includes('/')){
            j = (a.split('/'))
            let z = document.getElementById('screen')
            z.innerText = (Number(j[0])/Number(j[1]))
        }else if(a.includes('+')){
            j = (a.split('+'))
            let z = document.getElementById('screen')
            z.innerText = (Number(j[0])+Number(j[1]))
        }else if(a.includes('-')){
            j = (a.split('-'))
            let z = document.getElementById('screen')
            z.innerText = (Number(j[0])-Number(j[1]))
        }else if(a.includes('%')){
            j = (a.split('%'))
            let z = document.getElementById('screen')
            z.innerText = (Number(j[0])%Number(j[1]))
        }else if(a.includes('^')){
            j = (a.split('^'))
            let z = document.getElementById('screen')
            z.innerText = (Number(j[0])**Number(j[1]))
        }}
    }
        
    }
function clearall(){
    let x = event.target
    let y = x.innerText
    if(y == 'Clear All'){
        let z = document.getElementById('screen')
        z.innerText = ''
        a = []
    }
}

function onoff(){
    let x = event.target
    let y = x.innerText
    if(y === 'OFF'){
        x.innerText = 'ON'
        x.style.background = 'Green'
    }else{
        x.innerText = 'OFF'
        x.style.background = 'red'
    }
}



