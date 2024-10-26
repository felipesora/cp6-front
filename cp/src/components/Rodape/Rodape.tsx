import Image from 'next/image';
import Instagram from '../../Images/instagram.png'
import Linkedin from '../../Images/linkedin.png';
import Github from '../../Images/github.png';

export default function Rodape() {
    return (
        <footer className='rodape'>
            <div className="container-footer">
                <div className="redes_sociais">
                    <h2>
                        Acompanhe as nossas principais Redes Sociais!
                    </h2>

                    <div className='container_redes'>
                        <div className='redes github'>
                            <Image src={Github} width={50} height={30} alt="Logo do GitHub" />
                            <ul>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='GitHub de Eduarda Tiemi' href="https://github.com/dudatiemiak">Eduarda Tiemi</a></li>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='GitHub de Felipe Pizzinato' href="https://github.com/felipepizzinato">Felipe Pizzinato</a></li>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='GitHub de Felipe Sora' href="https://github.com/felipesora">Felipe Sora</a></li>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='GitHub de Gustavo Sandrini' href="https://github.com/gusandrini">Gustavo Sandrini</a></li>
                            </ul>
                        </div>
                        <div className='redes instagram'>
                            <Image src={Instagram} width={50} height={30} alt="Logo do Instagram" />
                            <ul>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='Instagram de Eduarda Tiemi' href="https://www.instagram.com/dudatiemiam/?igsh=aG4zaGNvZHRka293">Eduarda Tiemi</a></li>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='Instagram de Felipe Pizzinato' href="https://www.instagram.com/_pizzinato/?igsh=Z3FoYjhnNmJ5cHR2">Felipe Pizzinato</a></li>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='Instagram de Felipe Sora' href="https://www.instagram.com/felipesora_/">Felipe Sora</a></li>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='Instagram de Gustavo Sandrini' href="https://www.instagram.com/sandrini__/?igsh=MW5lYWtycG02MGJydA%3D%3D">Gustavo Sandrini</a></li>
                            </ul>
                        </div>
                        <div className='redes linkedin'>
                            <Image src={Linkedin} width={50} height={30} alt="Logo do Linkedin" />
                            <ul>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='Linkedin de Eduarda Tiemi' href="https://www.linkedin.com/in/eduarda-tiemi-akamini-machado-6908092b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">Eduarda Tiemi</a></li>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='Linkedin de Felipe Pizzinato' href="https://www.linkedin.com/in/felipe-pizzinato-0b041930b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">Felipe Pizzinato</a></li>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='Linkedin de Felipe Sora' href="https://www.linkedin.com/in/felipesora/">Felipe Sora</a></li>
                                <li><a className='link_redes' target='_blank' rel='noopener' title='Linkedin de Gustavo Sandrini' href="https://www.linkedin.com/in/gustavo-oliveira-7311ba2ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">Gustavo Sandrini</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
       
            
        
    )
}
