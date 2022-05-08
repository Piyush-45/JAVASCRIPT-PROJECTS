// traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });



//using selectors inside the element


const questions = document.querySelectorAll('.question');
questions.forEach(function(question){
    // console.log(question)
    const btn = question.querySelector('.question-btn')
    // console.log(btn)
    btn.addEventListener('click', function(){
//   to add funtionality if one is open, close the another one question
/**as the questions one question  is not gonna same to other question of article so it will remove the show-text from it  */
        questions.forEach(function(item){
            if(item!== question){
                item.classList.remove("show-text");
            }
        })
        question.classList.toggle("show-text");
    })
    
});
