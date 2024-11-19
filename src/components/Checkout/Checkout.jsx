import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, getDocs, query, where, writeBatch, documentId } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

const Checkout = () => {
    const [loading,setLoading]= useState(false)
    const [orderId, setOrderId]= useState('')

    const {cart,total,clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)

        try{
            const objOrder ={
                buyer: {name,phone,email},
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock =[]

            const ids =cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            //IDs se dividen en lotes de máximo 10 elementos para cumplir con el límite de Firebase.
            const batches = [];
            while (ids.length) {
                batches.push(ids.splice(0, 10));
            }

            for (const batchIds of batches) {
                const productsAddedFromFirestore = await getDocs(
                    query(productsRef, where(documentId(), "in", batchIds))
                );

                productsAddedFromFirestore.docs.forEach((doc) => {
                    const dataDoc = doc.data();
                    const stockDb = dataDoc.stock;

                    const productAddedToCart = cart.find((prod) => prod.id === doc.id);
                    const prodQuantity = productAddedToCart?.quantity || 0;

                    if (stockDb >= prodQuantity) {
                        batch.update(doc.ref, { stock: stockDb - prodQuantity });
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc });
                    }
                });
            }

            if(outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db, 'orders')
                const orderAdded= await addDoc(orderRef,objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            }else{
                console.error('hay productos que estan fuera de stock', outOfStock)
            }

        }catch (error){
            console.error("Error al crear la orden:",error)
        }finally{
            setLoading(false)
        }
    }

    if(loading){
        return <h1>Se esta generando la orden...</h1>
    }

    if(orderId){
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return(
        <div>
            <h1>Checkout</h1>
            <div >
                <CheckoutForm onConfirm={createOrder}/>
            </div>
            
        </div>
    )
}

export default Checkout