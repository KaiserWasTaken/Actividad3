const modal = new Componentes.Modal({
    title: 'Modal de ejemplo',
    content: 'Este texto fue enviado al constructor por medio de un objeto.'
});

document.querySelector('#abrir-modal').addEventListener('click', function() {
    modal.open();
});

const toast = new Componentes.Toast({ duration: 4000 });
document.querySelector('#mostrar-toast').addEventListener('click', function() {
    toast.show({
        title: 'Accion realizada',
        text: 'Este mensaje desaparece despues de unos segundos.',
        type: 'success'
    });
});

const preguntas = [
    {
        title: 'Que es un componente?',
        content: 'Es una parte de la interfaz que se puede reutilizar.'
    },
    {
        title: 'Acepta contenido dinamico?',
        content: 'Si, los datos llegan por medio de un objeto de configuracion.'
    },
    {
        title: 'Necesita un framework?',
        content: 'No. La libreria funciona con JavaScript puro.'
    }
];

new Componentes.Accordion(document.querySelector('#preguntas'), {
    items: preguntas
});
