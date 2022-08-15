const data = {
    title: "Modal",
    content: 'content',
    isCloseButton: true
}

const Modal = function() {
    this.init = () => {
    const modal = document.querySelector('.modal');
    modal.addEventListener('click', () => {
        const aadd = document.querySelector('body');
        const add_modal = document.createElement('div');
        add_modal.classList.add('modal');
        data.forEach(({title, content, isCloseButton}) => {
            add_modal.innerHTML = `<div class="modal_title">${title}</div>
                            <div class="modal_content">${content}</div>`;
            if(isCloseButton ==true) this.openButton()
        })
        
        
    })

    
}
    this.openButton = () => {
        const openButton = document.querySelector('.modal');
        const addButton = document.createElement('button');
        addButton.classList.add('button_close');
        addButton.textContent = 'закрыть';

            
        }
    }


window.addEventListener('load', () => {
    const modal = new Modal()
    modal.init(data)
})