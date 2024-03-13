export default function animacaoScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    const activeClass = 'ativo';
    
    if(sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if(isSectionVisible) {
                    section.classList.add(activeClass);
                } else {
                    section.classList.remove(activeClass);
                }
            });
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}
