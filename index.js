function handleForm() {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault()
        const entry = $(event.currentTarget).find('input[name="shopping-list-entry"]').val()
        $(".shopping-list").append(item(entry))
    })
    
    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
        this.closest('li').remove()
    })

    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
        const targetItem = 
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
    })
}

function item(entry) {
    return `<li>
                <span class="shopping-item">${entry}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`
    }





$(handleForm)