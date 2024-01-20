(function(){
    const customerImage = document.querySelector('#customer-img');
    const customerName = document.querySelector('#customer-name');
    const customerText = document.querySelector('#customer-text');

    const btn = document.querySelectorAll('.btn');
    const customers = [];
    let index = 0;

    function Customer(img, name, text){
        this.img = img;
        this.name= name;
        this.text = text;
    }

    function createCustomer(img, name, text){
        let Img = `./img/${img}.jpg`;
        let customer = new Customer(Img, name, text);

        customers.push(customer);
    }

    createCustomer(1, 'Customer1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellat totam reiciendis nemo, ea provident, maxime eligendi corrupti, odit at numquam alias incidunt exercitationem sunt ratione dolorem dicta suscipit! Debitis!');
    createCustomer(2, 'Customer2', 'Lorem ipsum dolor  voluptatibus?consectetur adipisicing elit. Voluptatibus repellat totam reiciendis nemo, ea provident, maxime eligendi corrupti, odit at numquam alias incidunt exercitationem sunt ratione dolorem dicta suscipit! Debitis!');
    createCustomer(3, 'Customer3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellat totam reiciendis nemo, ea provident, maxime eligendi corrupti, odit at numquam alias incidunt exercitationem sunt ratione dolorem dicta suscipit! Debitis!');
    createCustomer(4, 'Customer4', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellat totam reiciendis nemo, ea provident, maxime eligendi corrupti, odit at numquam alias incidunt exercitationem sunt ratione dolorem dicta suscipit! Debitis!');
    createCustomer(5, 'Customer5', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellat totam reiciendis nemo, ea provident, maxime eligendi corrupti, odit at numquam alias incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. At cum neque suscipit nesciunt, deserunt quo accusantium! Optio voluptatum necessitatibus veritatis itaque culpa velit, facere corrupti tempora maxime iste reiciendis voluptatibus?');

    btn.forEach(function(button){
        button.addEventListener('click',function(e){
            if (e.target.parentElement.classList.contains('prevBtn')){
                if(index == 0){
                    index = customers.length;
                }
                index--;
                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name;
                customerText.textContent = customers[index].text;
            }

            if (e.target.parentElement.classList.contains('nextBtn')){
                if(index == customers.length){
                    index = 0;
                }
                index++;
                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name;
                customerText.textContent = customers[index].text;
            }
        })
    })
})();