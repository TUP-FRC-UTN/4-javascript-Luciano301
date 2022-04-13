function validate() {
    console.log('hola')
    if( document.myForm.name.value == "" ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor ingrese su nombre',
          })
       document.myForm.name.focus() ;
       return false;
    }
    if( document.myForm.lastName.value == "" ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor ingrese su apellido!',
          })
       document.myForm.lastName.focus() ;
       return false;
    }
    if( document.myForm.email.value == "" ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor ingrese su email',
          })
       document.myForm.email.focus() ;
       return false;
    }
    if( document.myForm.address.value == "" ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor ingrese su direccion!',
          })
       document.address.email.focus() ;
       return false;
    }
    if( document.myForm.document.value == "" || isNaN( document.myForm.document.value ) ||
       document.myForm.document.value.length != 8 ) {
       
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor ingrese un numero de  documento valido!',
          })
       document.myForm.document.focus() ;
       return false;
    }
    if( document.myForm.accountType.value == "-1" ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor seleccione un tipo de cuenta!',
          })
       return false;
    }
    Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Tu formulario ha sido enviado correctamente'
      })
    return true ;
 }