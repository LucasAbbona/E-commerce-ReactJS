# Ecommerce-ReactJS

##
En este proyecto se hizo una pagina web (E-Commerce) en la cual se implemento las funcionalidades de un carrito, ya sea agregar productos, eliminarlo, comprobar si un producto ya se encontraba en el carrito y vaciar el carrito.Ademas se utilizo una api de firebase para traer los productos de la tienda,

### Librerias utilizadas;

react-icons (icono del carrito, redes sociales, etc)

react-spinner (Loader para la carga de productos)

react-route (Rutas de navegacion entre las paginas (checkout, itemlistcontainer, itemdetailcontainer,etc))

sweet-alert (Alertas perzonalizadas al agregar productos y finalizar orden)

##
En este proyeto se obtuvieron los productos mediante la interaccion con una api de firebase donde se subieron anteriormente los productos con sus datos. Mediante la manipulacion de esta api y el uso de hooks como el useEffect y el useState, se pudo crear una funcionalidad en la que se filtra por categorias a los productos, ademas que al hacer click en cada producto se puede ver informacion mas detallada del mismo con la posibilidad de poder agregarlo al carrito y elegir la cantidad deseada siempre y cuando sea menor a la cantidad de stock disponible, este stock es dinamico ya que cada vez que se finaliza una orden se restan las cantidades de productos en su stock.

En la vista del carrito se puede ver que el renderizado de la pagina es dinamico y condicional respecto a si hay productos en el carrito o no, en caso de haber nos deja eliminarlo del carrito, vaciar el carrito o finalizar la compra. Por otro lado si no hay productos no da una mensaje de carrito vacio y nos deja un link para ir a ver todos los productos.

En caso de finalizar la compra se debe completar un formulario y para que se pueda finalizar la orden se debe repetir el email, caso contrario el sistema no dejara que se envie el formulario. Una vez enviado el formulario se devuelve una alerta con el id de orden y en la base de datos en firebase se almacena la orden con los datos del formulario y del carrito.
