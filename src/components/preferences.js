export function preferences() {
  const prefer = document.createElement('section');

  prefer.innerHTML = `<img src=""></img>
       <h2 id="Why">Porqué estás aqui?</h2>
        <form>
            <ul id="pref">
            <li><button id="teacher" class="ask">Soy profesor frente a grupo, quiero aportar y recibir ideas </button> </li>
            <li><button id="kidsTeacher" class="ask">Soy pedagogo, quiero aportar y recibir ideas</li>
            <li><button id="creative" class="ask" >Solo vengo por inspiración</button></li>
            <li><button id="artist" class="ask"> Soy arte educador/mediador, quiero aportar y recibir ideas</button></li>
            </ul>
        </form>`;

  return prefer;
}

export default preferences;
