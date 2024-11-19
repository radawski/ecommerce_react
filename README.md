# Documentacion
### Características principales:
1. **Visualización de productos:**
   - Los productos se cargan desde **Cloud Firestore**, organizados en categorías.
   - Incluye un detalle individual de cada producto, que muestra su información relevante.

2. **Carrito de compras:**
   - Los usuarios pueden agregar productos al carrito desde las páginas de listado o detalle.
   - El carrito permite:
     - Ver el total de productos y el precio acumulado.
     - Modificar la cantidad de productos.
     - Eliminar productos individualmente o vaciar todo el carrito.

3. **Interfaz amigable:**
   - Utiliza **React-Bootstrap** para estilizar la interfaz con un diseño limpio y responsivo.
   - Un ícono de carrito visible (o escondido si está vacío) muestra la cantidad total de productos.

4. **Navegación fluida:**
   - Implementa **react-router-dom** para navegar entre categorías, detalles de productos, carrito y checkout.

5. **Checkout:**
   - Permite a los usuarios confirmar su compra una vez finalizado el proceso de selección de productos.
   - Se guarda la informacion de compra en la base de datos y se informa el ID correspondiente. 