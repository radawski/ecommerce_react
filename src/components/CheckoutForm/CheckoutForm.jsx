import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CheckoutForm =({onConfirm})=>{
    const [name, setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')

    const handleConfirm =(event)=>{
        event.preventDefault()

        const userData ={
            name,phone,email
        }

        onConfirm(userData)

    }

    return(
        <Form onSubmit={handleConfirm}>
            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Nombre"
                    value={name} 
                    onChange={({target}) => setName(target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Ingresar telefono"
                    value={phone} 
                    onChange={({target}) => setPhone(target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresar email" value={email} onChange={({target}) => setEmail(target.value)}/>
                <Form.Text className="text-muted">
                Nunca compartiremos su correo electrónico con nadie más.
                </Form.Text>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Crear Orden
            </Button>
        </Form>
    )

}

export default CheckoutForm