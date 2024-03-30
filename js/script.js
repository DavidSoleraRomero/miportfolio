document.addEventListener("DOMContentLoaded", function() {
    var contents = document.querySelectorAll('.content');

    function handleScroll() {
        var windowHeight = window.innerHeight;

        contents.forEach(function(content) {
            var contentTop = content.getBoundingClientRect().top;

            if (contentTop < windowHeight * 0.75) {
                content.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
});