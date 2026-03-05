 const dialog = document.getElementById('modal')
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById("close")
const addBtn = document.getElementById('add');
const taskInput = document.querySelector('input[type="text"]');
const taskContainer = document.querySelector('.flex.bg-white.w-4xl');

openBtn.addEventListener('click',() =>{
    dialog.showModal()
})

closeBtn.addEventListener('click',() => {
    dialog.close()
})

let selectedPriority = null;
let selectedStatus = null;
openBtn.addEventListener('click', () => {
    resetModal();
    dialog.showModal();
});

closeBtn.addEventListener('click', () => {
    dialog.close();
});

const priorityBtns = document.querySelectorAll(".prty-btn");
priorityBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        priorityBtns.forEach(b => {
            b.classList.remove("bg-red-400", "bg-orange-400", "bg-green-400", "text-white");
        });
        const text = btn.innerText.trim();
        if (text === "High") {
            btn.classList.add("bg-red-400", "text-white");
        } else if (text === "Medium") {
            btn.classList.add("bg-orange-400", "text-white");
        } else if (text === "Low") {
            btn.classList.add("bg-green-400", "text-white");
        }
    });
});

const statusBtns = document.querySelectorAll(".stt-btn");
statusBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        statusBtns.forEach(b => {
            b.classList.remove("bg-blue-400", "text-white");
            b.classList.add("text-blue-400");
        });
        btn.classList.add("bg-blue-400", "text-white");
        btn.classList.remove("text-blue-400");
        console.log("Selected Status:", btn.getAttribute("data-value"));
    });
});

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const taskName = taskInput.value.trim();
    if (!taskName) {
        alert('Please fill in the task name!');
        taskInput.focus();
        return;
    }
    const priority = selectedPriority || 'Medium';
    const status = selectedStatus || 'To Do';
    const newTask = createTaskElement(taskName, priority, status);
    taskContainer.insertAdjacentElement('afterend', newTask);
    dialog.close();
});

function createTaskElement(name, priority, status) {
    const priorityColors = {
        High: 'text-red-500',
        Medium: 'text-orange-400',
        Low: 'text-green-500'
    };

    const div = document.createElement('div');
    div.className = 'flex bg-white w-4xl m-auto mt-4 shadow-md shadow-gray-300-100 py-7 rounded-tl-3xl rounded-br-3xl items-center';

    div.innerHTML = `
        <div class="font-bold w-1/2 text-xl flex ml-5">
            <p>${name}</p>
        </div>
        <div class="w-1/2 font-bold text-xl flex justify-evenly gap-20 items-center">
            <p class="${priorityColors[priority]}">${priority}</p>
            <p>${status}</p>
            <div class="flex gap-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="blue" width="28px" height="28px" style="cursor:pointer">
                    <path d="M535.6 85.7C513.7 63.8 478.3 63.8 456.4 85.7L432 110.1L529.9 208L554.3 183.6C576.2 161.7 576.2 126.3 554.3 104.4L535.6 85.7zM236.4 305.7C230.3 311.8 225.6 319.3 222.9 327.6L193.3 416.4C190.4 425 192.7 434.5 199.1 441C205.5 447.5 215 449.7 223.7 446.8L312.5 417.2C320.7 414.5 328.2 409.8 334.4 403.7L496 241.9L398.1 144L236.4 305.7zM160 128C107 128 64 171 64 224L64 480C64 533 107 576 160 576L416 576C469 576 512 533 512 480L512 384C512 366.3 497.7 352 480 352C462.3 352 448 366.3 448 384L448 480C448 497.7 433.7 512 416 512L160 512C142.3 512 128 497.7 128 480L128 224C128 206.3 142.3 192 160 192L256 192C273.7 192 288 177.7 288 160C288 142.3 273.7 128 256 128L160 128z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 640 640" width="28px" height="28px" style="cursor:pointer" class="delete-btn">
                    <path d="M262.2 48C248.9 48 236.9 56.3 232.2 68.8L216 112L120 112C106.7 112 96 122.7 96 136C96 149.3 106.7 160 120 160L520 160C533.3 160 544 149.3 544 136C544 122.7 533.3 112 520 112L424 112L407.8 68.8C403.1 56.3 391.2 48 377.8 48L262.2 48zM128 208L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 208L464 208L464 512C464 520.8 456.8 528 448 528L192 528C183.2 528 176 520.8 176 512L176 208L128 208zM288 280C288 266.7 277.3 256 264 256C250.7 256 240 266.7 240 280L240 456C240 469.3 250.7 480 264 480C277.3 480 288 469.3 288 456L288 280zM400 280C400 266.7 389.3 256 376 256C362.7 256 352 266.7 352 280L352 456C352 469.3 362.7 480 376 480C389.3 480 400 469.3 400 456L400 280z"/>
                </svg>
            </div>
        </div>
    `;
    
    div.querySelector('.delete-btn').addEventListener('click', () => {
        div.remove();
    });
    return div;
}
document.getElementById('confirm-delete-btn').addEventListener('click', () => {
    if (taskToDelete) { taskToDelete.remove(); taskToDelete = null; }
    deleteModal.close();
});
document.getElementById('cancel-delete-btn').addEventListener('click', () => {
    taskToDelete = null;
    deleteModal.close();
});
const editBtn = document.getElementById('edit-modal')
editBtn.addEventListener('click', ()=>{
     dialog.showModal()
})


