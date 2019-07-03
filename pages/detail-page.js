function submitComment(){
    const inptField = document.getElementById('name');
    const name = inptField.value; 
    const textArea = document.getElementById('msg');
    const msg = inptField.value;
    
    const section = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    h3.innerHTML = '${name] said:'
    p.innerHTML = msg;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);

    console.log(comment);
}
