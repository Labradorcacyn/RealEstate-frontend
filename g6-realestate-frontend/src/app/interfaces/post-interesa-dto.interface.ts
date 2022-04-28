export class PostInteresaDto{
    nombre: string;
    apellidos: string;
    direccion: string;
    email: string;
    telefono: string;
    avatar: string;
    mensaje: string;

    constructor() {
      this.nombre = "";
      this.apellidos = "";
      this.direccion = "";
      this.email = "";
      this.telefono = "";
      this.avatar = "";
      this.mensaje = "";
    }
  }