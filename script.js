//This is a simple funciton to create an alert bar to show JavaScript is working

//Searching the document for the id 'jsButton'
//Created an click event listener to notice when 'jsButton' is clicked
//Created a functino to set an alert menu to inform it works
//Enjoy the fruits of my labor
document.getElementById('jsButton').addEventListener('click', function(){
    alert('Congratulations! Your JavaScript Works!!!');
});

// document.getElementById('domTest').innerText = 'Hello';
// document.getElementById('domTest').style.color = 'red';

// Dark Mode Toggle Event
const toggleDarkModeButton = document.getElementById('jsToggleBtn');

toggleDarkModeButton.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');
    //Creating the query assignment for each section
    document.querySelectorAll('section').forEach(section =>{
        section.classList.toggle('dark-mode');
    });
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
})
