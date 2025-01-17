const form = document.getElementById('data-form');
const fullName = document.getElementById('name-input');
const numGroup = document.getElementById('group-input');
const table = document.getElementById('table');
const error = document.getElementById('error');
const clearTable = document.getElementById('deleteAll-btn');

form.addEventListener('submit', () => {
    const name = fullName.value.trim();
    const group = numGroup.value.trim();
    if (!name || !group) {
        error.textContent = 'Все поля являются обязательными.';
    } else {
        error.textContent = '';
        const newRow = document.createElement('tr');
        newRow.innerHTML = '<td>' + fullName.value.trim() + '</td>' +
            '<td>' + numGroup.value.trim() + '</td>' +
            '<td><button class="delete-button">X</button></td>';
        table.append(newRow);
        fullName.value = '';
        numGroup.value = '';
    }
});

table.addEventListener('click', (event) => {

        if (event.target.classList.contains('delete-button')) {
            const row = event.target.closest('tr');
            if (row) {
                table.removeChild(row);
            }
        }
    }
)
clearTable.addEventListener('click', () => {
    table.innerHTML = '';
});
