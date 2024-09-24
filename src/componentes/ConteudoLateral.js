import logo from "../Logo.png"
<img src={Logo} alt="Logo"></img>
function ConteudoLateral() {
    return (
        <div className='ConteudoLateral'>
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