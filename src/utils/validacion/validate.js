import { regexEmail } from "../../components/Contact/Contact"

export default function validate(inputs){
    let errors = {}
    if(!inputs.name){
        errors.name = "Se requiere un nombre"
    }
    if(!regexEmail.test(inputs.email)){
        errors.email = "Debe ser un correo electrónico"
    }
    if(!inputs.message){
        errors.message = "Se requiere un mensaje"
    }
    return errors
}