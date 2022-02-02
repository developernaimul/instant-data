const skills = document.querySelectorAll(`.skill`);
const result = document.querySelector(`.result`);

skills.forEach(skill =>{

    skill.addEventListener(`change`, function(){

        let all_data = document.querySelectorAll(`.skill:checked `)

        
        let skill_arr = [];
        all_data.forEach( data =>{
            skill_arr.push(data.value);
        })
        
        let list = '';
        skill_arr.map( data => {
            list += `<li class="list-group-item"> ${data} </li>`;
        })

        result.innerHTML = list;
    })
    
})