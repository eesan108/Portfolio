const mikeBtn1 = document.getElementById("bigMikeFed");
const mikeBtn2 = document.getElementById("bigMikeBathroom");
const mikeBtn3 = document.getElementById("bigMikePetted");
const mikeBtn4 = document.getElementById("bigMikePlayedWith");
const willowBtn1 = document.getElementById("willowFed");
const willowBtn2 = document.getElementById("willowBathroom");
const willowBtn3 = document.getElementById("willowPetted");
const willowBtn4 = document.getElementById("willowPlayedWith");
const theoBtn1 = document.getElementById("theoFed");
const theoBtn2 = document.getElementById("theoBathroom");
const theoBtn3 = document.getElementById("theoPetted");
const theoBtn4 = document.getElementById("theoPlayedWith");
const allComplete = document.getElementById("allComplete")

const mikeTitle = document.getElementById("mikeTitle");
const willowTitle = document.getElementById("willowTitle");
const theoTitle = document.getElementById("theoTitle");

let mike = false;
let willow = false;
let theo = false;


//Store the dynamic tasks for each cat
let mikeTasks = [];
let willowTasks = [];
let theoTasks = [];



// Edit task label function
function editTaskLabel(taskId) {
    const label = document.getElementById(`${taskId}Label`);

    // Create input for editing and set its value to the current label's text
    const input = document.createElement('input');
    input.type = 'text';
    input.value = label.innerText;

    // Replace the label with the input
    label.replaceWith(input);

    // Save on pressing Enter ket or unfocusing the input 
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            saveTaskLabel(input, taskId);
        }
    });
    input.addEventListener('blur', ()=> saveTaskLabel(input, taskId));

    input.focus(); // Focus on the input for immediate editing
}

// Save task label after editing
function saveTaskLabel(input, taskId) {
    const newLabel = document.createElement('span');
    newLabel.id = `${taskId}label`;
    newLabel.innerText = input.value; // Set the label to the new input value

    // Replace the input with the updated label
    input.replaceWith(newLabel);
}

function addTask(cat) {
    const container = document.getElementById(`${cat}Tasks`);
    const taskId = `${cat}Task${Math.random().toString(36).substr(2,9)}`; //Unique task

    //Create new checkbox
    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.id = taskId;

    //Create new editable text input for the label
    const newLabel = document.createElement('span');
    newLabel.id = `${taskId}Label`;
    newLabel.innerText = `New Task for ${cat.charAt(0).toUpperCase() + cat.slice(1)}`;

    const editButton = document.createElement('button');
    editButton.innerText = "Edit";
    editButton.onclick = () => editTaskLabel(taskId);

    //Add new CB and label to the DOM
    container.appendChild(newCheckbox);
    container.appendChild(newLabel);
    container.appendChild(editButton);
    container.appendChild(document.createElement('br'));

    //Add CB to relevant array
    if(cat === 'mike'){
        mikeTasks.push(newCheckbox);
        newCheckbox.addEventListener('change', checkMike); //add Event Listener to new checkbox
        checkMike(); 
    } else if(cat === 'willow') {
        willowTasks.push(newCheckbox);
        newCheckbox.addEventListener('change', checkWillow);
        checkWillow();
    } else if(cat === 'theo') {
        theoTasks.push(newCheckbox);
        newCheckbox.addEventListener('change', checkTheo);
        checkTheo();
    }
} 

    //create


function removeTask(cat) {
    if (cat === 'mike' && mikeTasks.length > 0) {
        const taskToRemove = mikeTasks.pop();
        taskToRemove.nextElementSibling.remove(); //Remove the label (text input)
        taskToRemove.remove(); //Remove the checkbox
    } else if (cat === 'willow' && willowTasks.length > 0) {
        const taskToRemove = willowTasks.pop();
        taskToRemove.nextElementSibling.remove(); //Remove the label
        taskToRemove.remove(); //Remove the checkbox
    } else if (cat === 'theo' && theoTasks.length > 0) {
        const taskToRemove = theoTasks.pop();
        taskToRemove.nextElementSibling.remove(); //Remove the label
        taskToRemove.remove(); //Remove the checkbox
    } 
}


function checkMike(){
    const baseChecks = mikeBtn1.checked && mikeBtn2.checked && mikeBtn3.checked && mikeBtn4.checked
    const dynamicChecks = mikeTasks.every(task => task.checked);

    if (baseChecks && dynamicChecks) {
        console.log("Mike checkboxes are checked!");
        mike = true;
        console.log(mike);
    } else {
        mike = false;
    }
    checkAllCats();
    colorChange(mike, mikeTitle);
}
function checkWillow(){
    const baseChecks = willowBtn1.checked && willowBtn2.checked && willowBtn3.checked && willowBtn4.checked
    const dynamicChecks = willowTasks.every(task => task.checked);

    if (baseChecks && dynamicChecks) {
        console.log("Willow checkboxes are checked!");
        willow = true;
        console.log(willow);
    } else {
        willow = false;
    }
    checkAllCats();
    colorChange(willow, willowTitle);
}
function checkTheo(){
    const baseChecks = theoBtn1.checked && theoBtn2.checked && theoBtn3.checked && theoBtn4.checked
    const dynamicChecks = theoTasks.every(task => task.checked);

    if (baseChecks && dynamicChecks) {
        console.log("Theo checkboxes are checked!");
        theo = true;
        console.log(theo);
    } else {
        theo = false;
    }
    checkAllCats();
    colorChange(theo, theoTitle);
}
function checkAllCats(){
    if(mike && willow && theo){
        allComplete.style.visibility = "visible";
    } else {
        allComplete.style.visibility = "hidden";
    }
}
//Mike
mikeBtn1.addEventListener('change', checkMike);
mikeBtn2.addEventListener('change', checkMike);
mikeBtn3.addEventListener('change', checkMike);
mikeBtn4.addEventListener('change', checkMike);

//Willow
willowBtn1.addEventListener('change', checkWillow);
willowBtn2.addEventListener('change', checkWillow);
willowBtn3.addEventListener('change', checkWillow);
willowBtn4.addEventListener('change', checkWillow);
//THEO
theoBtn1.addEventListener('change', checkTheo);
theoBtn2.addEventListener('change', checkTheo);
theoBtn3.addEventListener('change', checkTheo);
theoBtn4.addEventListener('change', checkTheo);

//Title color changer
function colorChange(cat, element){
    if(cat){
        element.style.backgroundColor = "forestGreen";
    } else {
        element.style.backgroundColor = "rgb(179, 58, 58)";
    }
}