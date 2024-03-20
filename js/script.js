// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// MILESTONE 0:
// Creo l’array di oggetti con le informazioni
const infoUser = [
    {
        name: 'Wayne Barnett',
        role: 'Founder&Ceo',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter White',
        role: 'Office Manager',
        image: 'walter-white-office-manager.jpg'
    },
    {
        name: 'Gustavo Frings',
        role: 'Social Media Manager',
        image: 'gustavo-frings-social-media-manager.jpg'
    },
    {
        name: 'Samuele Madrigali',
        role: 'Developer',
        image: 'samuele-madrigali-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];


const firstRow = document.querySelector('.ms-new-row')

// MILESTONE 1:
// Stampo su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for(let i = 0; i < infoUser.length; i++) {
    const thisMember = infoUser[i];
    // console.log(thisMember);

    console.log('Nome: ' + thisMember.name);
    console.log('Ruolo: ' + thisMember.role);
    console.log('Immagine: ' + thisMember.image);

// MILESTONE 2:
// Stampo le stesse informazioni su DOM sottoforma di stringhe
    const newRow = `
        <tr>
            <td>${thisMember.name}</td>
            <td>${thisMember.role}</td>
            <td>${thisMember.image}</td>
        </tr>
            `;
    
    firstRow.innerHTML+= newRow;
}
