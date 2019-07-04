function doesNotPassAllValidations(name, msg) {
    if (!name || !msg) {
        alert('You forgot to enter your name or message');
        return true;
    } 
    if (msg.length > 280) {
        alert('Your message is too long');
    } 
    return false;
}

// Making sure not one of them is empty...
function checkAllField(name, msg){
    if ((!name && msg) || (name && !msg)){
        alert('Name or Msg field is empty');
        return true;
    }
    return false;
}  

//Changing first letter to UpperCase
function checkUpperCase(name){
   return name.charAt(0).toUpperCase() + name.slice(1);

}



function submitComment() {  
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value
    
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
  
    h3.innerHTML = `${checkUpperCase(name)} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
    
    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)
  
    inputField.value = null
    textArea.value = null

    

    if(doesNotPassAllValidations(name, msg)){
        return null;
    }

    if(checkAllField(name, msg)){
        return null;
    }
    // if(doesNotHaveName(name, msg)){
    //     return null;
    // }

}