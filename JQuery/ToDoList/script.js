$(() => {
    const list = $('#list');
    $('#prepend').click(() => {
        const elementValue = $('#element').val();
        const liItem = `<li>${elementValue}</li>`
        list.prepend(liItem);
    })

    $('#append').click(() => {
        const elementValue = $('#element').val();
        const liItem = `<li>${elementValue}</li>`
        list.append(liItem);
    });
})