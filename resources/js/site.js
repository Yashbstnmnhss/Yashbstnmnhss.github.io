function close_fuze()
{
    window.opener = null;
    window.open('', '_self');
    window.close();
}