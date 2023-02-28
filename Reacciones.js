document.getElementById('Contacto').addEventListener('click', function()
{
    ocultar();
    document.getElementById('DContacto').style.display='Block';
    document.getElementById('DContacto').style.zIndex=1;
})
document.getElementById('Estudios').addEventListener('click', function()
{
    ocultar();
    document.getElementById('DEstudios').style.display='Block';
    document.getElementById('DEstudios').style.zIndex=1;
})
document.getElementById('Experiencia').addEventListener('click', function()
{
    ocultar();
    document.getElementById('DExperiencia').style.display='Block';
    document.getElementById('DExperiencia').style.zIndex=1;
})
document.getElementById('Conocimientos').addEventListener('click', function()
{
    ocultar();
    document.getElementById('DConocimientos').style.display='Block';
    document.getElementById('DConocimientos').style.zIndex=1;
})
document.getElementById('Objetivos').addEventListener('click', function()
{
    ocultar();
    document.getElementById('DObjetivos').style.display='Block';
    document.getElementById('DObjetivos').style.zIndex=1;
})




function ocultar()
{
    document.getElementById('DContacto').style.display='none';
    document.getElementById('DContacto').style.zIndex=0;

    document.getElementById('DEstudios').style.display='none';
    document.getElementById('DEstudios').style.zIndex=0;

    document.getElementById('DExperiencia').style.display='none';
    document.getElementById('DExperiencia').style.zIndex=0;

    document.getElementById('DConocimientos').style.display='none';
    document.getElementById('DConocimientos').style.zIndex=0;

    document.getElementById('DObjetivos').style.display='none';
    document.getElementById('DObjetivos').style.zIndex=0;
}