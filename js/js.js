let email = document.getElementById('correo');
let password = document.getElementById('password');
let btn = document.getElementById('btn');

class cargar {

    constructor(correo,contra, id) {
        this.id = id;
        this.correo = correo;
        this.contra = contra;

    }
    asignarId(array) {
        this.id = array.length;
    }
}
const usuariso = [{id:1,correo:'admin@admin',contra:'admin'}];

localStorage.setItem('correo', 'holas' );




let asd = (localStorage.getItem('correo')== email.value );




console.log(asd);

const datos =[];


let usuario = [{
    id: 1,
    nombre: 'televisor',
    codigo: 'UN32',
    precio: 80000,
    imagen: './img/televisor.png'
}, {
    id: 2,
    nombre: 'HELADERA',
    codigo: 'PH35',
    precio: 390000,
    imagen: './img/heladera.png'
}, {
    id: 3,
    nombre: 'PC',
    codigo: '553B',
    precio: 134999,
    imagen: './img/pc.png',

}, {
    id: 4,
    nombre: 'CAMPERA',
    codigo: '552B',
    precio: 14999,
    imagen: './img/ropa2.png'

}, {
    id: 5,
    nombre: 'CELULAR',
    codigo: '523B',
    precio: 154999,
    imagen: './img/celular2.png'

}, {
    id: 6,
    nombre: 'PABAELECTRICA',
    codigo: '563F',
    precio: 17999,
    imagen: './img/pabaelectrica.png'

}, {
    id: 7,
    nombre: 'MAQUINADECOSER',
    codigo: '201F',
    precio: 134999,
    imagen: './img/maquinadecoser.png'

}, {
    id: 8,
    nombre: 'VAPORERA',
    codigo: 'BFQF',
    precio: 14999,
    imagen: './img/vaporera.png'

}, {
    id: 9,
    nombre: 'CALOVENTO',
    codigo: 'BFQ1',
    precio: 1999,
    imagen: './img/caloventor.png'

}, {
    id: 10,
    nombre: 'CARPA',
    codigo: 'Q12F',
    precio: 134999,
    imagen: './img/carpa.png'
}];


const guardar = (clave, valor) => {localStorage.setItem(clave, valor)};
/* for (const user of usuario) {
guardar(usuario.id, JSON.stringify(user));
} */
 guardar('user', JSON.stringify(usuario));



btn.addEventListener('click', () => {

let dat = localStorage.setItem('dast',JSON.stringify(datos));

console.log(dat);
/* for (let i = 0; i < dat.length; i++) {
    const element = array[i];
    const ver = element;
    ( element +' ' +  ver);
    
} */


if (asd==true) {
    alert('noasdasasasdasdasda');
    
}else{
    alert('asdas    de la contrario');  
}
    const vendedor = new cargar(email.value, password.value,);
const car = JSON.stringify(datos);

    datos.push(vendedor);

    vendedor.asignarId(datos);
     

    console.log(car);
    localStorage.setItem('datos',datos);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
});


