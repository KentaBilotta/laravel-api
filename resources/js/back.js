require('./bootstrap');

const inputTitle = document.querySelector('[data-sluger=title]');
const inputSlug = document.querySelector('[data-sluger=slug]');
const btnGetSlug = document.querySelector('[data-sluger=button]');

if (inputTitle && inputSlug && btnGetSlug) {
    inputTitle.addEventListener('focusout', function() {
        if (inputSlug.value === '') {
            getSlug(inputTitle.value);
        }
    });

    btnGetSlug.addEventListener('click', function() {
        getSlug(inputTitle.value);
    });

    function getSlug(title) {
        let slug;
        axios.get('/admin/categories/slug?title=' + title)
            .then(response => inputSlug.value = response.data.slug);
    }
}
