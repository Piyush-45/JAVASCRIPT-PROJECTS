// set initial count
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// steps
// we selected all btn from above step
// we used forEach to loop through every btn with same class and add a event listner as a 'click' add a event object in funtion and then we get classList using the event object(e)
// then we use conditional to increase or decrease span value
btns.forEach(function (btn){
    btn.addEventListener("click", function(e){
        const styles =e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;

        }else{
            count = 0;
        }

        // changing the color
        if(count>0){
            value.style.color = "green"
        }else if(count<0){
            value.style.color = "red"
        }
        else{
            value.style.color = "black"
        }
        // after checking the above conditons, this will change the inner vale of span 
        value.textContent = count;
    }); 
});