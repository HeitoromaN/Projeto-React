import logo from "../Logo.png"
function ConteudoLateral() {
    return (
        <div className='ConteudoLateral'>
            <img src={logo} alt='Logo' className='logo' />
            <div>Logo</div>

            <div>menu
                <ul>
                    <li>Home</li>
                    <li>Pesquisa</li>
                    <li>Explorar</li>
                    <li>Mensagens</li>
                </ul>
            </div>
        </div>
    )
}

export default ConteudoLateral