const form = document.querySelector('#form')
const ans = document.querySelector('#result')

form.addEventListener('submit' , function(e){
    e.preventDefault()
    const first = parseInt(form.first.value);
    const second = parseInt(form.second.value);
    const third = parseInt(form.third.value);

    console.log(first,second,third)

    if ( checkValid(first,second,third)){
        console.log("valid traingle")
        const s = (first + second + third)/2
        const area = Area(s, first , second , third)
        ans.innerText = `Area of a traingle is ${area} `
    } else {
        console.log("invalid traingle")
    }
})

const checkValid = (first,second,third) => {
    if( first+  second >third &&
        second + third >first &&
        first+ third > second) {
            return true
        }
    else {
        ans.innerText = 'Enter the valid lengths of a traingle'
        return false
    }
}

const Area = (s, first,second,third) => {
    const a = Math.sqrt(s*(s-first)*(s-second)*(s-third))
    return a
}