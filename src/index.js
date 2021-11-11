const container = document.querySelector('.container');
let numberBox = '';

function createBox(input)
{
    for(let i = 1; i<=input; i++)
    {
        const randomColor = Math.floor(Math.random()*16777215).toString(16); 
        
        const div = document.createElement('div');
        container.append(div);
        div.style.cssText = `background-color : #${randomColor} `;

        const p = document.createElement('p');
        div.append(p);
        p.style.color = 'black';
        p.style.fontWeight = 'bold';
        div.style.display = 'flex';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        p.innerText = `#${randomColor}`;

        const xButton = document.createElement('button');
        xButton.id = 'xButton';
        xButton.innerText = 'x';
        div.append(xButton);
    };

};

container.addEventListener('click', function(event)
{
    if(event.target.id == 'submit')
    {
        numberBox = event.target.previousElementSibling.value;
        createBox(numberBox);
        event.target.previousElementSibling.value = '';
    }
    
    else if(event.target.id == 'xButton')
    {
        event.target.parentElement.remove();
    }

});




