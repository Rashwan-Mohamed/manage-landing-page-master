const menu = document.querySelector(".mmenu");
let logical = document.querySelector('.overlay');
let Manage = document.querySelector('.Manage');
let cir = document.querySelectorAll('.cir');
// array of objects to hold people info!
const people = [{

    imgSource: 'avatar-anisha.png',
    name: 'Anisha Li',
    para: `Manage has supercharged our team’s workflow. The ability to maintain
visibility on larger milestones at all times keeps everyone motivated.`


}, {

    imgSource: 'avatar-shanai.png',
    name: 'Shanai Gough',
    para: `Their software allows us to track, manage and collaborate on our projects
    from anywhere. It keeps the whole team in-sync without being intrusive.`






}, {
    imgSource: 'avatar-richard.png',
    name: 'Richard Watts',
    para: `Manage allows us to provide structure and process. It keeps us organized
    and focused. I can’t stop recommending them to everyone I talk to!`







}, {

    imgSource: 'avatar-ali.png',
    name: 'Ali Bravo',
    para: `We have been able to cancel so many other subscriptions since using
    Manage. There is no more cross-channel confusion and everyone is much
    more focused.`






}];




menu.addEventListener('click', () => {

    menu.classList.toggle('open');

    logical.classList.toggle('non');

    if (!logical.classList.contains('non')) {


        document.querySelector('body').style.overflowY = 'hidden';
    }

    else {
        document.querySelector('body').style.overflowY = 'scroll';

    }


})



window.addEventListener('resize', () => {

    if (this.window.innerWidth <= '505') {

        Manage.innerHTML = `<article>
        <img src="avatar-anisha.png" alt="">

        <h4> Anisha Li
        </h4>
        <p class="para">
          “Manage has supercharged our team’s workflow. The ability to maintain
          visibility on larger milestones at all times keeps everyone motivated.”
        </p>
      </article>`;


    }

    else {

        logical.classList.add('non');

        Manage.innerHTML = `<article>
          <img src="avatar-anisha.png" alt="">

          <h4> Anisha Li
          </h4>
          <p class="para">
            “Manage has supercharged our team’s workflow. The ability to maintain
            visibility on larger milestones at all times keeps everyone motivated.”
          </p>



        </article>
        <article>
          <img src="avatar-shanai.png" alt="">
          <h4>Shanai Gough</h4>
          <p class="para">
            “Their software allows us to track, manage and collaborate on our projects
            from anywhere. It keeps the whole team in-sync without being intrusive.”
          </p>



        </article>
        <article><img src="avatar-richard.png" alt="">

          <h4>Richard Watts</h4>
          <p class="para"> “Manage allows us to provide structure and process. It keeps us organized
            and focused. I can’t stop recommending them to everyone I talk to!”
          </p>

        </article>`;


    }



})



window.addEventListener('DOMContentLoaded', function () {

    if (this.window.innerWidth <= '505') {

        Manage.innerHTML = `<article>
        <img src="avatar-anisha.png" alt="">

        <h4> Anisha Li
        </h4>
        <p class="para">
          “Manage has supercharged our team’s workflow. The ability to maintain
          visibility on larger milestones at all times keeps everyone motivated.”
        </p>
      </article>`;


    }

    else {

        logical.classList.add('non');

        Manage.innerHTML = `<article>
          <img src="avatar-anisha.png" alt="">

          <h4> Anisha Li
          </h4>
          <p class="para">
            “Manage has supercharged our team’s workflow. The ability to maintain
            visibility on larger milestones at all times keeps everyone motivated.”
          </p>



        </article>
        <article>
          <img src="avatar-shanai.png" alt="">
          <h4>Shanai Gough</h4>
          <p class="para">
            “Their software allows us to track, manage and collaborate on our projects
            from anywhere. It keeps the whole team in-sync without being intrusive.”
          </p>



        </article>
        <article><img src="avatar-richard.png" alt="">

          <h4>Richard Watts</h4>
          <p class="para"> “Manage allows us to provide structure and process. It keeps us organized
            and focused. I can’t stop recommending them to everyone I talk to!”
          </p>

        </article>`;


    }



}
)

cir.forEach((item) => {

    item.addEventListener('click', (e) => {

        e.target.classList.add('fill');

        cir.forEach((son) => {


            if (!(son.dataset.id == e.target.dataset.id)) {
                son.classList.remove('fill');

            }


        })

        changeItem(people[e.target.dataset.id - 1]);



    })




})


function changeItem(item) {

    Manage.innerHTML = `<article>
    <img src="${item.imgSource}" alt="">

    <h4> ${item.name}
    </h4>
    <p class="para">
      “${item.para}”
    </p>
  </article>`;




}